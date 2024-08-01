from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Smoke(models.Model):
    name = models.CharField(max_length=200, verbose_name='Название')
    count = models.PositiveSmallIntegerField()
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
