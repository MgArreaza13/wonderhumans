import serpy 
from apps.accounts import serializers as accounts_serializers




class CommentsSerializers(serpy.Serializer):
    user = accounts_serializers.UserSerializers()
    comment = serpy.Field()
    created_at = serpy.Field()