# From Django
from django.contrib.auth.models import User
from django.utils.translation import gettext as _

# My models
from apps.feed import models as feed_models
from apps.likes import models as likes_models

def validate_user_like_feed(user:User, feed:feed_models.Feed)->bool:
    """
        Method to verify if user have liked feed

        :param user: user that like feed
        :type user: User
        :para feed: feed
        :type feed: feed_models.Feed
        :raise: ValueError
        :return: bool
    """
    if likes_models.LikeFeed.objects.filter(user=user, feed=feed).exists():
        raise ValueError(str(_("you have already liked this feed")))
    return True