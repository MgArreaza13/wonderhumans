# From Django
from django.urls import path, re_path, include

# My views
from apps.feed import views

urlpatterns = [
    path('create/', views.FeedView.as_view(), name='create-feed'),
    path('get/<int:id_feed>', views.FeedView.as_view(), name='get-feed'),
    path('filter/<int:id_user>', views.FilterFeedView.as_view(), name='filter-feed'),
]