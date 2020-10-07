from django.contrib import admin
from django.urls import path, re_path, include
from apps.donations import views

urlpatterns = [
    path('get/<int:id_homeless>', views.ManagementDonationsViewSet.as_view(), name='donations-homeless'),
    path('event/get/<int:id_homeless>', views.ManagementEventViewSet.as_view(), name='events-homeless'),
    path('event/new/<int:id_homeless>', views.ManagementEventViewSet.as_view(), name='new-event'),
]