from django.contrib.auth import models as accounts_models
from django.db.models import Q
from django.contrib.auth import authenticate
from django.utils.translation import gettext as _
from django.contrib.auth.models import Group
from django.db import transaction, IntegrityError, DatabaseError
from django.core.exceptions import PermissionDenied
from apps.comments import models as comments_models
from django.contrib.auth.models import User
from apps.accounts import models as accounts_models

def getComments(id_homeless: int):
	comments = comments_models.Comment.objects.filter(homeless__id = id_homeless)
	return comments


def createComment(data, id_homeless ,user):
	comments = []
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
		raise ValueError(str(_("Se produjo un error al guardar el comentario.")))
	return comments