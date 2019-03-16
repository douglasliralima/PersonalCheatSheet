'''

Python é uma linguagem considerada como ducktyping, o que significa que ela tem
tem interfaces automáticas, ou seja, aqui nós não precisamos formalizar as nossas
interfaces, apenas chama-lo direto no construtor de cada classe ou no método.

Basicamente aqui nós não ligamos para qual objeto temos, seja ele qual for, apenas
queremos saber se ele pode empregar a ação que queremos que ele faz, por isso aqui
temos o problema de não poder diretamente definir variáveis.

Se quiser uma forma mais parecida com as abordagens clássicas, melhor fazer 
uma classe abstrata só com método abstrato
'''




class Pato:
    def __init__(self, pato):
        self.pato = pato
    
    def acoesPato(self):
        self.pato.quack()
        self.pato.fly()
        self.pato.swim()
        
class Marreco:
    def quack(self):
        print("Quack bullying")
    def fly(self):
        print("Try fly and fail")
    def swim(self):
        print("swin ugly")
        
class Cisne:
    def quack(self):
        print("Quack")
    def fly(self):
        print("fly beautiful")
    def swim(self):
        print("swin beautiful")
    
#Aqui incorporamos o nosso pato com a classe Cisne
patinhoFeio = Pato(Cisne())

#Que tem um lindo comportamento
patinhoFeio.acoesPato()

#E aqqui incorporamos um marreco todo feio
irmaoPatinho = Pato(Marreco())
#Que tem uma ação feia, pq faz bullying
irmaoPatinho.acoesPato()