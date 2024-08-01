
from django.db import models


class WasteStorage(models.Model):
    city = models.CharField(max_length=100, verbose_name='Город')
    street = models.CharField(max_length=100, verbose_name='Улица')
    house = models.CharField(max_length=10, verbose_name='Дом')
    building = models.CharField(max_length=10, blank=True, null=True, verbose_name='Корпус/Строение')
    organizational_form = models.CharField(max_length=50, verbose_name='Организационно-правовая форма балансодержателя')
    storage_volume = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Объем накопителя, м3')
    container_count = models.PositiveIntegerField(verbose_name='Количество контейнеров (бункеров), шт.')
    cover_info = models.TextField(blank=True, null=True, verbose_name='Сведения об используемом покрытии')
    area = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Площадь, м2')
    waste_source_info = models.TextField(verbose_name='Данные об источнике образования ТКО')
    latitude = models.FloatField(verbose_name='Широта')
    longitude = models.FloatField(verbose_name='Долгота')

    def __str__(self):
        return f" {self.street}"

    class Meta:
        verbose_name = "Место хранения отходов"
        verbose_name_plural = "Места хранения отходов"
