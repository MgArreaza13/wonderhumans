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
from apps.feed import services as feed_services

# My serializer
from apps.feed import serializers as feed_serializers

# Create your views here.

class FeedView (APIView):
	"""
		Service for feed users
		contain cruds, creation, update, deleted, and list
	"""
	permission_classes = [permissions.IsAuthenticated]

	def post(self, request):
		try:
			feed = feed_services.create_feed(request.data, request.user)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = feed_serializers.FeedSerializers(feed, many=False).data
		serializer['detail'] = str(_("You have register a feed correctly"))
		return Response(serializer, status=status.HTTP_200_OK)

	def get(self, request, id_feed):
		try:
			feed = feed_services.get_feed(id_feed, request.user)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = feed
		serializer['detail'] = str(_("You get a feed correctly"))
		return Response(serializer, status=status.HTTP_200_OK)

class FilterFeedView(APIView):
	"""
		Class contain method to get all feeds user 
	"""

	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, id_user):
		try:
			feeds = feed_services.filter_feeds(id_user, request.user)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		return Response(feeds, status=status.HTTP_200_OK)