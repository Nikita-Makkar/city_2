from django.db import models


class Playground(models.Model):
    EQUIPMENT_TYPE_CHOICES = [
        ('playground', 'Детская игровая площадка'),
        ('sport_playground', 'Спортивный комплекс'),
    ]

    equipment_type = models.CharField(
        max_length=255,
        choices=EQUIPMENT_TYPE_CHOICES,
        verbose_name='Тип оборудования'
    )
    location = models.CharField(max_length=255, verbose_name='Месторасположение')
    description = models.TextField(verbose_name='Описание', blank=True)
    responsible_unit = models.TextField(verbose_name='Ответственное подразделение', blank=True)
    contact_info = models.CharField(max_length=255, verbose_name='Контактная информация')
    unit_address = models.CharField(max_length=255, verbose_name='Адрес ответственного подразделения')
    note = models.TextField(verbose_name='Примечание', blank=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, verbose_name='Широта')
    longitude = models.DecimalField(max_digits=9, decimal_places=6, verbose_name='Долгота')
    caretaker = models.CharField(max_length=255, verbose_name='Балансодержатель')
    city = models.CharField(max_length=255)

    def __str__(self):
        return self.description

    class Meta:
        verbose_name = 'Детская площадка'
        verbose_name_plural = 'Детские площадки'
