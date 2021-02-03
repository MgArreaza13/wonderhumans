# From Django
from django.contrib.auth.models import User
from django.utils.translation import gettext as _
from django.db import transaction, IntegrityError, DatabaseError

# From Python
from datetime import datetime, timedelta

# My Task
from apps.food import task as food_task

# My models
from apps.food import models as food_models

# My services
from apps.accounts import services as accounts_services

# My validations
from apps.food import validations as food_validations

# My services 

# Food run services ----------------------------------

def new_food_run(data:dict, user:User):
    """
        Method to create a new food run by user

        :param data: info to put in food
        :raise: ValueError
        :return: FoodRun
    """
    total: float = data.get("total", None)
    total_volunteers : int = data.get("total_volunteers",None)
    if data.get("name") is not None:
        food_validations.validate_length('Name',data.get("name"),5,100)
    else:
        raise ValueError(str(_("Name is required")))
    if data.get("description") is not None:
        food_validations.validate_length('Decription',data.get("description"),5,300)
    else:
        raise ValueError(str(_("description is required")))
    if data.get("image") is None:
        raise ValueError(str(_("image is required")))
    if total is not None:
        if total <=0 or total > 9999999:
            raise ValueError(str(_("Min value in total is 0 and max is 9999999")))
    else:
        raise ValueError(str(_("total is required")))
    if total_volunteers is not None:
        if total_volunteers <=0 or total > 10000:
            raise ValueError(str(_("Min value in total is 0 and max is 10000")))
    else:
        raise ValueError(str(_("total_volunteers is required")))
    if data.get("execution_date") is not None:
        execution_date = food_validations.validate_excuted_date(data.get("execution_date"))
    else:
        raise ValueError(str(_("execution_date is required")))
    with transaction.atomic():
        try:
            food_run = food_models.FoodRun.objects.create(
                user = user,
                name =  data.get("name"),
                description = data.get("description"),
                image = accounts_services.updateImage(data.get("image")),
                total = total,
                rest = total,
                total_volunteers = total_volunteers,
                rest_volunteers = total_volunteers,
                execution_date = execution_date,
                status = str('open')
            )
        except Exception as e:
            print(e)
            raise ValueError(str(_("there was an error saving the food run")))
    if data.get("invitation_message") is not None:
        food_validations.validate_length('Invitation Message',data.get("invitation_message"),10,100)
        food_run.invitation_message = data.get("invitation_message")
        food_run.save()

    """Calculations to perform the scheduled task"""

    create_at = datetime.now()
    execution_date = datetime.strptime(execution_date, "%Y-%m-%d %H:%M")
    # Time to add at timenow
    time_extra = execution_date - create_at
    # Time to rest at time_extra
    time_rest = (20*time_extra.total_seconds())/100
    time_to_add = time_extra - timedelta(seconds=time_rest)
    time = time_to_add.total_seconds()
    # time = create_at + time_to_add
    print(time)
    food_task.notification_food.apply_async(([food_run.id]),countdown=int(time))
    return food_run
    

def get_food_run(id:int):
    """
        Metho to get a food run

        :param id: id food run (pk)
        :type id: int
        :raise: ValuError
        :return: food_models.FoodRun
    """
    try:
        food_run = food_models.FoodRun.objects.get(id=id)
    except food_models.FoodRun.DoesNotExist as e:
        raise ValueError(str(_("id food run does not exist")))
    return food_run

def get_all_food_run():
    """
        Method to get all food run
    """
    food_runs = food_models.FoodRun.objects.all()
    return food_runs

