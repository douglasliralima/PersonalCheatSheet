'''
Existe uma série de ferramentas que nós usamos em python para a programação para a internet, google app engine, django, jython(interação de java-python).. Vamos ver aqui a básica do python
Aqui usaremos os famosos sockets, que fazemo a comunicação na internet, protoculando mensagens no port number(0 ~ 65535). Lembrando que aqui a comunicação é feita usando o endereço de IP da máquina e o port number
os Port Numbers 0 ~ 1023 geralmente são dos dos protócolos padrões da máquina
'''

#Bom vamos olhar por enquanto a parte server side
from socket import * #importamos tudo do package socket


#Primeira coisa que fazemos é definir o nome do endereco de host do servidor e o port number
meuHost = 'localhost'
portNumber = 50007

#Precisamos agora criar um objeto de socket, passamos para ele a família do endereço(protocolo de endereço de IP) e o tipo(TCP) de socket stream(socket.SOCK_STREAM) ou datagram(sock.DATA_DGRAM), para preencher e criar um servidor TCP/IP
socketobj = socket(AF_INET, SOCK_STREAM)

#Agora nós realmente preenchemos os nossos endereços, passando uma tupla com nossas paradas 
socketobj.bind((meuHost, portNumber))

#O socket começa então a esperar por clientes, aqui podemos limitar a quantidade de clientes que o servidor consegue lidar de uma vez
socketobj.listen(5)


while True:
	#Entra no loop infinito e fica esperando por novos clientes
	conexao, endereco = socketobj.accept() #Aqui ele devolve um socket que representa a conexao e outro que é o endereco do cliente
	print('Server foi conectado com:', endereco)

	#Se ele passar e for aceito pelo socket, vamos iniciar uma comunicacao com o cliente
	while True:
		#Esse método lê 1024 bits do socket
		data = conexao.recv(1024)

		if not data: break #Se o cliente parou de enviar dados quebramos o laco infinito

		#Esse bzinho transforma as paradas em formato de bytes
		conexao.send(b'Voce mandou:' + data)

	#Se saiu do laco, fechamos a conexao com esse cliente
	conexao.close()

