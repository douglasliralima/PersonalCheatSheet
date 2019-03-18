'''
    Muitos dos arquivos que vêem da internet ou que mandamos por ela vão em
    formatos de bytes, como pacotes de bytes. Podemos transformar inteiros, floats
    ou strings em pacotes de bytes(string já é uma sequência de bytes(sequencia
    de char)).
    Criamos pacotes de bytes com o modulo struct:
'''
import struct

#Imagine que queremos fazer um pacote de byte com os dados abaixo:
nome = 'Joao'
idade = 23
altura = 1.75

#Como a string é um conjunto de bytes e n foi criado no formato b"strign":
nome = nome.encode()

#Nos falamos para o struct como são esses dados, no caso um float de 4 letras
#um int e um string e mandamos os dados
cod = struct.pack("4s I f", nome, idade, altura)
print(cod)

#Agora se quisermos mandar isso pela internet, precisamos criar o arquivo
arq = open("pessoa.cod", 'wb')
arq.write(cod)
ar.writ(b'\n') #Pular linha em formato de bytes
arq.close()

#Se recebermos isso pela internet, desempacotamos assim:
del(cod)
arq = open("pessoa.cod", 'rb')
cod = arq.readline()
print(cod)
cod = struct.unpack("4s I f", cod) #Passamos o formato e oq desempacotar
print(cod, "String em formato correto:", cod[0].decode())

#Lista de tipos aqui: https://docs.python.org/3.4/library/struct.html

'''
    Resumo
    Ns strings de N char, I inteiro pequeno, Q inteiro grande, f float pequeno,
    d float grandeNs strings de N char, I inteiro pequeno, Q inteiro grande, 
    f float pequeno, d float grande, ? booleano
'''
#Podemos enpacotar listar também se transformar elas em tuplas:
t = ('Joao', 23, 1.75)
s = struct.Struct('4s I f')
data = s.pack(*t)
