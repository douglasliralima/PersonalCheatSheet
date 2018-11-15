'''Um programa que imprima o fatorial daquele numero'''
numero = int(input("Digite o valor de n: "))
resultado = 1

while numero > 1:
    resultado = resultado * (numero * ( numero - 1 ))
    numero = numero - 2

print(resultado)
