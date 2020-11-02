# From Django
from django.core.exceptions import PermissionDenied
from django.utils.translation import gettext as _
from django.core.exceptions import PermissionDenied

# From DRF
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

# My services
from apps.likes import services as likes_services

# My serializers
from apps.likes import serializers as likes_serializers

# From Python
import json

class LikesFeedView(APIView):
    """
        Class contains methods to CRUD likes feeds
    """

    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, id_feed):
        try:
            likes_services.create_like_feed(id_feed, request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = {'i_like':'true'}
        return Response(serializer, status=status.HTTP_201_CREATED)

    def delete(self, request, id_feed):
        try:
            likes_services.delete_like_feed(id_feed, request.user)
        except ValueError as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except PermissionDenied as e:
            return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        serializer = {'i_like':'false'}
        return Response(serializer, status=status.HTTP_201_CREATED)