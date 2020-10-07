import serpy 

class UserSerializers(serpy.Serializer):
	"""
		This class convert user data into json
	"""
	id = serpy.Field()
	first_name = serpy.Field()
	last_name = serpy.Field()
	email = serpy.Field()



class UserProfileSerializers(serpy.Serializer):
	"""
		This class convert user data into json
	"""
	# User Data - relation with User
	user = UserSerializers()
	# information personal
	id = serpy.Field()
	photo = serpy.MethodField()
	# Additional information personal
	occupation = serpy.Field()
	phone = serpy.Field()
	address = serpy.Field()
	city = serpy.Field()
	state = serpy.Field()
	country = serpy.Field()
	dateOfBirth = serpy.Field()
	aboutYou = serpy.Field()
	created_at = serpy.Field()



	def get_photo(self, obj):
		print('********************************************')
		print(obj)
		print('********************************************')
		"""
			With this method obtain phone number of the user

			:param obj: object User
			:type obj: Model User
			:return: if phone number is None return None
			:return: phone number
		"""
		if obj.photo:
			return obj.photo.url
		return None

class HomelessProfileSerializers(serpy.Serializer):
	# userRegisterer = models.ForeignKey(User, on_delete=models.CASCADE, null= True)
	firstName = serpy.Field()
	lastName = serpy.Field()
	email = serpy.Field()
	typeUser = serpy.Field()
	# photo = models.ImageField(upload_to='profile', blank=True, null=True)
	# Additional information personal
	occupation = serpy.Field()
	phone = serpy.Field()
	address = serpy.Field()
	city = serpy.Field()
	state = serpy.Field()
	country = serpy.Field()
	dateOfBirth = serpy.Field()
	aboutYou = serpy.Field()
	created_at = serpy.Field()