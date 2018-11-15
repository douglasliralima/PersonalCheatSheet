"""Fazer um programa que dado um número, diga se ele é real ou natural e, se for real, fazer o devido arredondamento"""

numero = float(input("Digite o Numero: "))

"""Ao transformar ele em inteiro eu acabo excluindo a parte decimal do número fazendo isso, caso o numero seja diferente da transformação dele em inteiro
logo ele é decimal"""
if numero != int(numero):
    print(numero, "é Real")
    #Primeiro separamos a parte decimal
    decimal = numero - int(numero)
    arredondado = numero - decimal #Descascamos a parte decimal para fazer o arredondamento pra baixo
    if decimal >= 0.5: #Se a parte decimal for maior que 0.5, logo arredondamos para cima
        arredondado += 1
    print("Valor arredondado:", arredondado)
else:
    print(int(numero), "é inteiro")
