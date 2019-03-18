'''
    Shelve é usado quando precisamos armazenar multiplos objetos com uma certa
    organização para a retirada de objetos especificos do arquivo, criptografando-os
    com um identificador.
    Ele é um database que por baixo usa o pickle
'''
import shelve

db = shelve.open("shelve.db")

class Pessoa:
    pass

douglas = Pessoa()
db["pessoa1"] = douglas
#Assim como dbm temos todos os usos e funções e dicionários aqui no shelve
print(db.keys())
db.close()

#Um problema é que também temos as mesmas limitações do pickle, com a diferença
#que aqui como está criptografado é útil para só quem tiver a classe correta
#puder ler direito
