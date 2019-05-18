from hashlib import sha512

from django.contrib.postgres.fields import ArrayField
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


class User(models.Model):
    username = models.TextField(unique=True)
    email = models.EmailField(unique=True)
    password = models.TextField()
    tags = models.ManyToManyField(Tag, blank=True)

    def set_password(self, passwd):
        self.password = sha512(passwd.encode('utf8')).hexdigest()

    def __str__(self):
        return f'User "{self.username} <{self.email}>"'
