'''
    Em python nos temos dois tipos de classes abstratas, a primeira é não
    restritiva o que acaba não aglobando os conceitos básicos de classe abstrato
    da obrigação de incorporação de métodos a segunda é restritiva
'''

#1º Jeito

class objetoGrafico():
    def __init__(self, cor):
        self.cor = cor
    # Declarar uma classe abstrata aqui no python, tal qual em outras linguagens
    # Basta definir a assinatura do método
    def area(self):
        pass
    def perimetro(self):
        pass
    def info(self):
        print("Area total de", self.area(), "e de perimetro", self.perimetro())

#Podemos definir a classe quadrado apenas chamados na hierarquia
class quadrado(objetoGrafico):
    pass

meuquadrado = quadrado("azul")

#----------------------------------------------------------------

#2º Forma restritiva
from abc import ABC, abstractmethod


class objetoGrafico(ABC):
    def __init__(self, cor):
        self.cor = cor
    #Definir um método com essa tag vai dar erro se o seu filho não fizer um overridden
    @abstractmethod
    def area(self):
        pass
    @abstractmethod
    def perimetro(self):
        print("Métodos abstratos podem ter algumas implementações")
    def info(self):
        print("Area total de", self.area(), "e de perimetro", self.perimetro())

class quadrado(objetoGrafico):
    def perimetro(self, lado):
        #E serem chamadas em suas incorporações
        super().perimetro()
        return lado * 4

#Vai dar erro pois não incorporamos o método área:
meuquadrado = quadrado("azul")

#Agora implementando todos os metodos, temos perfeitamente a implementação de uma classe abstrata

class quadrado(objetoGrafico):
    #Podemos definir qual deveria ser o tipo da vari�vel que queremos chamar
    def perimetro(self, lado : int):
        #E damos um erro se for passado errado, mas isso � totalmente desaconselhavel no ducktype
        if not isinstance(lado, int):
            raise TypeError
            
        super().perimetro()
        return lado * 4
    def area(self, lado : int):
        return lado * lado

meuquadrado = quadrado("azul")

print(meuquadrado.perimetro(4))

print(meuquadrado.perimetro(2.0))