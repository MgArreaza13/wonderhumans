from django.db import models
from django.contrib.auth.models import User
from apps.accounts.models import HomelessProfile
# Create your models here.

STATUS = (
		('open', 'open'),
		('closed', 'closed'),
	)

class Cause(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null= True)
    homeless = models.ForeignKey(HomelessProfile, on_delete=models.CASCADE)
    name =  models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True, null= True)
    total = models.DecimalField(max_digits=9,decimal_places=2, default=0)
    rest = models.DecimalField(max_digits=9,decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=6,choices=STATUS, null=True)

    def __str__(self):
        return self.homeless.firstName + ' - ' + self.name

class Donation(models.Model): 
    idStripe = models.CharField(max_length=100, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cause = models.ForeignKey(Cause, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=9,decimal_places=2, default=0)

    def __str__(self):
        return self.cause.homeless.firstName + ' - ' + self.cause.name