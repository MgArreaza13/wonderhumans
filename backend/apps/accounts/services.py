from django.contrib.auth import models as accounts_models
from django.db.models import Q
from django.contrib.auth import authenticate
from django.utils.translation import gettext as _
from django.contrib.auth.models import Group
from django.db import transaction, IntegrityError, DatabaseError
from django.core.exceptions import PermissionDenied
import datetime as datetime_modules
from apps.accounts import validations as accounts_validations
from django.contrib.auth.hashers import make_password
from apps.accounts import tasks as accounts_task
from apps.accounts.tasks import welcome_email
from apps.accounts.models import Profile
from apps.accounts.models import HomelessProfile
from apps.utils.qr import saveQrCode



def getImage(ur):
    import base64

    from django.core.files.base import ContentFile
    
    if ur != None:
        format, imgstr = ur.split(';base64,')  # format ~= data:image/X,
        ext = format.split('/')[-1]  # guess file extension
        ur = ContentFile(base64.b64decode(imgstr), name='profileimg.' + ext)
        return ur
    return None

def updateImage(ur):
    import base64

    from django.core.files.base import ContentFile
    
    format, imgstr = ur.split(';base64,')  # format ~= data:image/X,
    ext = format.split('/')[-1]  # guess file extension
    return ContentFile(base64.b64decode(imgstr), name='profileimg.' + ext)
    #return ur

def login(data: dict) -> accounts_models.User:
	"""
		Get access user 
		Raise exception if user or password are incorrect or user does not exist.

		:param data: username and password of user.
		:type: dict.
		:return: user.
		:raises: ValueError, PermissionDenied.
	"""
	username = data.get("username", None)
	password = data.get("password", None)
	if username is None or not username:
		raise ValueError(str(_("The username cannot be empty")))
	if password is None or not password:
		raise ValueError(str(_("The password cannot be empty")))
	try:
		# Obtain user from database if exist
		user = accounts_models.User.objects.get(Q(username=username) | Q(email=username.lower()))
	except accounts_models.User.DoesNotExist as e:
		print(e)
		raise ValueError(str(_("The username or password is incorrect")))
	# Verify is user is active
	if not user.is_active:
		raise PermissionDenied(str(_("Account blocked, contact the administrators.")))
	# Verify if password match
	if not user.check_password(password):
		raise ValueError(str(_("The username or password is incorrect")))
	user = authenticate(username=user.username, password=password)
	return user



def logout(user: accounts_models.User) -> bool:
	"""
		Remove token access to user
		Raises exception if user is inactive.

		:param user: User into app
		:type: Model User.
		:return: User.
		:raises: ValueError.
	"""
	user.last_login = datetime_modules.datetime.now()
	user.save()
	user.auth_token.delete()
	return True



def register_user(data: dict, user: accounts_models.User):
	"""
		Method to register user in massone

		:param data: information of user to register
		:type data: dict
		:param user: user admin
		:type user: Model User
		:return: user
		:raises: ValueError
	"""
	email = data.get('email')
	# validate email
	if email is not None:
		accounts_validations.validate_email(email)
	else:
		email = ""
	# validate username
	if data.get('username') is not None:
		accounts_validations.validate_username(data.get('username'))
	# validate password
	if data.get('password1') != data.get('password2'):
		raise ValueError(str(_("An error occurred while saving the user, Passwords do not match")))
	with transaction.atomic():
		try:
			user_registered = accounts_models.User.objects.create(
				username=data.get('username'),
				first_name=data.get('first_name'),
				last_name=data.get('last_name'),
				email=email,
				password=make_password(data.get('password1')),
			)
			# if user_registered.email != "":
			# 	welcome_email.delay(user_registered.username, user_registered.email)
		except Exception as e:
			print(e)
			raise ValueError(str(_("An error occurred while saving the user")))
	return user_registered



def get_profile(user: accounts_models.User) -> Profile:
	try:
		# Obtain profile from database if exist
		profile = Profile.objects.get(Q(user__id=user.id))
	except Profile.DoesNotExist as e:
		raise ValueError(str(_("El usuario no tiene perfil")))
	return profile


