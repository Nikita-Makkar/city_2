import pandas as pd
from django.core.management.base import BaseCommand
from waste_storage.models import WasteStorage
from geopy.geocoders import Nominatim
from time import sleep

class Command(BaseCommand):
    help = 'Импорт данных мест хранения отходов из Excel файла'

    def add_arguments(self, parser):
        parser.add_argument('file_path', type=str, help='Путь к Excel файлу')

    def handle(self, *args, **kwargs):
        file_path = kwargs['file_path']
        df = pd.read_excel(file_path)
        geolocator = Nominatim(user_agent="waste_storage")

        for index, row in df.iterrows():
            address = f"{row['Населенный пункт (город)']}, {row['Улица']}, {row['Дом']}"
            if pd.notna(row['Корпус/Строение/']):
                address += f", {row['Корпус/Строение/']}"

            try:
                location = geolocator.geocode(address)
                if location:
                    latitude = location.latitude
                    longitude = location.longitude
                else:
                    latitude = None
                    longitude = None
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"Ошибка геокодирования для адреса {address}: {e}"))
                latitude = None
                longitude = None

            WasteStorage.objects.create(
                city=row['Населенный пункт (город)'],
                street=row['Улица'],
                house=row['Дом'],
                building=row['Корпус/Строение/'] if pd.notna(row['Корпус/Строение/']) else None,
                organizational_form=row['Организационно-правовая форма балансодержателя'],
                storage_volume=row['Объем накопителя, м3'],
                container_count=row['Количество контейнеров (бункеров), шт.'],
                cover_info=row['Сведения об используемом покрытии'] if pd.notna(row['Сведения об используемом покрытии']) else None,
                area=row['Площадь, м2'],
                waste_source_info=row['Данные об источнике образования ТКО'],
                latitude=latitude,
                longitude=longitude
            )
            sleep(1)  # Пауза между запросами к API, чтобы избежать блокировок

        self.stdout.write(self.style.SUCCESS("Импорт данных завершен успешно"))
