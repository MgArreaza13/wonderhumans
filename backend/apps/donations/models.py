from django.db import models
from django.contrib.auth.models import User
from apps.accounts.models import HomelessProfile
# Create your models here.



class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null= True)
    homeless = models.ForeignKey(HomelessProfile, on_delete=models.CASCADE)
    name =  models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True, null= True)
    total = models.CharField(max_length=100, blank=True)
    rest = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.homeless.firstName + ' - ' + self.name

class Donation(models.Model): 
    idStripe = models.CharField(max_length=100, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    mount = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.event.name