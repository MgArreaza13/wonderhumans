from django.core.mail import send_mail
from django.core.mail import send_mass_mail
from django.contrib.auth.models import User
from wonderhumans.celery import app
import time
import json
import logging
from celery import shared_task

@shared_task
def test():
	cuerpo = ""
	print('Test Works!')
	return 'Ready!'