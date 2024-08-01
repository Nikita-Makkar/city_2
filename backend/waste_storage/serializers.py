from rest_framework import serializers
from .models import WasteStorage


class WasteStorageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WasteStorage
        fields = '__all__'
