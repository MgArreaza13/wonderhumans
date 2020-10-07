from django.db import models
from django.contrib.auth.models import User
from apps.accounts.models import HomelessProfile
# Create your models here.


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    homeless = models.ForeignKey(HomelessProfile, on_delete=models.CASCADE)
    comment = models.TextField(blank=True, null= True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username