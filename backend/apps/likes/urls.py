# From Django
from django.contrib import admin
from django.urls import path, re_path, include

# My views
from apps.likes import views

urlpatterns = [
    path('feed/get/<int:id_feed', views.LikesFeedView.as_view(), name='comments-feed-get'),
    path('feed/new/<int:id_feed>', views.LikesFeedView.as_view(), name='comments-feed-create'),
    path('feed/delete/<int:id_feed', views.LikesFeedView.as_view(), name='coments-feed-delete'),
]