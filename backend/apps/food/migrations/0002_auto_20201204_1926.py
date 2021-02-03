# Generated by Django 2.0.1 on 2020-12-04 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='feedfood',
            options={'ordering': ['-created_at']},
        ),
        migrations.AlterModelOptions(
            name='foodrun',
            options={'ordering': ['-created_at']},
        ),
        migrations.AddField(
            model_name='foodrun',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='food'),
        ),
    ]