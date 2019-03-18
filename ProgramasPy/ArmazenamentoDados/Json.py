'''
    QUando trabalhamos com a web, ainda mais comum do que receber pacotes de dados
    na camada de aplicação, é receber arquivos JSON(JavaScript Object Notation),
    para isso o python tem um tipo especial
'''
import json

#Podemos armazenar um dicionário em JSON
preferidas = {"Elfo" : "mago", "humano" : "pnc", "anão":"guerreiro", "orc":"barbaro", "gnomo":"ladino"}

data = json.dumps(preferidas)
print(data)
arq = open("RacasClasses.json", "wb")
arq.write(data.encode())
arq.close()

arq = open("RacasClasses.json", "ab")
data = json.dumps([1,2,3,4,5]) #Podemos colocar listas também, de qualquer tipo
arq.write(b'\n') #Vamos pular linha para não misturar
arq.write(data.encode())
arq.close()

#Para ler o JSON e converter em um tipo:
arq = open("RacasClasses.json", "rb")
data1 = arq.read() #Lemos o arquivo
data1 = [linha.decode() for linha in data1.split(b'\n')] #Decodificamos cada uma das linhas
data1 = [json.loads(linha) for linha in data1] #Convertemos eles em dict e list
arq.close()

#Podemos transformar um objeto em dict e passar ele por json também, caso queira