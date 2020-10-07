from django.contrib import admin
from apps.donations.models import Event
from apps.donations.models import Donation
# Register your models here.


admin.site.register(Event)
admin.site.register(Donation)