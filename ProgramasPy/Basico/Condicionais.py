#Nos em java usavamos == para igualdades entre variáveis e enderecos de objetos 
#Ou o método equals para conteúdos de objetos

'''Similarmente em python temos respectivamente
== - Compara valores tanto de variaveis quanto de objetos
is - Compara os enderecos desses objetos:v
'''

x = 5
y = 6

print(x == y)

x = "amor"
y = input()
print(x is y)
print(x == y)

#Operadores condicionais padrão: <, >, >=, <=,!=
#Operadores condicionais são diferentes: not, and, or
#Vou dar exemplo disso n, muito easy


#Aqui os nossos laços condicionais e de repeticao são definidos sem os parenteses e tem seu escopo definido
#pelo espaçamento de linha, muito estranho, mas força a boa identação
x = input("Valor 1: ")
y = input("Valor 2: ")
if x>y:
	print("1º maior")
else:
	print("2º maior")

