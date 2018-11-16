from django.contrib import admin

#A partir da pasta corrente(.) e do models.py, pegamos a classe product
from .models import Product

admin.site.register(Product)
