import serpy

# My serializer
from apps.accounts import serializers as accounts_serializers

class FoodRunSerializers(serpy.Serializer):

    id = serpy.Field()
    user = accounts_serializers.UserSerializers()
    name = serpy.Field()
    description = serpy.Field()
    total = serpy.Field()
    rest = serpy.Field()
    total_volunteers = serpy.Field()
    rest_volunteers = serpy.Field()
    status = serpy.Field()
    created_at = serpy.Field()

class FoodDonationSerializers(serpy.Serializer):

    id = serpy.Field()
    id_stripe = serpy.Field()
    food = FoodRunSerializers()
    user = accounts_serializers.UserSerializers()
    amount = serpy.Field()

class FoodVolunteerSerializers(serpy.Serializer):

    id = serpy.Field()
    user = accounts_serializers.UserSerializers()
    food = FoodRunSerializers()

class FoodFeedSerializers(serpy.Serializer):

    id = serpy.Field()
    user = accounts_serializers.UserSerializers()
    food = FoodRunSerializers()
    image = serpy.MethodField('get_image')
    description = serpy.Field() 
    created_at = serpy.Field()

    def get_image(self, obj):
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