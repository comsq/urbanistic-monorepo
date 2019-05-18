# Generated by Django 2.2.1 on 2019-05-18 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wtg', '0003_event_form'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='description',
            field=models.TextField(db_index=True, default=''),
        ),
        migrations.AlterField(
            model_name='event',
            name='max_participants_count',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='similar_with',
            field=models.ManyToManyField(blank=True, to='wtg.Event'),
        ),
        migrations.AlterField(
            model_name='event',
            name='tags',
            field=models.ManyToManyField(blank=True, to='wtg.Tag'),
        ),
    ]