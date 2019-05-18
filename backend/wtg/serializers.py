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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('username', 'email', 'password', 'tags')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = models.User(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        tags = models.Tag.objects.filter(id__in=validated_data.get('tags', []))
        for tag in tags:
            user.tags.add(tag)
        user.set_password(validated_data['password'])
        user.save()
        return user
