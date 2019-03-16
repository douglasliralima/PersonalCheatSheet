try:
    lista = []
    lista.append(int('1a'))
except (ValueError, IndexError) as excessao:
    print(excessao.__traceback__.__str__)
else:
    print("Só entra aqui se não passar pelos catchs")


#Outra coisa que é interessante, podemos declarar dentro de um catch
#Alguma outra possível exceção que aconteceria
    
try:
    num = 1/0
    int(num)
except Exception as E:
    raise ValueError from E