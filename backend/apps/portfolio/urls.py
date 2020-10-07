from django.contrib import admin
from django.urls import path, re_path, include
from apps.portfolio import views

urlpatterns = [
    path('get/<int:id_homeless>', views.ManagementPortfolioViewSet.as_view(), name='portfolio-homeless'),
]