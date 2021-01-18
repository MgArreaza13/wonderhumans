# from __future__ import absolute_import


# from celery import Celery
# import os

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wonderhumans.settings.dev') #Nota 1
# from django.conf import settings  # Nota 2

# app = Celery('wonderhumans') #Nota 3

# app.config_from_object('django.conf:settings') #Nota 4
# app.autodiscover_tasks(lambda: settings.INSTALLED_APPS) #Nota 5

# app.conf.update(
#     BROKER_URL = 'redis://localhost:6379/10', #Nota 6
# )

from __future__ import absolute_import
import os

from celery import Celery
# from .celerybeat_schedule import CELERYBEAT_SCHEDULE

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "wonderhumans.settings.base")

app = Celery('wonderhumans')
app.config_from_object('django.conf:settings', namespace='CELERY')
# app.autodiscover_tasks(lambda: [n.name for n in apps.get_app_configs()])
# app.conf.update(CELERYBEAT_SCHEDULE=CELERYBEAT_SCHEDULE)
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
