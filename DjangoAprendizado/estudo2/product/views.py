from django.shortcuts import render
from .models import Product
from .forms import ProductForm, PureProductForm

# Create your views here.
def product_create_view(request):
	formulario = 3
	if formulario == 1:
		form = ProductForm(request.POST or None)
		if form.is_valid():
			form.save()
			form = ProductForm()

		context = {'form' : form}
		return render(request, "product/product_form.html", context)
		pass

	elif formulario == 2:
		#print(request.GET)#Pode especificar GET['title']
		#print(request.POST)
		if request.method == "POST":
			titulo = request.POST.get('title')#Nome do imput é o parâmetro
			print("Entrada no imput title:", titulo)
		return render(request, "product/product_form_purehtml.html", {})
		pass

	else:
		form_puro = PureProductForm()
		if request.method == "POST":
			form_puro = PureProductForm(request.POST)
			if form_puro.is_valid():
				print(form_puro.cleaned_data)
				Product.objects.create(**form_puro.cleaned_data)
		context = {
		"form" : form_puro
		}
		return render(request, "product/product_form_puredjango.html", context)

def product_view(request):
	#O id é um built-in item criado automáticamente ao se fazer o objeto
	obj = Product.objects.get(id = 1)
	'''
	context = {
	"title" : obj.title,
	"description" : obj.description,
	"price" : obj.price,
	"summary" : obj.summary
	}
	'''
	context = {'obj' : obj}
	return render(request, "product/product_template.html", context)
