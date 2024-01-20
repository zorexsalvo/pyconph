# Generated by Django 5.0 on 2024-01-18 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('presentations', '0002_alter_speaker_options_speaker_introduction_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='schedule',
            name='track',
            field=models.CharField(choices=[('track1', 'Track 1'), ('track2', 'Track 2'), ('track3', 'Track 3')], default='track1', max_length=16),
            preserve_default=False,
        ),
    ]