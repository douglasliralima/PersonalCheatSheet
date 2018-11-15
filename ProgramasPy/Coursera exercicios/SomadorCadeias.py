'''Soma dos numerais em uma cadeia
Cada vez que você pega o resto de um número por 10(x % 10),
ela te devolve o último valor. Toda vez que você vai fazendo a
divisão inteira desse número por 10(x // 10), temos a exclusão desse último número'''

numero = int(input("Digite um número inteiro: "))
resultado = 0

while numero != 0:
    resultado = resultado + (numero % 10)
    numero = numero // 10

print(resultado)
