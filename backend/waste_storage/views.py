from django.shortcuts import render
from .models import WasteStorage
import json
from decimal import Decimal
from django.core.cache import cache

from rest_framework import viewsets
from .models import WasteStorage
from .serializers import WasteStorageSerializer


def decimal_default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError


def map_view(request):
    # Используем кэширование
    waste_storage_list = cache.get('waste_storage_list')
    if not waste_storage_list:
        waste_storage = WasteStorage.objects.values(
            'city', 'street', 'house', 'storage_volume', 'container_count',
            'cover_info', 'area', 'waste_source_info', 'latitude', 'longitude'
        ).iterator()
        # Преобразуем QuerySet в список словарей
        waste_storage_list = list(waste_storage)
        # Кэшируем данные на 15 минут
        cache.set('waste_storage_list', waste_storage_list, 15 * 60)

    return render(request, 'waste_storage/map.html', {
        'waste_storage': json.dumps(waste_storage_list, default=decimal_default)
    })



class WasteStorageViewSet(viewsets.ModelViewSet):
    queryset = WasteStorage.objects.all()
    serializer_class = WasteStorageSerializer

