import serpy
from apps.accounts import serializers as accounts_serializers

class EventSerializers(serpy.Serializer):
    homeless = accounts_serializers.HomelessProfileSerializers()
    name =  serpy.Field()
    description = serpy.Field()
    total = serpy.Field()
    rest = serpy.Field()
    created_at = serpy.Field()


class DonationSerializers(serpy.Serializer):
    idStripe = serpy.Field()
    user = accounts_serializers.UserSerializers()
    event = EventSerializers()
    mount = serpy.Field()