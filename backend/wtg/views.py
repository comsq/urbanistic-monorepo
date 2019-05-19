import datetime
import random

from django_filters.rest_framework import (
    BooleanFilter,
    CharFilter,
    DjangoFilterBackend,
    FilterSet,
)
from rest_framework import (
    filters,
    mixins,
    pagination,
    status,
    viewsets,
)
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from . import models, serializers


class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Tag.objects.all()
    serializer_class = serializers.TagSerializer


class EventFilterSet(FilterSet):
    tags = CharFilter(method='filter_tags')
    today = BooleanFilter(method='filter_today')

    def filter_tags(self, queryset, name, value):
        return queryset.filter(tags__slug__in=value.split(','))

    def filter_today(self, queryset, name, value):
        if value:
            today_min = datetime.datetime.combine(datetime.date.today(), datetime.time.min)
            today_max = datetime.datetime.combine(datetime.date.today(), datetime.time.max)
            return queryset.filter(date__range=(today_min, today_max))

        return queryset.all()


class EventViewSet(mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   viewsets.GenericViewSet):
    queryset = models.Event.objects.all()

    filter_backends = (
        filters.SearchFilter,
        DjangoFilterBackend,
        filters.OrderingFilter,
    )
    filter_class = EventFilterSet
    search_fields = (
        'title',
        'description',
        'tags__slug',
        'tags__title',
        'tags__description',
    )
    ordering_fields = (
        'date',
        'title',
    )

    pagination_class = pagination.LimitOffsetPagination

    serializer_class = serializers.EventSerializer
    list_serializer_class = serializers.FeedEventSerializer

    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'list':
            return self.list_serializer_class

        return self.serializer_class

    def get_object(self):
        if self.kwargs['slug'] == 'random':
            return random.choice(self.queryset)

        return super().get_object()


@api_view(['POST'])
def like_event(request, event_slug):
    event = get_object_or_404(models.Event.objects.all(), slug=event_slug)

    event.likes_count += 1

    event.save()

    return Response(status=status.HTTP_200_OK)


@api_view(['POST'])
def dislike_event(request, event_slug):
    event = get_object_or_404(models.Event.objects.all(), slug=event_slug)

    event.likes_count = max(0, event.likes_count - 1)

    event.save()

    return Response(status=status.HTTP_200_OK)
