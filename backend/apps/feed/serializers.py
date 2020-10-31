import serpy

# My serializer
from apps.accounts import serializers as accounts_serializers

class FeedSerializers(serpy.Serializer):

    id = serpy.Field()
    userRegisterer = accounts_serializers.UserSerializers()
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
