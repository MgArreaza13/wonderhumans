# Generated by Django 2.0.1 on 2020-11-25 20:39

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('accounts', '0010_auto_20201125_1609'),
        ('donations', '0007_auto_20200323_1626'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Event',
            new_name='Cause',
        ),
        migrations.RenameField(
            model_name='donation',
            old_name='event',
            new_name='cause',
        ),
    ]
