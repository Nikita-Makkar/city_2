from rest_framework.viewsets import ModelViewSet

from api.serializers import SmokeSerializer
from core.models import Smoke


class SmokeViewSet(ModelViewSet):
    serializer_class = SmokeSerializer
    queryset = Smoke.objects.all()
