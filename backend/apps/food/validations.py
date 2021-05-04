# From Django
from django.contrib.auth.models import User 
from django.utils.translation import gettext as _

# My Models
from apps.food import models as food_models

# From Python
from datetime import datetime, timedelta

def validate_length(field:str, validate: str, min_length: int, max_length: int):
    """
        Method to verify min length or max legngth of any variable str

        :param field: field of variable to put in value error
        :type field: str
        :param validate: variable to validate
        :type validate: str
        :param min_length: length min of variable
        :type min_length: int
        :param min_length: length max of varible
        :type min_length: int
        :return: bool
        :raises: ValueError
    """
    if ( len(validate) < min_length ) or ( len(validate) > max_length ):
        raise ValueError(str(_(field + " is not within the range of characters allowed")))
    return True

def validate_food_donation(id_stripe:int):
    """
        Method to verify is alredy there isa food donation with a
        id stripe
    """
    if food_models.FoodDonation.objects.filter(id_stripe=id_stripe).exists():
        raise ValueError(str(_("This stripe id already registere in food run")))

def validate_volunteer(user:User,food:food_models.FoodRun):
    """
        Method to verify that user can not be volunteer in the same
        food run mothe than one
    """
    if food_models.FoodVolunteer.objects.filter(user=user,food=food).exists():
        raise ValueError(str(_("Alredy you are voluenteer in this food run")))

def validate_excuted_date(date_base:dict):
    """
        Method to put bitrh date a correct form

        :param birth: date of brith
        :type birth: dict
        :return: bool
    """
    if type(date_base) is not dict:
        raise ValueError(str(("Data date should be json, not str")))
    # Minimum date
    deadline = datetime.now() + timedelta(hours=5)
    date = datetime(date_base.get('year'), date_base.get('month'), date_base.get('day'),date_base.get("hour"),date_base.get("minute"))
    if date < deadline:
        raise ValueError(str(("The minimum date is in 5 hours")))
    date = str(date_base.get('year')) + '-' + str(date_base.get('month')) + '-' + str(date_base.get('day')) + ' ' + str(date_base.get("hour")) + ':' + str(date_base.get("minute"))
    return date