def create_profile(data: dict, user: accounts_models.User) -> Profile :
	"""
		Get access user into.
		Raise exception if user or password are incorrect or user does not exist.

		:param data: user, photo, position, phone, address, city, state, country, zipcode
		:type: dict.
		:return: user.
		:raises: ValueError, PermissionDenied.
	"""
	occupation: str = data.get("occupation", None)
	# phone: str = data.get("phone", None)
	# address: str = data.get("address", None)
	city: str = data.get("city", None)
	# state: str = data.get("state", None)
	country: str = data.get("country", None)
	# dateOfBirth: str = data.get("dateOfBirth", None)
	aboutYou: str = data.get("aboutYou", None)
	profile: Profile = Profile.objects.filter(user = user)
	if (len(profile) > 0):
		# has profile
		raise ValueError(str(_("El usuario tiene perfil")))
	else:
		# create profile
		# Verify is user is active
		if not user.is_active:
			raise PermissionDenied(str(_("Cuenta bloqueada, contacte a los administradores.")))
		try:
			profile: Profile =  Profile.objects.create(

				user = user,
				photo = getImage(data.get("photo", None)),
				#Additional information personal
				occupation = occupation,
				# phone = '0414850780',
				# address = 'las cayenas',
				city = city,
				# state = 'Monagas',
				country = country,
				# dateOfBirth = '1994/04/1994',
				aboutYou = aboutYou,
			)
		except Exception as e:
			print(e)
			raise ValueError(str(_("Se produjo un error al guardar el perfil.")))
		return profile

def change_profile(data: dict, user: Profile) -> Profile:
	"""
		Method to change profile name, lastname or profile.
		raises exception if profile does not exist or the data sent is empty

		:param data: user data.
		:type data: dict.
		:param user: user massone.
		:type user: Model User.
		:return: user
		:raises: ValueError
	"""

	# user.photo = updateImage(data.get("photo", None))
	user.occupation =data.get('occupation')
	# user.phone = data.get('phone')
	# user.address = 'Las Cayenas' #data.get('address')
	user.city =data.get('city')
	# user.state = data.get('state')
	user.country =data.get('country')
	# user.dateOfBirth =data.get('dateOfBirth')
	user.aboutYou =data.get('aboutYou')
	user.save()
   # logger.debug("profile has been changed correctly in account of %s" % user.username)
	return user



def create_homeless_profile(data: dict, user: accounts_models.User) -> Profile :
	"""
		Get access user into.
		Raise exception if user or password are incorrect or user does not exist.

		:param data: user, photo, position, phone, address, city, state, country, zipcode
		:type: dict.
		:return: user.
		:raises: ValueError, PermissionDenied.
	"""
	userRegisterer = accounts_models.User.objects.get(id = user.id)
	typeUser: str = 'homeless'
	firstName: str = data.get("firstName", None)
	lastName: str = data.get("lastName", None)
	email: str = data.get("email", None)
	occupation: str = data.get("occupation", None)
	# phone: str = data.get("phone", None)
	# address: str = data.get("address", None)
	city: str = data.get("city", None)
	state: str = data.get("state", None)
	country: str = data.get("country", None)
	dateOfBirth: str = data.get("dateOfBirth", None)
	aboutYou: str = data.get("aboutYou", None)
	try:
		profile: Profile =  HomelessProfile.objects.create(

			userRegisterer = userRegisterer,
			firstName = firstName,
			lastName = lastName,
			typeUser = typeUser,
			email = email,
			photo = saveQrCode('http://localhost:4200/homeless-profile/4'),
			#Additional information personal
			occupation = occupation,
			# phone = phone,
			# address = address,
			city = city,
			state = state,
			country = country,
			dateOfBirth = dateOfBirth,
			aboutYou = aboutYou,
		)
	except Exception as e:
		print(e)
		raise ValueError(str(_("Se produjo un error al guardar el perfil.")))
	return profile



def get_profile_homeless(id_homeless: int) -> HomelessProfile:
	try:
		# Obtain profile from database if exist
		profile = HomelessProfile.objects.get(Q(id= id_homeless))
	except Profile.DoesNotExist as e:
		raise ValueError(str(_("El usuario no tiene perfil")))
	return profile


def filterMyHomelessProfile(user: accounts_models.User):
	#todo ponerle las validaciones
	data = []
	profiles = HomelessProfile.objects.filter(userRegisterer__id = user.id)
	if (len(profiles) == 0):
		# error 
		return data
	elif (len(profiles) > 0):

		for p in profiles:
			data.append(
				{
				'id': p.id,
				'firstName': p.firstName,
				'lastName' : p.lastName,
				'email' : p.email,
				# 'photo' : p.photo,
				# Additional information personal
				'occupation' : p.occupation,
				'phone' : p.phone,
				'address' : p.address,
				'city' : p.city,
				'state' : p.state,
				'country' : p.country,
				'dateOfBirth' : p.dateOfBirth,
				'aboutYou' : p.aboutYou,
				'created_at' : p.created_at
				}
			)
		return data