import random

from rest_framework import mixins, viewsets

from . import models, serializers


class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Tag.objects.all()
    serializer_class = serializers.TagSerializer


class EventViewSet(mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet):
    queryset = models.Event.objects.all()
    serializer_class = serializers.FeedEventSerializer
    list_serializer_class = serializers.EventSerializer
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'list':
            return self.list_serializer_class

        return self.serializer_class

    def get_object(self):
        if self.kwargs['slug'] == 'random':
            return random.choice(self.queryset)

        return super().get_object()
