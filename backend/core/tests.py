from django.test import TestCase

from core.models import Tag
from users.models import User


class RecipeModelTestCase(TestCase):

    def setUp(self) -> None:
        self.user = User.objects.create_user(username='vi')
        self.tag = Tag.objects.create(name='dinner', slug='din', color='red')

    def test_tag(self):
        """Тест."""

