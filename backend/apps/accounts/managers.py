# From Django
from django.db import models

# Utilities
import random
from string import ascii_uppercase, digits

class HomelessManager(models.Manager):

    """
    Used to handle code creation.
    """

    CODE_LENGTH = 6

    def create(self, **kwargs):
        """Handle code creation."""
        pool = ascii_uppercase + digits
        code = kwargs.get('code', ''.join(random.choices(
            pool, 
            k=self.CODE_LENGTH)))
        while self.filter(code=code).exists():
            code = ''.join(random.choices(pool, k=self.CODE_LENGTH))
        kwargs['code'] = code
        return super(HomelessManager, self).create(**kwargs)
