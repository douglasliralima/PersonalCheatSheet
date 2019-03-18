'''
    Esse é o melhor jeito que temos para armazenar objetos, ele é fabuloso
    e armazena tudo com muito menos dor de cabeça
'''
import pickle
l1 = [1,2,3,4,5,6]
#Ele empacota tudo direto
print(pickle.dumps(l1))
#Inclusive objetos
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    def ola(self):
        print("Hello sir")
        
eu = Pessoa("Douglas", 21)
euBinario = pickle.dumps(eu) #Podemos guardar como é aquele objeto em uma stram binária

#Para gravar em arquivo é facinho, facinho
arq = open("Maravilha.pck", 'wb')
pickle.dump(l1, arq)
pickle.dump(eu, arq)
arq.close()

#Para carregar, ele vai carregando na ordem do que foi escrito
arq = open("Maravilha.pck", 'rb')
lista = pickle.load(arq)
objetoEu = pickle.load(arq)
arq.close()


arq = open("Maravilha.pck", 'rb')
objetoEu = pickle.loads(euBinario)
arq.close()
objetoEu.ola()

#Um problema é que a definição da classe tem que estar em memória principal 
#para ele poder ao menos carregar o objeto
