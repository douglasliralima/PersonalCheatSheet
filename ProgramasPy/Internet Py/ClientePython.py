'''
Vamos agora fazer o lado do cliente em socket
'''
from socket import *


#Primeira coisa que nós fazemos é definir o endereco de IP e a port number que vamos usar para nos conectar
serverHost = 'localhost'
serverPort = 50007

#Mensagem a ser mandada, colocamos o b para ela ser transformada em binário
mensagem = [b'Espero que tudo de certo!']

#Criacao do socket e vinculacao dele ao servidor
socketobj = socket(AF_INET, SOCK_STREAM)
socketobj.connect((serverHost, serverPort))#VEja que aqui fazemos o connect ao invés do bind

#Vamos mandar linha por linha as nossas mensagens
for linha in mensagem:
	socketobj.send(linha)

	data = socketobj.recv(1024)
	print("CLiente recebeu", data)

