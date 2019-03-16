'''
    O statement with as é basicamente um try catch customizável
'''

#Primeiro vamos criar um arquivo
x = open('Arquivo.txt', 'w')
x.write('Hello')
x.write('World')

#Agora vamos usar essa função, como uma interface em MeuArquivo e visualizar erros
#que podem acontecer exclusivamente a partir dessa função
with open('Arquivo.txt') as MeuArquivo:
    for linha in MeuArquivo:
        print(linha) 

"""
Essa função está encapsulada em um ContextManager, o que possibilida o uso no
Statement with as, quando colocamos o with func as variavel, entratamos no 
método __enter__ do contextManager, se der algum erro,
entramos no método __exit__ desse mesmo objeto
"""

"""Podemos criar uma classe com esse ContextManager, assim podendo já deixar escrito
como se comportaria um catch dessa função"""

class NossoContextManager:
    def imprime(self, msg):
        print(msg)
    def __enter__(self):
        print('Entrando no bloco with')
        return self
    #Objeto de saida do statement with as, se der erro, vamos receber os parametros
    #Se não der erro, eles virão com o valor None
    def __exit__(self, tipo, valor, traceback):
        #Podemos ver o tipo de erro
        print(tipo)
        #O valor que originou aquele erro
        print(valor)
        #Seu traceback
        print(traceback)

with NossoContextManager() as teste:
    teste.imprime('Ola mundo!')
    raise ValueError('Ola mundo!')


with NossoContextManager() as teste:
    teste.imprime('Ola mundo!')