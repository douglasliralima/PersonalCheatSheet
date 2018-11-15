#Receba um número inteiro positivo na entrada e imprima os n primeiros números ímpares naturais. Para a saída, siga o formato do exemplo abaixo.

impares = int(input("Digite o valor de n: "))
numero = 0
procurando = True

while procurando:
    
    if(numero % 2 != 0):
        print(numero)
        impares = impares - 1
        
    numero = numero + 1
    
    if(impares == 0):
        procurando = False
