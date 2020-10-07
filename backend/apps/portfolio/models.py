from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from apps.accounts.models import HomelessProfile
# Create your models here.



class HomelessPortfolio(models.Model):
    homeless = models.ForeignKey(HomelessProfile, on_delete=models.CASCADE)
    userRegisterer = models.ForeignKey(User, on_delete=models.CASCADE, null= True)
    image = models.ImageField(upload_to='portfolio', blank=True, null=True)
    details = models.CharField(max_length=100, blank=True) 
    def __str__(self):
        return self.details