def update_food_run(data:dict,user:User):
    """
        Method to update a food run.
        Only the owner of the food run can update it

        :param data: content info to update in food run
        :param user: content user owner of the food run
        :raise: ValuerError
        :return: food_models.FoodRun 
    """
    total: float = data.get("total", None)
    total_volunteers : int = data.get("total_volunteers",None)
    if data.get("id_food_run") is not None:
        food_run = get_food_run(data.get("id_food_run"))
        if user != food_run.user:
            raise ValueError(str(_("This user have not permission to update this food run")))
    else:
        raise ValueError(str(_("id_food_run is required")))
    if data.get("name") is not None:
        food_validations.validate_length('Name',data.get("name"),5,100)
        food_run.name = data.get("name")
    if data.get("description") is not None:
        food_validations.validate_length('Decription',data.get("description"),5,300)
        food_run.description = data.get("description")
    if total is not None:
        if food_run.rest <=0:
            raise ValueError(str(_("Can not change total beacause the rest alredy is 0")))
        if total != food_run.total:
            # print("Es diferente el valor del total")
            if total <=0 or total > 9999999:
                raise ValueError(str(_("Min value in total is 0 and max is 9999999")))
            if total < food_run.rest:
                raise ValueError(str(_("rest value can not be mayor than total value")))
            # print(total)
            food_run.total = total
            rest = float(food_run.rest)
            food_run.rest = total - rest
            if (food_run.rest_volunteers == 0) and (food_run.rest <=0):
                food_run.status = 'closed'
        # print("No es doferente")
    if total_volunteers is not None:
        if food_run.total_volunteers <=0:
            raise ValueError(str(_("Can not change total beacause the rest volunteer alredy is 0")))
        if total_volunteers != food_run.total_volunteers:
            # print("Es diferente el valor del total voluntario")
            if total_volunteers <=0 or total > 10000:
                raise ValueError(str(_("Min value in total is 0 and max is 10000")))
            if total_volunteers < food_run.rest_volunteers:
                raise ValueError(str(_("rest volunteers can no be mayor than total volunteer")))
            # print(food_run.rest_volunteers,type(food_run.rest_volunteers))
            food_run.total_volunteers = total_volunteers
            food_run.rest_volunteers = food_run.rest_volunteers - total_volunteers
            if (food_run.rest_volunteers == 0) and (food_run.rest <=0):
                food_run.status = 'closed'
        # print("Es diferente el valor del total voluntario")
    if (food_run.rest_volunteers > 0) or (food_run.rest >0):
            food_run.status = 'open'
    if data.get("image") is not None:
        food_run.image = accounts_services.updateImage(data.get("image"))
    try:
        with transaction.atomic():
            food_run.save()
    except Exception as e:
        # print(e)
        raise ValueError(str(_("There was a error updating the food run")))
    return food_run
        
def delete_food_run(id:int,user:User):
    """
        Method to delete a food run by owner user
    """
    food_run = get_food_run(id)
    if user != food_run.user:
        raise ValueError(str(_("This user have not permission to delete this food run")))
    try:
        with transaction.atomic():
            food_run.delete()
    except Exception as e:
        print(e)
        raise ValueError(str(_("there was a error deleting the food run")))

def update_food_run_rests(rest_volunteers,amount,food_run:dict)->bool:
    """
        Method to update a food run rests field: rest_volunteer 
        and rest_total

        :param rest_volunteers: value to rest a food run rest volunteer
        :param rest_total: value to rest a food run rest total
        :param food_run: food run object
        :type food_run: food_models.FoodRun
        :retun: food_models.FoodRun
    """
    if rest_volunteers is not None:
        food_run.rest_volunteers -= 1
    if amount is not None:
        rest = float(food_run.rest)
        food_run.rest_total = rest - amount
    if (food_run.rest_volunteers == 0) and (food_run.rest <=0):
        food_run.status = 'closed'
    try:
        with transaction.atomic():
            food_run.save()
    except Exception as e:
        return False
    return True

# Food donation services ----------------------------------

def create_food_donation(data:dict, user:User):
    """
        Method to create a new donation
        
        :param data: content mont donation to some event
        :type data: dict
        :raise: ValueError
        :return:
    """
    if data.get("id_food_run") is not None:
        food_validations.validate_food_donation(data.get("id_food_run"))
        food_run = get_food_run(data.get("id_food_run"))
        if food_run.status == 'closed' or food_run.rest <=0:
            raise ValueError(str(_("This food run not allow more donations because this is closed")))
    else:
        raise ValueError(str(_("id_food_run is required")))
    if data.get("id_stripe") is not None:
        food_validations.validate_length("id_stripe",data.get("id_stripe"),1,100)
    else:
        raise ValueError(str(_("id_stripe is required")))
    if data.get("amount") is not None:
        if data.get("amount") < 0.01:
            raise ValueError(str(_("Min value in total is 0.01")))	
        rest = float(food_run.rest)
        if data.get("amount") > rest:
            raise ValueError(str(_("The amount cannot be greater than the remainder")))
        amount: float = data.get("amount")
    else:
        raise ValueError(str(_("amount is required")))
    with transaction.atomic():
        try:
            donation = food_models.FoodDonation.objects.create(
                id_stripe = data.get("id_stripe"),
                user = user,
                food = food_run,
                amount = amount
            )
        except Exception as e:
            print(e)
            raise ValueError(str(_("there was an error saving the donation")))
    food_run.rest = rest - amount
    if food_run.rest <=0:
        food_run.status = 'closed'
    food_run.save()
    return donation

