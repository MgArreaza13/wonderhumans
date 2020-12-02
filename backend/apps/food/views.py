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
from apps.food import services as food_services

# My serializers
from apps.food import serializers as food_serializers

# My views

class FoodRunView(APIView):
    """
        Content CRUD services to Food Run
    """
    
    def post(self, request):
        try:
            food = food_services.new_food_run(request.data, request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodRunSerializers(food, many=False).data
        serializer['detail'] = str(_("You have register a food run correctly"))
        return Response(serializer, status=status.HTTP_201_CREATED)

class FoodDonationView(APIView):
    """
        Content CRUD services to Food Donation
    """

    def post(self, request):
        try:
            donation = food_services.create_food_donation(request.data, request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodDonationSerializers(donation, many=False).data
        serializer['detail'] = str(_("You have register a donation food run correctly"))
        return Response(serializer, status=status.HTTP_201_CREATED)

class FoodVolunteerView(APIView):
    """
        Content CRUD services to Food Volunteer
    """

    def post(self, request):
        try:
            volunteer = food_services.create_food_volunteer(request.data, request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodVolunteerSerializers(volunteer, many=False).data
        serializer['detail'] = str(_("You have register a volunteer food run correctly"))
        return Response(serializer, status=status.HTTP_201_CREATED)

class FeedFoodView(APIView):
    """
        Content CRUD services to Feed Food
    """
    
    def post(self, request):
        try:
            feed = food_services.create_food_feed(request.data, request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodFeedSerializers(feed, many=False).data
        serializer['detail'] = str(_("You have register a feed food run correctly"))
        return Response(serializer, status=status.HTTP_201_CREATED)
