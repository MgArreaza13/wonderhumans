# From Django
from django.db import models
from django.contrib.auth.models import User

# My models
from apps.accounts.models import HomelessProfile
from apps.feed.models import Feed

# Create your models here.

class LikeFeed(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    feed = models.ForeignKey(Feed, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username