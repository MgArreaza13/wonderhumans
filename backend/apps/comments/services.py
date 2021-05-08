# From Django
from django.contrib.auth.models import User
from django.db.models import Q
from django.contrib.auth import authenticate
from django.utils.translation import gettext as _
from django.contrib.auth.models import Group
from django.db import transaction, IntegrityError, DatabaseError
from django.core.exceptions import PermissionDenied

# My models
from apps.comments import models as comments_models
from apps.accounts import models as accounts_models
from apps.feed import models as feed_models

# My validation
from apps.accounts import validations as accounts_validations

def getComments(id_homeless: int):
	comments = comments_models.Comment.objects.filter(homeless__id = id_homeless)
	return comments


def createComment(data, id_homeless ,user):
	comments = []
	if data.get("comment") is not None:
		accounts_validations.validate_length("Comment",data.get("comment"),2,255)
	else:
		raise ValueError(str(_("Comment is required")))
	comment: str = data.get("comment", None)
	try:
		commentResult =  comments_models.Comment.objects.create(

			user = User.objects.get(id = user.id),
			homeless = accounts_models.HomelessProfile.objects.get(id = id_homeless),
			comment = comment
			)
		comments = comments_models.Comment.objects.filter(homeless__id = id_homeless)
	except Exception as e:
		print(e)
		raise ValueError(str(_("An error occurred while saving the comment")))
	return comments

def create_comment_feed(data:dict, id_feed:int, user:User)->comments_models.CommentFeed:
	"""
		Method to create a new comment about feed

		:param data: contains data to comment
		:type param: dict
		:param user: user that comment feed
		:type user: User
		:param id_feed: feed id comment
		:type id: int
		:raise: ValueError
		:return: comment_models.CommentFeed
	"""
	if data.get("comment") is not None:
		accounts_validations.validate_length("Comment",data.get("comment"),2,255)
	else:
		raise ValueError(str(_("Comment is required")))
	with transaction.atomic():
		try:
			feed = comments_models.CommentFeed.objects.create(
				user = user,
				feed = feed_models.Feed.objects.get(id=id_feed),
				comment = data.get("comment")
			)
		except Exception as e:
			print(e)
			raise ValueError(str(_("An error occurred while saving the comment feed")))
	return feed

def get_comments_feed(id_feed:int)->dict:
	"""
		Method to gets all comments feed

		:param id_feed: id feed
		:type id_feed: int
		:raise: ValueError
		:return: comments
	"""
	try:
		feed = feed_models.Feed.objects.get(id=id_feed)
	except feed_models.Feed.DoesNotExist as e:
		raise ValueError(str(_("Feed id does not exist")))
	comments = comments_models.CommentFeed.objects.filter(feed=feed)
	return comments

def delete_comment_feed(id_feed:int, user:User):
	"""
		Metho to delete a comment feed by user

		:param id_feed: feed id of comment
		:type id_feed: int
		:raise: ValueError
	"""
	try:
		comment_feed = comments_models.CommentFeed.objects.get(user=user,id=id_feed)
		comment_feed.delete()
	except comments_models.CommentFeed.DoesNotExist as e:
		raise ValueError(str(_("Comment not exist")))

def update_comment_feed(data:dict, user:User)->comments_models.CommentFeed:
	"""
		Method to udate a comment feed by user

		:param data: new data in comment
		:type data: dict
		:param user: User who update comment
		:type user: Uer
		:raise: ValueError
		:return: comments_models.CommentFeed
	"""
	try:
		comment_feed = comments_models.CommentFeed.objects.get(user=user, id=data.get("id"))
		if data.get("comment") is not None:
			accounts_validations.validate_length("Comment",data.get("comment"),2,255)
		else:
			raise ValueError(str(_("Comment is required")))
		comment_feed.comment = data.get("comment")
		comment_feed.save()
	except comments_models.CommentFeed.DoesNotExist as e:
		raise ValueError(str(_("Comment not exist")))
	return comment_feed