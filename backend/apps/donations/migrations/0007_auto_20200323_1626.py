# Generated by Django 2.0.1 on 2020-03-23 20:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('donations', '0006_auto_20200323_1527'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