def get_all_donation(id_food:id):
    """
        Method to get all donation for food run

        :param id_food: food run id
        :raise: ValueError
        :return:food_models.FoodDonation
    """
    donations = food_models.FoodDonation.objects.filter(food__id=id_food)
    return donations


# Food volunteer services ----------------------------------

def create_food_volunteer(data:dict, user:User)->dict:
    """
        Method to agregate a new volunteer to food run

        :param data: Only content id food run
        :raise: ValueError
        :return: food_models.FoodVolunteer
    """
    if data.get("id_food_run") is not None:
        food_run = get_food_run(data.get("id_food_run"))
        if food_run.rest_volunteers == 0 or food_run.status == "closed":
            raise ValueError(str(_("This food run not allow more volunteer")))
    else:
        raise ValueError(str(_("id_food_run is required")))
    food_validations.validate_volunteer(user,food_run)
    try:
        with transaction.atomic():
            volunteer = food_models.FoodVolunteer.objects.create(
                user = user,
                food = food_run
            )
    except Exception as e:
        print(e)
        raise ValueError(str(_("there was an error saving the new volunteer")))
    save = update_food_run_rests(1,None,food_run)
    if save == False:
        volunteer.delete()
    return volunteer

def get_all_volunteer(id_food:int):
    """
        Method to get all volunteer for food run

        :return: food_models.FoodVolunteer
    """
    volunteers = food_models.FoodVolunteer.objects.filter(food__id=id_food)
    return volunteers

def delete_volunteer(id_food:int,user:User):
    """
        Method to delete a volunteer for food run.
        Only the will itself can eliminate
    """
    try:
        volunteer = food_models.FoodVolunteer.objects.get(food__id=id_food,user=user)
    except food_models.FoodVolunteer.DoesNotExist:
        raise ValueError(str(_("You are not a volunteer in this food run")))
    volunteer.delete()

# Food feed services ----------------------------------

def create_food_feed(data:dict,user:User)->dict:
    """
        Method to create a new feed in food by user 
        user should be a volunteer or own of feed run

        :para data: content info to put in feed
        :raise: ValueError
        :return: food_models.FeedFood
    """
    if data.get("id_food_run") is not None:
        food_run = get_food_run(data.get("id_food_run"))
    else:
        raise ValueError(str(_("id_food_run is required")))
    if data.get("image") is None:
        raise ValueError(str(_("image is required")))
    if user != food_run.user:
        raise ValueError(str(_("You do not have permission to create a feed food")))
    try:
        with transaction.atomic():
            feed = food_models.FeedFood.objects.create(
                user = user,
                food = food_run,
                image = accounts_services.updateImage(data.get("image"))
            )
    except Exception as e:
        print(e)
        raise ValueError(str(_("There was a error saving feed food run")))
    if data.get("description") is not None:
        food_validations.validate_length("description",data.get("description"),0,100)
        feed.description = data.get("description")
        feed.save()
    return feed

def delete_food_feed(id_feed:int,user:User):
    """
        Method to delete a feed food by owner food
    """
    try:
        feed = food_models.FeedFood.objects.get(id=id_feed)
    except food_models.FeedFood.DoesNotExist:
        raise ValueError(str(_("the feed does not exist")))
    if user != feed.user:
        raise ValueError(str(_("You do not have permission to delete this feed food")))
    feed.delete()

def get_all_food_feed(id_food:int):
    """
        Method to get all feed for food run

        :return: food_models.FeedFood
    """
    feeds = food_models.FeedFood.objects.filter(food__id=id_food)
    return feeds