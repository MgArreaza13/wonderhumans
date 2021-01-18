from django.urls import path
from apps.food import views

urlpatterns = [
    # Food Run
    path('test/', views.Test.as_view(), name='test'),
    path('new/', views.FoodRunView.as_view(), name='new_food_run'),
    path('get/<int:id>', views.FoodRunView.as_view(), name='get_food_run'),
    path('edit/', views.FoodRunView.as_view(), name='edit_food_run'),
    path('delete/<int:id>', views.FoodRunView.as_view(), name='delete_food_run'),
    path('all/', views.FoodRunAllView.as_view(), name='all_food_runs'),
    # Food Donation
    path('new/donation/', views.FoodDonationView.as_view(), name='new_food_donation'),
    path('all/donation/<int:id_food>', views.FoodDonationView.as_view(), name='get_donation_by_food'),
    # Food Volunteer
    path('new/volunteer/', views.FoodVolunteerView.as_view(), name='new_food_volunteer'),
    path('delete/volunteer/<int:id_food>', views.FoodVolunteerView.as_view(), name='delete_volunteer'),
    path('all/volunteer/<int:id_food>', views.FoodVolunteerView.as_view(), name='get_volunteer_by_food'),
    # Feed Food
    path('new/feed/', views.FeedFoodView.as_view(), name='new_food_doantion'),
    path('delete/feed/<int:id_feed>', views.FeedFoodView.as_view(), name='delete_feed'),
    path('all/feed/<int:id_food>', views.FeedFoodView.as_view(), name='get_feed_by_food')
]
