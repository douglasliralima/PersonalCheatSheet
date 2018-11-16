"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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
from django.contrib import admin
from django.conf.urls import url, include

urlpatterns = [
	url(r'admin/', admin.site.urls),
	url(r'webapp/', include('webapp.urls')),
	url(r'^', include('personal.urls')),
]#Deixa o r'^$' faz simbolizar que aquele é o começo da página a primeira, pois ela não será preenchida com nd para acontece, mas se você deixar o $, não poderá criar outra página a partir dessa
#O $ é útil apenas no final das páginas