from django.contrib import admin
from apps.donations.models import Cause
from apps.donations.models import Donation
# Register your models here.


admin.site.register(Cause)
admin.site.register(Donation)