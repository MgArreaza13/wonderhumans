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


"""---- Services Of Image :"""

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

"""---- Services Of User :"""

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
	else:
		accounts_validations.validate_length('Username',username,3,25)
	if password is None or not password:
		raise ValueError(str(_("The password cannot be empty")))
	else:
		accounts_validations.validate_length('Password',password,5,25)
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
		accounts_validations.validate_length("Email",data.get("email"),0,300)
		accounts_validations.validate_email(email)
	else:
		raise ValueError(str(_("Email field is required")))
	# validate username
	if data.get('username') is not None:
		accounts_validations.validate_length('Username', data.get('username'),3,25)
		accounts_validations.validate_username(data.get('username'))
	else:
		raise ValueError(str(_("Username field is required")))
	# validate password1
	if data.get('password1') is not None:
		accounts_validations.validate_length('Password',data.get('password1'),5,25)
	else:
		raise ValueError(str(_("Password field is required")))
	# validate password2
	if data.get('password2') is not None:
		accounts_validations.validate_length('Password confirmation',data.get('password2'),5,25)
	else:
		raise ValueError(str(_("Password confirmation field is required")))
	# validate first name
	if data.get('first_name') is not None:
		accounts_validations.validate_length('First Name',data.get('first_name'),3,10)
	else:
		raise ValueError(str(_("First name field is required")))
	# validate last name
	if data.get('last_name') is not None:
		accounts_validations.validate_length('Last Name',data.get('last_name'),3,10)
	else:
		raise ValueError(str(_("Last name confirmation field is required")))
	if data.get('password1') != data.get('password2'):
		raise ValueError(str(_("An error occurred while saving the user, Passwords do not match")))
	with transaction.atomic():
		try:
			user_registered = accounts_models.User.objects.create(
				username=data.get('username').lower(),
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

"""---- Services Of Profile :"""

def get_profile(user: accounts_models.User) -> Profile:
	try:
		# Obtain profile from database if exist
		profile = Profile.objects.get(Q(user__id=user.id))
	except Profile.DoesNotExist as e:
		raise ValueError(str(_("User dont have profile")))
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
	# Validate profile dont exist
	profile_exists = accounts_validations.validate_user_profile(user)
	if profile_exists == True:
		raise ValueError(str(_("Profile already exist")))
	# Edit user account
	if data.get("firstName") is not None:
		accounts_validations.validate_length("First Name",data.get("firstName"),3,10)
		user.first_name = data.get("firstName")
	if data.get("lastName") is not None:
		accounts_validations.validate_length("Last Name",data.get("lastName"),3,10)
		user.last_name = data.get("lastName")
	if data.get("email") is not None:
		accounts_validations.validate_length("Email",data.get("email"),0,300)
		user.email = data.get("email")
	user.save()
	# valitation of data profile
	if data.get("show_email") is not None:
		data["show_email"] = accounts_validations.validate_show_email(data.get("show_email"))
	else:
		raise ValueError(str(_("Show email field is required")))
	if data.get("dateOfBirth") is not None:
		birth = accounts_validations.validate_birth(data.get("dateOfBirth"))
	else:
		raise ValueError(str(_("Data of birth field is required")))
	if data.get("occupation") is not None:
		accounts_validations.validate_length("Occupation",data.get("occupation"),3,25)
	else:
		raise ValueError(str(_("Occupation field is required")))
	if data.get("city") is not None:
		accounts_validations.validate_length("city",data.get("city"),3,15)
	else:
		raise ValueError(str(_("City field is required")))
	if data.get("country") is not None:
		accounts_validations.validate_length("country",data.get("country"),4,25)
	else:
		raise ValueError(str(_("Country field is required")))
	if data.get("aboutYou") is not None:
		accounts_validations.validate_length("About You",data.get("aboutYou"),4,100)
	else:
		raise ValueError(str(_("About you field is required")))
	with transaction.atomic():
		try:
			profile_registered = Profile.objects.create(
				user = user,
				show_email = data.get("show_email"),
				occupation = data.get("occupation"),
				city = data.get("city"),
				country = data.get("country"),
				dateOfBirth = birth,
				aboutYou = data.get("aboutYou")
			)
		except Exception as e:
			print(e)
			raise ValueError(str(_("An error occurred while saving the user")))
	if data.get("photo") is not None:
		profile_registered.photo = updateImage(data.get("photo"))
		profile_registered.save()
	return profile_registered

def change_profile(data: dict, user: accounts_models.User) -> Profile:
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
	profile_exists = accounts_validations.validate_user_profile(user)
	if profile_exists == False:
		raise ValueError(str(_("Profile not exist")))
	# Edit user account
	if data.get("firstName") is not None:
		accounts_validations.validate_length("First Name",data.get("firstName"),3,10)
		user.first_name = data.get("firstName")
	if data.get("lastName") is not None:
		accounts_validations.validate_length("Last Name",data.get("lastName"),3,10)
		user.last_name = data.get("lastName")
	if data.get("email") is not None:
		accounts_validations.validate_length("Email",data.get("email"),0,300)
		user.email = data.get("email")
	user.save()
	# Edit profile
	profile = Profile.objects.get(user=user)
	# valitation of data profile
	if data.get("show_email") is not None:
		show_email = accounts_validations.validate_show_email(data.get("show_email"))
		profile.show_email = show_email
	if data.get("dateOfBirth") is not None:
		birth = accounts_validations.validate_birth(data.get("dateOfBirth"))
		profile.dateOfBirth = birth
	if data.get("occupation") is not None:
		accounts_validations.validate_length("Occupation",data.get("occupation"),3,25)
		profile.occupation = data.get("occupation")
	if data.get("city") is not None:
		accounts_validations.validate_length("City",data.get("city"),3,15)
		profile.city = data.get("city")
	if data.get("country") is not None:
		accounts_validations.validate_length("country",data.get("country"),4,25)
		profile.country = data.get("country")
	if data.get("aboutYou") is not None:
		profile.aboutYou = data.get("aboutYou")
	if data.get("photo") is not None:
		profile.photo = updateImage(data.get("photo"))
	profile.save()
   # logger.debug("profile has been changed correctly in account of %s" % user.username)
	return profile


"""---- Services Of Homeless :"""

def create_homeless_profile(data: dict, user: accounts_models.User) -> Profile :
	"""
		Get access user into.
		Raise exception if user or password are incorrect or user does not exist.

		:param data: data of homeless
		:type: dict.
		:param user: user in system
		:type: accounts_models.User.
		:return: homeless profile.
		:raises: ValueError.
	"""
	userRegisterer = accounts_models.User.objects.get(id=user.id)
	typeUser: str = 'homeless'
	if data.get("firstName") is not None:
		accounts_validations.validate_length("First Name",data.get("firstName"),3,10)
	else:
		raise ValueError(str(_("First Name field is required")))
	if data.get("lastName") is not None:
		accounts_validations.validate_length("Last Name",data.get("lastName"),3,10)
	else:
		raise ValueError(str(_("Last Name field is required")))
	if data.get("email") is not None:
		accounts_validations.validate_length("Email",data.get("email"),0,300)
		accounts_validations.validate_email(data.get("email"))
	else:
		raise ValueError(str(_("Email field is required")))
	if data.get("show_email") is not None:
		data["show_email"] = accounts_validations.validate_show_email(data.get("show_email"))
	else:
		raise ValueError(str(_("Show email field is required")))
	if data.get("dateOfBirth") is not None:
		birth = accounts_validations.validate_birth(data.get("dateOfBirth"))
	else:
		raise ValueError(str(_("Date of birth field is required")))
	if data.get("occupation") is not None:
		accounts_validations.validate_length("Occupation",data.get("occupation"),3,25)
	else:
		raise ValueError(str(_("Occupation field is required")))
	if data.get("city") is not None:
		accounts_validations.validate_length("city",data.get("city"),3,15)
	else:
		raise ValueError(str(_("City field is required")))
	if data.get("country") is not None:
		accounts_validations.validate_length("country",data.get("country"),4,25)
	else:
		raise ValueError(str(_("Country field is required")))
	if data.get("aboutYou") is not None:
		accounts_validations.validate_length("About You",data.get("aboutYou"),4,100)
	else:
		raise ValueError(str(_("About you field is required")))
	if data.get("location_detail") is not None:
		accounts_validations.validate_length("Loation detail",data.get("location_detail"),3,50)
	else:
		raise ValueError(str(_("Location detail field is required")))
	try:
		profile: Profile =  HomelessProfile.objects.create(

			userRegisterer = userRegisterer,
			firstName = data.get("firstName"),
			lastName = data.get("lastName"),
			typeUser = typeUser,
			email = data.get("email"),
			show_email = data.get("show_email"),
			#Additional information personal
			occupation = data.get("occupation"),
			# phone = phone,
			# address = address,
			city = data.get("city"),
			country = data.get("country"),
			location_detail = data.get("location_detail"),
			dateOfBirth = birth,
			aboutYou = data.get("aboutYou"),
		)
	except Exception as e:
		print(e)
		raise ValueError(str(_("An error occurred while saving the profile")))
	if data.get("photo") is not None:
		#accounts_validations.validate_length('Photo',data.get("photo"),0,300)
		profile.photo = updateImage(data.get("photo"))
		profile.save()
	return profile

def get_profile_homeless(id_homeless: int) -> HomelessProfile:
	"""
		Get data of Homeless Profile.
		Raise exception if homeless profile does not exist.

		:param id_homeless: id of homeless.
		:type: int.
		:return: Homeless Profile.
		:raises: ValueError.
	"""
	try:
		# Obtain profile from database if exist
		profile = HomelessProfile.objects.get(Q(id= id_homeless))
	except Profile.DoesNotExist as e:
		raise ValueError(str(_("El usuario no tiene perfil")))
	return profile


def filterMyHomelessProfile(user: accounts_models.User):
	"""
		Get data of homeless profile related whit a user.

		:param user: user in system
		:type: accounts_models.User.
		:return: dict of homeless
	"""
	#todo ponerle las validaciones
	data = []
	profiles = HomelessProfile.objects.filter(userRegisterer__id = user.id)
	if (len(profiles) == 0):
		# error 
		return data
	elif (len(profiles) > 0):

		for p in profiles:
			values = {
				'id': p.id,
				'firstName': p.firstName,
				'lastName' : p.lastName,
				'email' : p.email,
				'show_email': p.show_email,
				# Additional information personal
				'occupation' : p.occupation,
				'phone' : p.phone,
				'address' : p.address,
				'city' : p.city,
				'state' : p.state,
				'location_detail': p.location_detail,
				'country' : p.country,
				'dateOfBirth' : p.dateOfBirth,
				'aboutYou' : p.aboutYou,
				'created_at' : p.created_at
				}
			if p.photo:
				values['photo'] = p.photo.url
			else:
				values['photo'] = ''
			data.append(values)
		return data