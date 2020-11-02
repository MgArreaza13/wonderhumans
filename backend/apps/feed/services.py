# From Django
from django.contrib.auth import models as accounts_models
from django.db.models import Q
from django.utils.translation import gettext as _
from django.db import transaction, IntegrityError, DatabaseError

# From python
import datetime as datetime_modules

# My services
from apps.accounts import services as accounts_services

# My models
from apps.feed import models as feed_models
from apps.likes import models as likes_models
from apps.comments import models as comments_models

# My validations
from apps.accounts import validations as accounts_validations
from apps.feed import validations as feed_validations

# My serializers
from apps.feed import serializers as feed_serializers

def create_feed(data:dict, user:accounts_models.User)->feed_models.Feed:
    """
        Method to create a new post in feed

        :param data: contains data about post
        :type data: dict
        :param user: user that is creating post in feed
        :type user: accounts_models.User
        :raise: ValueError
        :return: feed_models.Feed
    """
    if data.get("image") is None:
        raise ValueError(str(_("Image is required")))
    if data.get("description") is not None:
        accounts_validations.validate_length("Description",data.get("description"),0,65000)
    else:
        raise ValueError(str(_("Description is required")))
    with transaction.atomic():
        try:
            feed = feed_models.Feed.objects.create(
                userRegisterer = user,
                image = accounts_services.updateImage(data.get("image")),
                description = data.get("description") 
            )
        except Exception as e:
            print(e)
            raise ValueError(str(_("An error occurred while saving the feed")))
    return feed
    
def filter_feeds(id_user:int, user:accounts_models.User)->list:
    """
        Method to filter all feed for id user

        :param id_user: user id 
        :type id: int
        :param user: user that make query
        :type user: accounts_models.User
        :raise: ValueError
        :return: list
    """
    feeds = []
    feed_list = feed_models.Feed.objects.filter(userRegisterer__id=id_user)
    if (len(feed_list) == 0):
        raise ValueError(str(_("Does not have feeds yet")))
    else: 
        for feed in feed_list:
            value = feed_serializers.FeedSerializers(feed, many=False).data
            # count likes
            total_likes = likes_models.LikeFeed.objects.filter(feed__id=feed.id).count()
            value['total_likes'] = total_likes
            # verify if user liked this feed
            if likes_models.LikeFeed.objects.filter(feed__id=feed.id,user=user).exists():
                value['i_like'] = 'true'
            else:
                value['i_like'] = 'false'
            # count comments
            total_comments = comments_models.CommentFeed.objects.filter(feed__id=feed.id).count()
            value['total_comments'] = total_comments
            # verify if user comment this feed
            if comments_models.CommentFeed.objects.filter(feed__id=feed.id).exists():
                value['i_commented'] = 'true'
            else:
                value['i_commented'] = 'false'
            feeds.append(value)
    return feeds

def get_feed(id_feed:int, user:accounts_models.User)->feed_models.Feed:
    """
        Method to filter all feed for id feed

        :param id_feed: feed id 
        :type id: int
        :param user: user that make query
        :type user: accounts_models.User
        :raise: ValueError
        :return: list
    """
    try:
        feed = feed_models.Feed.objects.get(id=id_feed)
        feed = feed_serializers.FeedSerializers(feed, many=False).data
        # count likes
        total_likes = likes_models.LikeFeed.objects.filter(feed__id=id_feed).count()
        feed['total_likes'] = total_likes
        # verify if user liked this feed
        if likes_models.LikeFeed.objects.filter(feed__id=id_feed,user=user).exists():
            feed['i_like'] = 'true'
        else:
            feed['i_like'] = 'false'
        # count comments
        total_comments = comments_models.CommentFeed.objects.filter(feed__id=id_feed).count()
        feed['total_comments'] = total_comments
        # verify if user comment this feed
        if comments_models.CommentFeed.objects.filter(feed__id=id_feed).exists():
            feed['i_commented'] = 'true'
        else:
            feed['i_commented'] = 'false'
    except feed_models.Feed.DoesNotExist as e:
        raise ValueError(str(_("The feed does not exist")))
    return feed

def delete_feed(id_feed:int, user:accounts_models.User):
    """
        Method to delete feed by user

        :param id_feed: feed id
        :type id_feed: int
        :param user: user created feed and now want delete
        :para user: accounts_models.User
    """
    try:
        feed = feed_models.Feed.objects.get(id=id_feed, userRegisterer=user)
        feed.delete()
    except feed_models.Feed.DoesNotExist as e:
        raise ValueError(str(_("Feed does not exist")))

def update_feed(data:dict, user:accounts_models.User)->feed_models.Feed:
    """
        Method to updte feed by user

        :param data: data to update in feed
        :type data: dict
        :param user: user who created the feed and now updates it
        :type user: accounts_models.User
        :raise: ValueError
        :return: feed_models.Feed
    """
    if data.get("id") is not None:
        feed_validations.validate_id(data.get("id"))
    else:
        raise ValueError(str(_("id feed is required")))
    try:
        feed = feed_models.Feed.objects.get(id=data.get("id"), userRegisterer=user)
    except feed_models.Feed.DoesNotExist as e:
        raise ValueError(str(_("You dont have permission to update this feed")))
    if data.get("image") is not None:
        feed.image = accounts_services.updateImage(data.get("image"))
    if data.get("description") is not None:
        accounts_validations.validate_length("Description",data.get("description"),0,65000)
        feed.description = data.get("description")
    feed.save()
    return feed