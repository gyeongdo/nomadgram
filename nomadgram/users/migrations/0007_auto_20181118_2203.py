# Generated by Django 2.0.9 on 2018-11-18 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20181118_2202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('female', 'Female'), ('not-specified', 'Not specified'), ('male', 'Male')], max_length=80, null=True),
        ),
    ]