# Generated by Django 2.0.1 on 2020-02-06 18:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20200206_1209'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homelessprofile',
            name='userRegisterer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
