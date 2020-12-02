from django.db import models

# My models
from django.contrib.auth.models import User

STATUS = (
		('open', 'open'),
		('closed', 'closed'),
	)

class FoodRun(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, null= True)
    name =  models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True, null= True)
    total = models.DecimalField(max_digits=9,decimal_places=2, default=0)
    rest = models.DecimalField(max_digits=9,decimal_places=2, default=0)
    total_volunteers = models.IntegerField(null=True) 
    rest_volunteers = models.IntegerField(null=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=6,choices=STATUS, null=True)

    def __str__(self):
        return self.name

class FoodDonation(models.Model):

    id_stripe = models.CharField(max_length=100, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    food = models.ForeignKey(FoodRun, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=9,decimal_places=2, default=0)

    def __str__(self):
        return self.food.name

class FoodVolunteer(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    food = models.ForeignKey(FoodRun, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class FeedFood(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    food = models.ForeignKey(FoodRun, on_delete=models.CASCADE)
    image = models.FileField(upload_to='food', blank=True, null=True)
    description = models.TextField(blank=True, null= True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.food.name