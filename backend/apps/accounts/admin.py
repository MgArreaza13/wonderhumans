from django.contrib import admin
from apps.accounts.models import Profile
from apps.accounts.models import HomelessProfile
# Register your models here.


admin.site.register(Profile)
admin.site.register(HomelessProfile)