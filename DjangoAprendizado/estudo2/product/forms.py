from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
	title=forms.CharField(label='', 
 		widget=forms.TextInput(attrs={"placeholder": "Your title"}))
	class Meta():
		model = Product
		fields = [
			'title',
			'description',
			'price',
			'summary'
		]

#Basicamente uma copcola do Produto no banco de dados
class PureProductForm(forms.Form):
	title 		= forms.CharField(max_length=120)
	description = forms.CharField(max_length=120)
	price 		= forms.DecimalField(decimal_places=2, max_digits=10000)
	summary 	= forms.CharField(max_length=120)
