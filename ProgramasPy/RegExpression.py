'''
    Útil para detectar padrões de texto, geralmente em validação de coisas,
    ou em raspagem de site feito por crawlers, se a gente pesquisar no google
    tipo "python regular expression for email", a gente consegue bastante coisa
    pronta.
'''
import re

#String de teste
string_de_teste = "O gato é bonito, mas o meu gato é mais"
"""
Método search serve para procurar um padrão dentro do teste
search(r'Regex', StringAlvo), colocamos um r atrás da string para 
transformar em raw string, não convertendo caracteres especiais como o \n em ações
como pular a linha. Usamos isso porque em expressões regulares tem varios caracteres
especiais que usamos para funções distintas de suas originais
"""
#Retorna um objeto de re  
padrao = re.search(r'gato', string_de_teste)

if padrao:
    print(padrao.group())
else:
    print("Não achou")
    
string_de_teste = "O gata é bonita, mas o meu gato é mais"
    
#O ponto equivale a qualquer caracter, logo podemos deixar feminino e masculino nossa busca
#Se ao invés do ponto representar tudo e quisermos haja um ali, colocamos \.
#findall encontra todas as expecificações de uma expressão regular
padrao = re.findall(r'gat.', string_de_teste)

if padrao:
    print(padrao)
else:
    print("Não achou")
    
#\w - A~Za-z
#Todos os caracteres especiais e funções: https://docs.python.org/3/library/re.html

#Vamos procurar a primeira incidência de 5 letras consecutivas na frase
string_de_teste = "O gata é bonita, mas o meu gato é mais"

padrao = re.search(r'\w\w\w\w\w.', string_de_teste)

if padrao:
    print(padrao.group())
else:
    print("Não achou")

#Aqueles caracteres especiais de regex temos aqui também
string_de_teste = "Anticonstitucionalicimamente é uma grande palavra"
#+ - procura uma ou mais incidências do filtro atrás dele
#* - procura 0 ou mais incidências do filtro atrás dele
padrao = re.search(r'\w\w\w+.', string_de_teste)

if padrao:
    print(padrao.group())
else:
    print("Não achou")
    
#Podemos especificar um grupo de caracteres customizável para procurar
string_de_teste = "O gato, a gata, as gatinhas, as gatonas"
padrao = re.findall(r'[gat]+.', string_de_teste)

if padrao:
    print(padrao)
else:
    print("Não achou")

#Podemos especifcar o tamanho de um grupo, veja que gatinhas vem sem o 's'
string_de_teste = "O gato, a gata, as gatinhas, as gatonas"
padrao = re.findall(r'\w{4,7}', string_de_teste)

if padrao:
    print(padrao)
else:
    print("Não achou")
    
#Existe um site bem interessante para testar as expressões regulares chamado:
#regex101.com

