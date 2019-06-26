import requests #Baixar via pip
import json


send = {'ultimaMovimentacao':'2018-12-21',	
	'janela':1,	
	'loja':'13'}
r = requests.get(url='http://localhost:5000/recomendacao', json=send).json()
print(r.json())
