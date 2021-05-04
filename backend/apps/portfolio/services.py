# From Django
from django.utils.translation import gettext as _
from django.contrib.auth.models import User

# My models
from apps.portfolio import models as portfolio_models

def updateImage(ur):
    import base64

    from django.core.files.base import ContentFile
    
    format, imgstr = ur.split(';base64,')  # format ~= data:image/X,
    ext = format.split('/')[-1]  # guess file extension
    return ContentFile(base64.b64decode(imgstr), name='profileimg.' + ext)

def getPortfolio(id_homeless: int)->dict:
    data = portfolio_models.HomelessPortfolio.objects.filter(homeless__id = id_homeless)
    return data

def edit_portfolio(data:dict, user:User)->portfolio_models.HomelessPortfolio:
    """
        Method to edit a portfolio

        :param data: content data to update
        :type data: dict
        :param user: user that register homeless and portfolio
        :type user: User
        :raise: ValueError
        :return: dict portfolio
    """
    if data.get("id") is None:
        raise ValueError(str(_("Id is required")))
    try:
        portfolio = portfolio_models.HomelessPortfolio.objects.get(id=data.get("id"))
        if portfolio.userRegisterer != user:
            raise ValueError(str(_("Do not have permission to edit this portfolio")))
        if data.get("details") is not None:
            if len(data.get("details")) >0:
                if len(data.get("details"))<=100:
                    portfolio.details = data.get("details")
                else:
                    raise ValueError(str(_("Field 'details' max  lenght is 100")))
        if data.get("photo") is not None:
            portfolio.image = updateImage(data.get("photo"))
        portfolio.save()
    except portfolio_models.HomelessPortfolio.DoesNotExist as e:
        raise ValueError(str(_("Portfolio does not exist")))
    return portfolio

def delete_portfolio(id:int, user:User):
    """
        Method to delete a portfolio

        :param id: portfolio id
        :type id: int
        :param user: user that register homeless and portfolio
        :type user: User
        :raise: ValueError
        :return: dict portfolio
    """
    try:
        portfolio = portfolio_models.HomelessPortfolio.objects.get(id=id)
        if portfolio.userRegisterer != user:
            raise ValueError(str(_("Do not have permission to delete this portfolio")))
        portfolio.delete()
    except portfolio_models.HomelessPortfolio.DoesNotExist as e:
        raise ValueError(str(_("Portfolio does not exist")))
    return portfolio