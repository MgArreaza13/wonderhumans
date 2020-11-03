from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from apps.accounts.models import HomelessProfile
# Create your models here.



class Feed(models.Model):
    #homeless = models.ForeignKey(HomelessProfile, on_delete=models.CASCADE)
    userRegisterer = models.ForeignKey(User, on_delete=models.CASCADE, null= True)
    image = models.ImageField(upload_to='feed', blank=True, null=True)
    description = models.TextField(blank=True, null= True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.userRegisterer.username + ' ' + str(self.created_at)