# From Django
from django.shortcuts import render
from django.core.exceptions import PermissionDenied
from django.utils.translation import gettext as _

# From DRF
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

# My services
from apps.donations import services as donations_services

# My serializer
from apps.donations import serializers as donations_serializers
from apps.accounts import serializers as accounts_serializers

# From Pyhon
import json

# My views.

class ManagementCauseViewSet (APIView):
	"""
		Service for user profiles
		contain cruds, creation, update, deleted, and list
	"""
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, id_homeless):
		try:
			causes = donations_services.get_causes(id_homeless)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = donations_serializers.CauseSerializers(causes, many=True).data
		return Response(serializer, status=status.HTTP_200_OK)

	def post(self, request, id_homeless):
		body_unicode = request.body.decode('utf-8')
		body = json.loads(body_unicode)
		try:
			cause = donations_services.create_cause(body,id_homeless,request.user)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = donations_serializers.CauseSerializers(cause).data
		return Response(serializer, status=status.HTTP_200_OK)

class CauseView(APIView):
	"""
		Class to only get a Event with all donations user
	"""	
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, id_cause):
		try:
			cause = donations_services.get_cause(id_cause)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = donations_serializers.CauseSerializers(cause).data
		# We will put all user donation in this object
		donations = donations_services.getDonations(id_cause)
		serializer['donations'] = donations_serializers.DonationSerializers(donations, many=True).data
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
		serializer = donations_serializers.DonationSerializers(donations, many=True).data
		return Response(serializer, status=status.HTTP_200_OK)
	
	def post(self, request):
		try:
			donation = donations_services.create_donation(request.data, request.user)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = donations_serializers.DonationSerializers(donation).data
		return Response(serializer, status=status.HTTP_201_CREATED)