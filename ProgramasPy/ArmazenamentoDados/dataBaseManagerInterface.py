'''
    Gerenciador de banco de dados em python, a partir dele podemos fazer certas
    administrações de qualquer tipo de banco de dados, útil quando estamos 
    trabalhando com vários tipos de banco
'''

import dbm
'''
Existem 4 modos de abertura:
    c(Abre, se não existir cria)
    r(ler o database)
    w(escrever)
    n(abre o databse vazio para ler e escrever)
'''
db = dbm.gnu.open('Contatos.db', 'c')

#Você trabalha com ele basicamente como se fosse um dicionário
db['Douglas'] = 'douglasliralima@gmail.com'
print(db['Douglas'])
#Podemos armazenar outros valores também, 
#entranto precisamos transformar em string primmeiro
db['Idade'] = str(21)
print(int(db['Idade']))

#Basicamente o banco de dados fica muito parecido com um dicionario
#tendo até as mesmas funções
print("Quantidade de chaves:", len(db))
print(db.keys())

#Podemos ver se tem uma chave lá dentro com o in e deletar chaves com o del
b'Douglas' in db
del(db['Douglas'])
db['Douglas'] = 'douglasliralima@gmail.com'

#Podemos enpacotar streams também 
import struct
db['PowerLvl'] = struct.pack("I", 8000)
db['PowerLvl']
