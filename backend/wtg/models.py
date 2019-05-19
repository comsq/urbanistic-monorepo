from django.db import models


class Tag(models.Model):
    slug = models.fields.SlugField()
    title = models.TextField(db_index=True)
    description = models.TextField(db_index=True)

    def __str__(self):
        return f'Tag {self.slug}'


class Event(models.Model):
    slug = models.fields.SlugField()
    title = models.TextField(db_index=True)
    description = models.TextField(db_index=True, default='')

    tags = models.ManyToManyField(Tag, blank=True)
    similar_with = models.ManyToManyField('self', blank=True, symmetrical=False)

    image = models.ImageField()

    likes_count = models.PositiveIntegerField(default=0, editable=False)
    participants_count = models.PositiveIntegerField(default=0, editable=False)
    max_participants_count = models.PositiveIntegerField(null=True)

    date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Event {self.slug}'
