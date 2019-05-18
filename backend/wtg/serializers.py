from rest_framework import serializers

from . import models


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tag
        fields = '__all__'


class EventTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tag
        fields = (
            'slug',
            'title',
        )


class SimilarEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Event
        fields = (
            'slug',
            'title',
            'image',
        )


class EventSerializer(serializers.ModelSerializer):
    tags = EventTagSerializer(many=True)
    similar_with = SimilarEventSerializer(many=True)

    class Meta:
        model = models.Event
        fields = (
            'slug',
            'title',
            'description',
            'tags',
            'similar_with',
            'image',
            'likes_count',
            'participants_count',
            'max_participants_count',
            'date',
        )


class FeedEventSerializer(serializers.ModelSerializer):
    tags = EventTagSerializer(many=True)

    class Meta:
        model = models.Event
        fields = (
            'slug',
            'title',
            'description',
            'tags',
            'image',
            'likes_count',
            'date',
        )
