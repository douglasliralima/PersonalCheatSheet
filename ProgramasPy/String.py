#Uma coisa que fazemos bastante em lp é pegar o tamanho de uma string
#Aqui temos uma funcao para isso

x = "tamanho"

print(len(x))

#Uma coisa que fazemos no java é pegar uma substring com o método objetoDeString.substring(comeco,fim )
#Em python, nos fazemos similarmente a C e falamos em uma identação de array, de onde até onde é sua substring
print("Tamanho a partir do 3º index:", x[3:])
#Podemos aqui mais facilmente definir o tamanho das substrings
print("Do 0 até o 3º index em tamanho:", x[0:3])
#Aqui também é mais fácil pegar o substring a partir do final, passando o index negativo
#Basicamente o index negativo é o len - index
print("Antipenultima e penultima letra em tamanho", x[-3:-1])
print("\n" * 3)
#O contains aqui é bem mais fácil também, apenas perguntamos se uma substring está **dentro** dessa string
print("A string contém \"tam\"?", ("tam" in x), sep="\n")