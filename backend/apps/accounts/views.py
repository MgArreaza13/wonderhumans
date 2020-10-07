from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from apps.accounts import serializers as accounts_serializers
from apps.accounts import services as accounts_services
from apps.accounts import models as accounts_models
from django.utils.translation import gettext as _
from django.core.exceptions import PermissionDenied
import json
# Create your views here.


class LoginView(APIView):
	"""
	   Get access to API with user information
	"""
	permission_classes = (permissions.AllowAny,)

	def post(self, request):
		try:
			user = accounts_services.login(request.data)
		except ValueError as e:
			return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({"detail": str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		token, created = Token.objects.get_or_create(user=user)
		serializer = accounts_serializers.UserSerializers(user, many=False).data
		serializer['username'] = user.username
		serializer['token'] = token.key
		serializer['last_login'] = user.last_login
		return Response(serializer, status=status.HTTP_200_OK)


class LogoutView(APIView):
	"""
		Deletes the user's token in the system.
	"""
	permission_classes = (permissions.IsAuthenticated,)
	def post(self, request):
		try:
			user = accounts_services.logout(user=request.user)
		except ValueError as e:
			return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({"detail": str(e)}, status=status.HTTP_403_FORBIDDEN)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		return Response({'detail': str(_('You have disconnected from the system'))}, status=status.HTTP_200_OK)


class ManagementUserViewSet(APIView):
	"""
		Service for user
		contain cruds, creation, update, deleted, and list
	"""
	def post(self, request):
		try:
			user = accounts_services.register_user(request.data, user=request.user)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = accounts_serializers.UserSerializers(user, many=False).data
		serializer['detail'] = str(_("You have register a user correctly"))
		return Response(serializer, status=status.HTTP_201_CREATED)


class ManagementUserProfileViewSet(APIView):
	"""
		Service for user profiles 
		contain cruds, creation, update, deleted, and list
	"""

	permission_classes = [permissions.IsAuthenticated]
	def get(self, request):
		try:
			profile = accounts_services.get_profile(request.user)
			# if(len(profile) == 0):
			# 	 return Response({'detail': 'no profile'}, status=status.HTTP_404_NOT_FOUND)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = accounts_serializers.UserProfileSerializers(profile, many=False).data
		print(serializer)
		return Response(serializer, status=status.HTTP_200_OK)

	def post(self, request):
		body_unicode = request.body.decode('utf-8')
		body = json.loads(body_unicode)
		try:
			profile = accounts_services.create_profile(body, request.user)
			# if(len(profile) == 0):
			# 	 return Response({'detail': 'no profile'}, status=status.HTTP_404_NOT_FOUND)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = accounts_serializers.UserProfileSerializers(profile, many=False).data
		return Response(serializer, status=status.HTTP_200_OK)

	def put(self, request):
		body_unicode = request.body.decode('utf-8')
		body = json.loads(body_unicode)
		profile = accounts_models.Profile.objects.get(user= request.user)		
		try:
			user = accounts_services.change_profile(body, profile)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = accounts_serializers.UserProfileSerializers(user, many=False).data
		serializer['detail'] = str(_("Su perfil ha cambiado con éxito."))

		return Response(serializer, status=status.HTTP_200_OK)



class ManagementHomelessProfileViewSet(APIView):
	"""
		Service for user profiles 
		contain cruds, creation, update, deleted, and list
	"""

	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, id_homeless):
		try:
			profile = accounts_services.get_profile_homeless(id_homeless)
			# if(len(profile) == 0):
			# 	 return Response({'detail': 'no profile'}, status=status.HTTP_404_NOT_FOUND)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = accounts_serializers.HomelessProfileSerializers(profile, many=False).data
		print(serializer)
		return Response(serializer, status=status.HTTP_200_OK)




	def post(self, request):
		print(request)
		body_unicode = request.body.decode('utf-8')
		body = json.loads(body_unicode)
		try:
			profile = accounts_services.create_homeless_profile(body, request.user)
			# if(len(profile) == 0):
			# 	 return Response({'detail': 'no profile'}, status=status.HTTP_404_NOT_FOUND)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		# serializer = accounts_serializers.UserProfileSerializers(profile, many=False).data
		return Response('datos guardados exitosamente', status=status.HTTP_200_OK)




class ManagementMyHomelessProfileViewSet (APIView):
	"""
		Service for user profiles 
		contain cruds, creation, update, deleted, and list
	"""

	permission_classes = [permissions.IsAuthenticated]

	def get(self, request):
		try:
			profile = accounts_services.filterMyHomelessProfile(request.user)
			# if(len(profile) == 0):
			# 	 return Response({'detail': 'no profile'}, status=status.HTTP_404_NOT_FOUND)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		# serializer = accounts_serializers.HomelessProfileSerializers(profile, many=False).data
		# print(serializer)
		return Response(profile, status=status.HTTP_200_OK)