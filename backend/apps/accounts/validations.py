from django.contrib.auth import models as accounts_models
from django.utils.translation import gettext as _

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
    print(len(validate))
    print(max_length)
    if ( len(validate) < min_length ) or ( len(validate) > max_length ):
        raise ValueError(str(_(field + " is not within the range of characters allowed")))
    return True