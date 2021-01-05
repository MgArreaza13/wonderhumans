# From Django
from django.contrib.auth.models import User
from django.utils.translation import gettext as _
from django.db import transaction, IntegrityError, DatabaseError

# My models
from apps.donations import models as donations_models 
from apps.accounts import models as accounts_models

# My validations
from apps.donations import validations as donations_validations

# Services to cause

def get_cause(id_cause:int)->dict:
	try:
		cause = donations_models.Cause.objects.get(id = id_cause)
	except donations_models.Cause.DoesNotExist as e:
		raise ValueError(str(_("id does not exits")))
	return cause

def get_causes(id_homeless: int):
    causes = donations_models.Cause.objects.filter(homeless__id = id_homeless)
    return causes

def create_cause(data, id_homeless, user):	
	name: str = data.get("name", None)
	total: float = data.get("total", None)
	description: float = data.get("description", None)
	if name is not None:
		donations_validations.validate_length("Name",name,3,100)
	else:
		raise ValueError(str(_("Name is required")))
	if total is not None:
		if total <=10 or total > 9999999:
			raise ValueError(str(_("Min value in total is 10 and max is 9999999")))
	else:
		raise ValueError(str(_("Total is required")))
	if description is not None:
		donations_validations.validate_length("Description",description,20,150)
	else:
		raise ValueError(str(_("Descriprion is required")))
	try:
		cause =  donations_models.Cause.objects.create(			
			homeless = accounts_models.HomelessProfile.objects.get(id = id_homeless),
			user = User.objects.get(id = user.id),
			name = name,
			description = description,
			total = total,
			rest = total,
			status = 'open'
			)
	except Exception as e:
		print(e)
		raise ValueError(str(_("Se produjo un error al guardar el evento.")))
	return cause

# Services to Donations

def getDonations(id_cause: int):
	donations = donations_models.Donation.objects.filter(cause__id = id_cause)
	return donations

def create_donation(data:dict, user:User):
	"""
		Method to create a new donation

		:param data: content mont donation to some event
		:type data: dict
		:raise: ValueError
		:return:
	"""
	if data.get("id_cause") is not None:
		cause = get_cause(data.get("id_cause"))
		if cause.status == 'closed':
			raise ValueError(str(_("This cause not allow more donations")))
	else:
		raise ValueError(str(_("id_cause is required")))
	if data.get("id_stripe") is not None:
		donations_validations.validate_length("idStripe",data.get("id_stripe"),1,100)
	else:
		raise ValueError(str(_("idStripe is required")))
	
	if data.get("amount") is not None:
		if data.get("amount") < 0.01:
			raise ValueError(str(_("Min value in total is 0.01")))	
		rest = float(cause.rest)
		if data.get("amount") > rest:
			raise ValueError(str(_("The amount cannot be greater than the remainder")))
		amount: float = data.get("amount")
	else:
		raise ValueError(str(_("amount is required")))
	with transaction.atomic():
		try:
			donation = donations_models.Donation.objects.create(
				idStripe = data.get("id_stripe"),
				user = user,
				cause = cause,
				amount = amount
			)
		except Exception as e:
			print(e)
			raise ValueError(str(_("there was an error saving the donation")))
	cause.rest = rest - amount
	if cause.rest <=0:
		cause.status = 'closed'
	cause.save()
	return donation