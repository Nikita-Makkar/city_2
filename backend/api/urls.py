from rest_framework import routers

from api.views import SmokeViewSet
from waste_storage.views import WasteStorageViewSet
from django.urls import path, include


router_v1 = routers.DefaultRouter()

router_v1.register(r'smokes', SmokeViewSet)
router_v1.register(r'waste_storage', WasteStorageViewSet)

urlpatterns = [
    # Создание и удаление токена.
    path('auth/', include('djoser.urls.authtoken')),
    path('', include(router_v1.urls)),
]