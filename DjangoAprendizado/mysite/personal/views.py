from django.shortcuts import render

def index(request):
	#Dá para passar um dic também
	return render(request, 'personal/home.html')

def contact(request):
	return render(request, 'personal/basic.html', {'content': ["Email para contato:", "douglasliralima@gmail.com"]})
