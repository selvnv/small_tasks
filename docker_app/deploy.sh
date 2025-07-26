#!/bin/sh

tree .
python manage.py migrate --noinput
python manage.py createsuperuser --noinput
python manage.py runserver --noreload 0.0.0.0:8000