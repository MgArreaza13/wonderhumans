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

# My Task
from apps.food import task as food_task
from datetime import datetime, timedelta
# My views

class Test(APIView):
    
    def post(self,request):
        tomorrow = datetime.utcnow() + timedelta(seconds=30)
        food_task.test.delay()
        return Response({'detail':'Todo correcto?'}, status=status.HTTP_200_OK)

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
        # time = food.created_at + food.execution_date - timedelta()
        # food_task.send_notification()
        serializer = food_serializers.FoodRunSerializers(food, many=False).data
        serializer['detail'] = str(_("You have register a food run correctly"))
        return Response(serializer, status=status.HTTP_201_CREATED)
    
    def get(self, request,id):
        try:
            food = food_services.get_food_run(id)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodRunSerializers(food, many=False).data
        return Response(serializer, status=status.HTTP_201_CREATED)

    def put(self, request):
        try:
            food = food_services.update_food_run(request.data, request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodRunSerializers(food, many=False).data
        serializer['detail'] = str(_("You have update a food run correctly"))
        return Response(serializer, status=status.HTTP_201_CREATED)
    
    def delete(self, request, id):
        try:
            food_services.delete_food_run(id,request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = str(_("You have deleted  food run correctly"))
        return Response(serializer, status=status.HTTP_201_CREATED)

class FoodRunAllView(APIView):
    """
        Content service to get all food runs
    """

    def get(self, request):
        try:
            foods = food_services.get_all_food_run()
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodRunSerializers(foods, many=True).data
        return Response(serializer, status=status.HTTP_200_OK)

class FoodDonationView(APIView):
    """
        Content services create and get to Food Donations
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
    
    def get(self, request, id_food):
        try:
            donations = food_services.get_all_donation(id_food)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodDonationSerializers(donations, many=True).data
        return Response(serializer, status=status.HTTP_200_OK)

class FoodVolunteerView(APIView):
    """
        Content services create, delete and get Food Volunteers
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
    
    def get(self, request, id_food):
        try:
            volunteers = food_services.get_all_volunteer(id_food)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodVolunteerSerializers(volunteers, many=True).data
        return Response(serializer, status=status.HTTP_200_OK)
    
    def delete(self, request, id_food):
        try:
            food_services.delete_volunteer(id_food,request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = str(_("You have deleted a volunteer food run correctly"))
        return Response(serializer, status=status.HTTP_200_OK)

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
    
    def get(self, request, id_food):
        try:
            feeds = food_services.get_all_food_feed(id_food)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = food_serializers.FoodFeedSerializers(feeds, many=True).data
        return Response(serializer, status=status.HTTP_200_OK)

    def delete(self, request, id_feed):
        try:
            food_services.delete_food_feed(id_feed,request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = str(_("You have deleted a feed food run correctly"))
        return Response(serializer, status=status.HTTP_200_OK)
