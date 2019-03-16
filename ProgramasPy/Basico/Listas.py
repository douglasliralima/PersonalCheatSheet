#Em python nós apenas temos listas, não trabalhamos com arrays '-', tanto que roubamos sua identação para listas

#As listas aqui parecem bastante com c++
lista = []
lista.append("Tiro")
lista.append("porrada")
lista.append("Bomba")
#Conseguimos o tamanho da lista igual fazemos com strings em python
print(len(lista))
#Podemos printar diretamente igual as listas em java
print(lista)

#Para acessar diretamente um endereco da lista, basta passar seu index
print("Elemento na 2º casa da lista atual:", lista[1])
#Para colocar coisas no meio da lista usamos list.insert(onde, o que)
lista.insert(0,"Musica Ruim")
print(lista)
#Temos um método aqui só para deletar coisas, inclusive casas da lista
del(lista[0])
print(lista, "\n" * 2)
#Podemos definir uma sequência de deletagem, seguindo a mesma filosofia que tinhamos nos strings
del(lista[0:2])#Você coloca de qual INDEX, até qual CASA
print(lista)

#Podemos fazer um acesso direto aos elementos com a mesma filosofia
lista.insert(0, "Porrada")
lista.insert(0, "Tiro")
lista.insert(0,"Musica Ruim")
print(lista[1:4])

del(lista[0])
#Podemos fazer também listas receberem valores de outras listas
refrao = lista + lista
#Poderiamos fazer também refrao = [lista, lista]
print(refrao)
#Entretanto podemos simular um array bidimencional fazendo uma lista de listas
refrao = []
lista2 = lista
refrao.append(lista)
refrao.append(lista2)
print("\n" * 2, refrao, sep="\n")
#Funciona quinemquigual a arraybidimencional
print("Refrao 0, palavra 1:", refrao[0][1])

#Listas, tal qual arrays são imutáveis também, por isso seus elementos são mais facilmente substituiveis
refrao[0] = "MUDA TUTO!!"
print(refrao)

#Podemos também ordenar listas com um métodozinho simples que sobreescreve as coisas
numeros = [5,2,5,12,423,42,1,4,5]
print(numeros)
numeros.sort()
print("Ordenados:", numeros)
numeros.reverse()
print("Reverso:", numeros)
#Também podemos pegar os elementos de min() e max()