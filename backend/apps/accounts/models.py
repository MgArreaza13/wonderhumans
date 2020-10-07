from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

TYPE_USER = (
		('homeless', 'homeless'),
		('user', 'user'),
	)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='profile', blank=True, null=True)
    # Additional information personal
    occupation = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=100, blank=True)
    dateOfBirth = models.DateTimeField(auto_now_add=True)
    aboutYou = models.TextField(max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):

        return self.user.first_name + ' ' +self.user.last_name


class HomelessProfile(models.Model):
    userRegisterer = models.ForeignKey(User, on_delete=models.CASCADE, null= True)
    firstName = models.CharField(max_length=100, blank=True)
    lastName = models.CharField(max_length=100, blank=True)
    email = models.CharField(max_length=100, blank=True)
    typeUser = models.CharField(max_length=30, choices=TYPE_USER , null= True)
    photo = models.ImageField(upload_to='profile', blank=True, null=True)
    # Additional information personal
    occupation = models.CharField(max_length=100, blank=True , null= True)
    phone = models.CharField(max_length=20, blank=True , null= True)
    address = models.CharField(max_length=255, blank=True , null= True)
    city = models.CharField(max_length=100, blank=True , null= True)
    state = models.CharField(max_length=50, blank=True , null= True)
    country = models.CharField(max_length=100, blank=True, null= True)
    dateOfBirth = models.DateTimeField(auto_now_add=False, null= True)
    aboutYou = models.TextField(blank=True, null= True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.firstName + ' ' +self.lastName
