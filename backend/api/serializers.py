from rest_framework import serializers

from core.models import Smoke


class SmokeSerializer(serializers.ModelSerializer):
    """Сериазайзер для обычной модели."""

    class Meta:
        model = Smoke
        fields = '__all__'
