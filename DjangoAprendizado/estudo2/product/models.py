from django.db import models

# Create your models here.
class Product(models.Model):
	title 		= models.CharField(max_length=120) # Faz um TextField com tam máximo -> max_length = required
	description = models.TextField(blank=True, null=True) #Permite que esse campo seja facultativo em um obj
	price 		= models.DecimalField(decimal_places=2, max_digits=10000)#Numero de decimais, máximo de digito em tudo
	summary 	= models.TextField(blank = False, null = True)
	#featured	= models.BooleanField(null = True) # null=True, default=True