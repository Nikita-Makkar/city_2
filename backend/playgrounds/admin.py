from django.contrib import admin
from .models import Playground


@admin.register(Playground)
class PlaygroundAdmin(admin.ModelAdmin):
    list_display = ('equipment_type', 'location', 'latitude', 'longitude', 'caretaker')
    list_filter = ('equipment_type', 'caretaker')
    search_fields = ('location')