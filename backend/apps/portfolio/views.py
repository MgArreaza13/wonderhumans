from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from django.core.exceptions import PermissionDenied
from apps.portfolio import services as portfolio_services
from apps.portfolio import serializers as portfolio_serializers
# Create your views here.


class ManagementPortfolioViewSet (APIView):
	"""
		Service for user profiles
		contain cruds, creation, update, deleted, and list
	"""
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, id_homeless):
		try:
			portfolios = portfolio_services.getPortfolio(id_homeless)
		except ValueError as e:
			return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
		except PermissionDenied as e:
			return Response({'detail': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
		except Exception as e:
			return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		serializer = portfolio_serializers.PortfolioSerializers(portfolios, many=True).data
		return Response(serializer, status=status.HTTP_200_OK)