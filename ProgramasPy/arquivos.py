#Arquivos em python

'''
    Para usar arquivos em python é bem fácil, uma coisa que você já deve ter em mente
    r = Usado quando apenas queremos ler um arquivo
    w = Usando quando apenas queremos escrever um novo arquivo ou reescrever um já existente
    a = Usado para anexar logo a frente as novas informações em um arquivo
    r+ = Usado para trabalhar tanto com leitura quando escrita em arquivo
'''

#Para escrever um arquivo

arq = open('NovoArq.txt', 'w')
#Escreve uma string passada como parâmetro da função abaixo, no arquivo
arq.write('Hello World\n') 
arq.write('Sempre da append no que foi escrito anteriomente no arquivo\n')
#Caso queira se pular linha entre cada posição da string, precisa colocar o sinal -_-
array = ['Esse\n','Foi\n','um\n','vetor\n','de\n','strings\n']
#Escreve um vetor de strigns no arquivo, cada posição uma linha
arq.writelines(array)
arq.close()


'''
    Abaixo estão os códigos de leitura
    Só para você ficar esperto, saiba que como mostrado abaixo, o python tem um contador interno onde
    a cada operação de leitura ele não continua, apenas avança esse contador do que já foi lido e não rele alguma
    parte, o melhor é guardar em um string caso você queira reler novamente uma certa parte do arquivo
'''
arq = open('NovoArq.txt', 'r')
print("Caso queira ler uma linha especifica:\n\n", arq.readline(3), "\n\n")
print("Caso queira ler tudo em formato de array:\n\n", arq.readlines(), "\n\n")
print("Arquivo total:\n\n", arq.read(), "\n\n")
arq.close()

'''
    Dá para usar o with ... também aqui para lidar com arquivos. dizem ficar mais clean, eu não acho
'''