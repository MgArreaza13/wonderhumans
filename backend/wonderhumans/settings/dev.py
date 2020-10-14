from .base import * 

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DBNAME'),
        'USER': config('DBUSER'),
        'PASSWORD': config('DBPASSWORD'),
        'HOST': config('DBHOST'), # set in docker-compose.yml
        'PORT': 5432, # default postgres port
    }
}

ALLOWED_HOSTS = ['*']
# ALLOWED_HOSTS = ['49eb4e1e1152.ngrok.io']