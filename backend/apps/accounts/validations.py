# From Django
from django.contrib.auth import models as accounts_models
from django.utils.translation import gettext as _

# My Models
from .models import Profile

# From Python
from datetime import datetime, timedelta

def validate_email(email: str):
    """
        Method to verify if email of user exists
        The email is unique

        :param email: email of user
        :type email: str
        :return: bool
        :raises: ValueError
    """
    if accounts_models.User.objects.filter(email=email.lower()).exists():
        raise ValueError(str(_("Email registered please try with another")))
    return True

def validate_show_email(show:str):
    """
        Method to verify if a variable have a right value

        :param show_email: show_email of a user
        :type_show: str
        return: bool
        :raises: ValueError
    """
    if show != "True" and show != "False":
        raise ValueError(str(_("Show email field only can be 'True" 'or' 'False')))
    if show == "True":
        return True
    return False

def validate_username(username: str):
    """
        Method to verify if username of user exists
        The username is unique

        :param username: username of user
        :type username: str
        :return: bool
        :raises: ValueError
    """
    if accounts_models.User.objects.filter(username=username.lower()).exists():
        raise ValueError(str(_("username registered please try with another")))
    return True

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

def validate_user_profile(user:accounts_models.User):
    """
        Method to verify if user have profile

        :param user: user to validat if have profile
        :type user: accounts_models.User
        :return: bool
    """
    if Profile.objects.filter(user=user).exists():
        return True
    return False

def validate_birth(birth:dict,days:int):
    """
        Method to put bitrh date a correct form

        :param birth: date of brith
        :param days: minimun date of birth
        :type birth: dict
        :type days: int
        :return: bool
    """
    if type(birth) is not dict:
        raise ValueError(str(("Data birth should be json, not str")))
    # birth = str(birth.get('year')) + '-' + str(birth.get('month')) + '-' + str(birth.get('day'))
    # Minimum date of birth
    deadline = datetime.now() - timedelta(days=days)
    birth = datetime(birth.get('year'), birth.get('month'), birth.get('day'))
    if birth > deadline:
        years = int(days/365)
        raise ValueError(str(("The allowed date birth is {} years ago").format(years)))
    return birth