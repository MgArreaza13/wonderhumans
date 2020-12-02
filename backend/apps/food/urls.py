from django.urls import path
from apps.food import views

urlpatterns = [
    # Food Run
    path('new/', views.FoodRunView.as_view(), name='new_food_run'),
    # Food Donation
    path('new/donation/', views.FoodDonationView.as_view(), name='new_food_donation'),
    # Food Volunteer
    path('new/volunteer/', views.FoodVolunteerView.as_view(), name='new_food_volunteer'),
    # Feed Food
    path('new/feed/', views.FeedFoodView.as_view(), name='new_food_doantion')
]
