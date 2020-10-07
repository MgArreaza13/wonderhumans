from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from django.core.exceptions import PermissionDenied
from apps.comments import services as comments_services
from apps.comments import serializers as comments_serializers
from django.utils.translation import gettext as _
from django.core.exceptions import PermissionDenied
import json
# Create your views here.



class ManagementCommentsViewSet (APIView):
	"""
		Service for user profiles 
		contain cruds, creation, update, deleted, and list
	"""
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, id_homeless):
		try:
			comments = comments_services.getComments(id_homeless)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		print('********************')
		print(comments)
		print('********************')
		serializer = comments_serializers.CommentsSerializers(comments, many=True).data
		return Response(serializer, status=status.HTTP_200_OK)

	def post(self, request, id_homeless):
		body_unicode = request.body.decode('utf-8')
		body = json.loads(body_unicode)
		try:
			comments = comments_services.createComment(body,id_homeless,request.user)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = comments_serializers.CommentsSerializers(comments, many=True).data
		return Response(serializer, status=status.HTTP_200_OK)