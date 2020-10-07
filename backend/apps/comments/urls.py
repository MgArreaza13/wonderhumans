from django.contrib import admin
from django.urls import path, re_path, include
from apps.comments import views

urlpatterns = [
    path('get/<int:id_homeless>', views.ManagementCommentsViewSet.as_view(), name='comments-homeless'),
    path('new/<int:id_homeless>', views.ManagementCommentsViewSet.as_view(), name='comments-homeless'),
]