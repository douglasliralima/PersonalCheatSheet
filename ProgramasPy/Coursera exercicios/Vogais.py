def vogal(letra):
    if(letra == 'a' or letra == 'A'):
        return True

    elif(letra == 'e' or letra == 'E'):
        return True

    elif(letra == 'i' or letra == 'I'):
        return True

    elif(letra == 'o' or letra == 'O'):
        return True

    elif(letra == 'u' or letra == 'U'):
        return True

    else:
        return False

def testa_vogal():
    print("Letra 'a' é vogal? Func:", vogal("a"), "R:Sim")
    print("Letra 'o' é vogal? Func:", vogal("o"), "R:Sim")
    print("Letra 'd' é vogal? Func:", vogal("d"), "R:Não")
    print("Letra 'g' é vogal? Func:", vogal("g"), "R:Não")
    print("Letra 'u' é vogal? Func:", vogal("u"), "R:Sim")
