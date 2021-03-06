"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from wtg import views

router = routers.DefaultRouter()
router.register(r'tags', views.TagViewSet)
router.register(r'events', views.EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('events/like/<event_slug>', views.like_event),
    path('events/dislike/<event_slug>', views.dislike_event),
    path('login/', include('rest_social_auth.urls_token')),
    path('admin/', admin.site.urls),
]

if not settings.IS_PRODUCTION:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
