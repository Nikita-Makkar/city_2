#!-*-coding:utf-8-*-
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITransactionTestCase
from rest_framework.authtoken.models import Token

from core.models import Smoke, User


class SmokeApiTestCase(APITransactionTestCase):
    """Тесты api рецептов."""

    @classmethod
    def setUpClass(cls):
        cls.url = reverse('smoke-list')

    def setUp(self) -> None:
        self.user = User.objects.create_user(username='vi')
        token = Token.objects.create(user=self.user)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)

        self.smoke = Smoke.objects.create(
            name='Cookie',
            count=22,
        )

    def test_list(self):
        resp = self.client.get(self.url)

        self.assertEqual(resp.status_code, status.HTTP_200_OK)

        obj = resp.data[0]
        self.assertEqual(obj['name'], self.smoke.name)
