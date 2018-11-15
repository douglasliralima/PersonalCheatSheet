#No python ele define o tipo da variavel sozinho, voce só se preocupa em criar a variavel

exemplo = "Linguagem diferentona"

print(exemplo)

#Podemos fazer uma simulação de casting aqui, chamando uma funcao, olha que cagado

x = int(3.5)
print("x =", x)

#Temos a mesma funcao de math em Java que é a max, aqui no python

x = max(1,85,3,5,30)
print("Max:", x) #Temos o min também

'''
Temos 7 operadores principais em python, os 5 convencionais
+, -, /, *, %
E um operador para potência e outro para divisão apenas do número positivo, podem ser úteis
**, //
'''

print(2**3)
print(3//2) #Resultado deveria ser 1.5
#Temos a mesma ordem de multiplicação/divisão, antes de soma e subtração de outras linguagens
print("2 + 3 * 2 = ", 2 + 3 * 2)
#Entretanto temos 5 principais "tipos" de variáveis em python que são números, strings, listas, tuples e dictionaries