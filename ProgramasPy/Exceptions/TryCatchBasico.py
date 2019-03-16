while True:
    try:
        x = float(input("Nosso número: "))
        inverse = 1.0 / x
    except ValueError:
        print("Colocar um valor que seja int ou float")
    except ZeroDivisionError:
        print("0 tem divisão indefinida")
    except:
        print("Exceção não esperada aconteceu)
        break
    #Entra aqui se finalizar o try ou entrar no except
    finally:
        print("Independente do que aconteceu, seu valor foi:", x)
        break
    
#Podemos fazer aqui também o throw de exceções, como em qualquer linguagem:

try:
    a = int(input("Coloque um numero entre 1~20:"))
    if not 1 <= a <= 20:
        raise ValueError
except:
    print("Erro capturado")
    print("Valor de a:", a)