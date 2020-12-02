from django.urls import path
from apps.food import views

urlpatterns = [
    # Food Run
    path('new/', views.FoodRunView.as_view(), name='new_food_run'),
    path('get/<int:id>', views.FoodRunView.as_view(), name='get_food_run'),
    path('edit/', views.FoodRunView.as_view(), name='edit_food_run'),
    path('delete/<int:id>', views.FoodRunView.as_view(), name='delete_food_run'),
    path('all/', views.FoodRunAllView.as_view(), name='all_food_runs'),
    # Food Donation
    path('new/donation/', views.FoodDonationView.as_view(), name='new_food_donation'),
    # Food Volunteer
    path('new/volunteer/', views.FoodVolunteerView.as_view(), name='new_food_volunteer'),
    # Feed Food
    path('new/feed/', views.FeedFoodView.as_view(), name='new_food_doantion')
]
