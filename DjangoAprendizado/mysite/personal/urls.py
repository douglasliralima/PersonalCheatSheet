from django.shortcuts import render

from . import views
from django.conf.urls import url

urlpatterns = [
	url(r'^$', views.index, name = 'index'),
    url(r'Contact/$', views.contact, name = 'contact'),
]
