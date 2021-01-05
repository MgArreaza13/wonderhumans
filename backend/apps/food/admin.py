# From Django
from django.contrib import admin

# My models
from apps.food import models as food_models

admin.site.register(food_models.FoodRun)
admin.site.register(food_models.FoodDonation)
admin.site.register(food_models.FoodVolunteer)
admin.site.register(food_models.FeedFood)