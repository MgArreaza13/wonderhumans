# From Django
from django.core.mail import send_mail
from django.core.mail import send_mass_mail
from django.contrib.auth.models import User
from django.core import mail
from django.conf import settings

# Utils
import time
import json
import logging

# My app
from wonderhumans.celery import app

# From Celery
from celery import shared_task

# My models
from apps.food import models as food_models

@shared_task
def test():
	cuerpo = ""
	print('Test Works!')
	return 'Ready!'

@shared_task
def suma(x,y):
	return x+y

@shared_task
def notification_food(id_food):
	volunteers = food_models.FoodVolunteer.objects.filter(food__id=id_food)
	if len(volunteers)>0:
		emails = []
		for volunteer in volunteers:
			email_to_send = (
				'Wonderhumans: the event is about to start',
			 	"Hello, I notify you that the event is about to take place so that you can prepare. We are counting on you", 
			 	settings.EMAIL_HOST_USER, 
			 	[volunteer.user.email]
				)
			emails.append(email_to_send)
		email_to_send = (
			'Wonderhumans: Notifications sent',
			"Volunteers have been notified that the event will be taking place soon", 
			settings.EMAIL_HOST_USER, 
			[volunteer.food.user.email]
			)
		emails.append(email_to_send)
		emails = tuple(emails)
		print(emails)
		results = mail.send_mass_mail(emails)
		print(results)
	else:
		food = food_models.FoodRun.objects.get(id=id_food)
		emails = (
		('Wonderhumans: Notifications not sent', "You don't have volunteers for your event.", settings.EMAIL_HOST_USER, [food.user.email]),)
		results = mail.send_mass_mail(emails)
		print(results)
	return id_food