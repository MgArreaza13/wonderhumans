from django.contrib import admin
from django.urls import path, re_path, include
from apps.donations import views

urlpatterns = [
    # donatios path's
    path('get/<int:id_homeless>', views.ManagementDonationsViewSet.as_view(), name='donations-homeless'),
    path('new/', views.ManagementDonationsViewSet.as_view(), name='donations-homeless'),
    # cause path's
    path('cause/all/<int:id_homeless>', views.ManagementCauseViewSet.as_view(), name='causes-homeless'),
    path('cause/new/<int:id_homeless>', views.ManagementCauseViewSet.as_view(), name='new-cause'),
    path('cause/get/<int:id_cause>', views.CauseView.as_view(), name='get-cause'),
]