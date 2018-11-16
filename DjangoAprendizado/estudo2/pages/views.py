from django.shortcuts import render
from django.http import HttpResponse

def home_view(request):
	return render(request, "home.html", {})

#Podemos usar tanto apenas o request, como o de cima
def contact(request):
	print(request.user)
	lista = []
	for i in range(4):
		lista.append(i)

	contexto = {
	"meu_numero" : 55600518,
	"lista" : lista,
	"condicional" : True
	}
	return render(request, "pages/contact.html", contexto)
