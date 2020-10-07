web: gunicorn wonderhumans.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: celery worker --workdir backend --app=wonderhumans -B --loglevel=info
