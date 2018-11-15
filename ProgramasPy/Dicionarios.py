'''
Dicionários são em python como uma sequência de códigos chave, para acessar certos elementos
ao contŕario de listas, dicionários não podem ser somados com outros dicionários
eles são denotados por {"palavra chave" : "elemento"}
'''

preferidas = {"Elfo" : "mago", "humano" : "pnc", "anão":"guerreiro", "orc":"barbaro", "gnomo":"ladino"}

print(preferidas["Elfo"]) #Aessamos ela diretamente
del preferidas["humano"] #Podemos deletar ela diretamente também

print("Tamanho do dicionário:", len(preferidas))
#Podemos acessar todas as palavras chaves e todos os elementos com os dois métodos abaixo

print(preferidas.keys())

print(preferidas.values())

#Podemos definir os códigos como números também e podemos definir como os elementos de uma chave, uma lista
demonstracao = {1:[1,2,3,4]}
print("\n\n", demonstracao[1])

#Também é legal usar dicionário contendo como elementos outros contatos

classes = {"Preferencias" : preferidas}
print(classes["Preferencias"])
#Veja que ele retorna em ordem cagada, pois em dicionários a ordem é irrelevante

#Nós podemos ir adicionando coisas o tempo coisas nesse dicionário
preferidas["Tiefling"] = "Ceifador"
print("\nAdicionado Tiefling")
print(preferidas)

#No dicionário pode se colocar qualquer coisa, inclusive funcoes também :v ao acessar uma funcao com o dic, colocar o parâmetro, foda-se

#Ao percorrer um dicionario no for, vamos ir recebendo no for, as palavras chaves desse dicionário

for racas in preferidas:
	print("Raça:", racas)
	print("Classe Preferida", preferidas[racas])