from apps.portfolio import models as portfolio_models




def getPortfolio(id_homeless: int): 
    data = portfolio_models.HomelessPortfolio.objects.filter(homeless__id = id_homeless)
    print(data)
    return data