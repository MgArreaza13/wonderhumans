from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from django.core.exceptions import PermissionDenied
from apps.donations import serializers as donations_serializers
from apps.donations import services as donations_services
from django.utils.translation import gettext as _
import json
# Create your views here.


class ManagementEventViewSet (APIView):
	"""
		Service for user profiles
		contain cruds, creation, update, deleted, and list
	"""
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, id_homeless):
		try:
			events = donations_services.getEvents(id_homeless)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = donations_serializers.EventSerializers(events, many=True).data
		return Response(serializer, status=status.HTTP_200_OK)

	def post(self, request, id_homeless):
		print(request)
		body_unicode = request.body.decode('utf-8')
		body = json.loads(body_unicode)
		print(body)
		try:
			events = donations_services.createEvent(body,id_homeless,request.user)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = donations_serializers.EventSerializers(events, many=True).data
		return Response(serializer, status=status.HTTP_200_OK)



class ManagementDonationsViewSet (APIView):
	"""
		Service for user profiles
		contain cruds, creation, update, deleted, and list
	"""
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, id_homeless):
		try:
			donations = donations_services.getDonations(id_homeless)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		print('********************')
		print(donations)
		print('********************')
		serializer = donations_serializers.DonationSerializers(donations, many=True).data
		return Response(serializer, status=status.HTTP_200_OK)