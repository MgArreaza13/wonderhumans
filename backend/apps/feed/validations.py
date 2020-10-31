# From Django
from django.utils.translation import gettext as _

# My models
from apps.feed import models as feed_models

def validate_id(id:int)->feed_models.Feed:
    """
        Method to verify with id if a feed exists

        :param id: feed id
        :type id: int
        :raise: ValueError
        :return bool
    """
    try:
        feed = feed_models.Feed.objects.get(id=id)
    except feed_models.Feed.DoesNotExist as e:
        raise ValueError(str(_("The entered id does not belong to any feed")))
    return feed