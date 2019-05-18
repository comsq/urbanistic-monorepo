from django.db import models


class Tag(models.Model):
    slug = models.fields.SlugField()
    title = models.TextField(db_index=True)
    description = models.TextField(db_index=True)
