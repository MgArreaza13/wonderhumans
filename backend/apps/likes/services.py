# From Django
from django.contrib.auth.models import User
from django.db.models import Q
from django.utils.translation import gettext as _
from django.db import transaction, IntegrityError, DatabaseError

# My models
from apps.likes import models as likes_models
from apps.feed import models as feed_models

# My validation
from apps.feed import validations as feed_validations
from apps.likes import validations as likes_validations

def create_like_feed(id_feed:int, user:User)->likes_models.LikeFeed:
    """
        Method to create a new like in feed

        :param id_feed: id feed 
        :type id_feed: int
        :param user: user to like feed
        :type user: User 
    """
    feed = feed_validations.validate_id(id_feed)
    # Validate that user not like more tha one like in feed
    likes_validations.validate_user_like_feed(user, feed)
    with transaction.atomic():
        try:
            like = likes_models.LikeFeed.objects.create(
                user = user,
                feed = feed,
            )
        except Exception as e:
            print(e)
            raise ValueError(str(_("An error ocurred while saving the feed like")))
    return like

def delete_like_feed(id_feed:int, user:User):
    """
        Method to dislik feed

        :param id_feed: id feed
        :type id_feed: int
        :param user: user who dislike 
        :type user: User
    """
    try:
        like_feed = likes_models.LikeFeed.objects.get(feed__id=id_feed, user=user)
        like_feed.delete()
    except likes_models.LikeFeed.DoesNotExist as e:
        raise ValueError(str(_("You dont have like in this feed")))
    return True