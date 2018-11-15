def éPrimo(x):
    i = 2
    primo = True
    while i < x:
        if( x % i == 0):
            return False
        i = i + 1
    return True

'''def testa_primo():
    print("Iniciando os testes")
    print("1 é primo? Func:", éPrimo(1), "R:sim")     
    print("2 é primo? Func:", éPrimo(2), "R:sim")
    print("4 é primo? Func:", éPrimo(4), "R:não")
    print("6 é primo? Func:", éPrimo(6), "R:não")
    print("7 é primo? Func:", éPrimo(7), "R:sim")'''

def maior_primo(numero):
    
    while numero > 2:
        if(éPrimo(numero)):
           return numero
        else:
           numero = numero - 1
        
