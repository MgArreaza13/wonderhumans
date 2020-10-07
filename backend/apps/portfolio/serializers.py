import serpy 
from apps.accounts import serializers as accounts_serializers


class PortfolioSerializers(serpy.Serializer):
	"""
		This class convert user data into json
	"""
	id = serpy.Field()
	homeless = accounts_serializers.HomelessProfileSerializers()
	userRegisterer =  accounts_serializers.UserSerializers()
	image = serpy.MethodField()
	details = serpy.Field()



	def get_image(self, obj):
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
		if obj.image:
			return obj.image.url
		return None