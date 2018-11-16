from django.conf.urls import url #Para especificar o padrão de url
from . import views #O ponto é para pegar do package atual

urlpatterns = [
	#Colocamos o identificados da classe view diretamente na ER e um identificador que será o nome da página 
    url(r'^$', views.index, name='index'),
]