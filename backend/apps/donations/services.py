from apps.donations import models as donations_models 
from django.contrib.auth.models import User
from apps.accounts import models as accounts_models


def getDonations(id_homeless: int):
    donations = donations_models.Donation.objects.filter(event__homeless__id = id_homeless)
    return donations


def getEvents(id_homeless: int):
    events = donations_models.Event.objects.filter(homeless__id = id_homeless)
    return events

def createEvent(data, id_homeless, user):	
	events = []
	name: str = data.get("name", None)
	total: str = data.get("total", None)
	description: str = data.get("description", None)
	try:
		eventResult =  donations_models.Event.objects.create(			
			homeless = accounts_models.HomelessProfile.objects.get(id = id_homeless),
			user = User.objects.get(id = user.id),
			name = name,
			total = total,
			description = description
			)
		events = donations_models.Event.objects.filter(homeless__id = id_homeless)
		print(events)
	except Exception as e:
		print(e)
		raise ValueError(str(_("Se produjo un error al guardar el evento.")))
	return events