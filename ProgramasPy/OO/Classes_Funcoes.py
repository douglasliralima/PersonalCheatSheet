#No python nรฃo precisamos definir o retorno no cabeรงalho da funcao, ela sรณ vai determinar o tipo apรณs o retorno

def somaBasica(a,b,c = 0):
	return a + b + c

print("Soma normal:", somaBasica(1,2,3))
#Uma variรกvel pode pegar o "ponteiro" para uma funcao e ser usado como uma

magica = somaBasica
print("Magica:", magica(1,2,3))

#Em python os parรขmetros que estรฃo instรขnciados por default no cabeรงalho se tornam opcionais, nรฃo precisamos fazer certos polimorfismos
a = int(input("Valor 1: "))
b = int(input("Valor 2: "))
print(somaBasica(a,b))

#Uma coisa interessante do python, diferente de python ou cpp, um arquivo pode conter vรกrias classes e a classe principal n precisa ter o mesmo nome do arquivo
print("\n" * 3)


class mamifero:
	planeta = "terra"

	def set_planeta(self, planeta):
		self.planeta = planeta

	def __init__(self, patas, genero):
		self.patas = patas
		self.genero = genero

	def __str__(self):
		#Para acessar atributos estรกticos, se coloca o nome da classe mesmo
		return "planeta" + mamifero.planeta + "\nnยบ de patas:" + str(self.patas) + "\nGenero:" + self.genero



#Um cachorro é um objeto e tal qual em JAVA, objetos sรฃo ponteiros, trabalhamos com eles assim em python
class cachorro(mamifero): #Precisamos colocar a classe que iremos acessar

	#Criamos qualquer mรฉtodo de instรขncia em python, passando manualmente como um dos parรขmetros o objeto que estรก chamando
	#Se omitirmos self, estaremos criando um mรฉtodo de classe
	def __init__(self, nome, idade, patas, genero):
		#Para chamar qualquer mรฉtodo da classe acima na herança, basta usar a funcao super, passando a classe que tรก chamando e o objeto que faz a chamada
		super().__init__(patas, genero)
		#Aqui nos temos um this também que cria as variáกveis para a própria classe, ela é um self.,
        #colocamos o _ para simbolizar que a variavel é privada, vale também para métodos
		self._nome = nome
		self._idade = idade

	def set_nome(self, nome):
		self._nome = nome

	def set_idade(self, idade):
		self._idade = idade

	def get_nome(self):
		return self._nome

	def get_idade(self):
		return self._idade

	def gatos():#mรฉtodo estรกtico
		print("morte a todos")

	#Precisamos sobreescrever o mรฉtodo str em python para podermos retornar a string como padrรฃo
	def __str__(self):
		return "Cachorro: \nNome: " + self._nome + "\nIdade: " + str(self._idade) + super().__str__()


catioro = cachorro("Bethoveen", 2, 4, "masculino")
print("Classe: ", catioro, sep = "\n")
catioro.set_nome("Relampago")
print("\n", "-Alterado", catioro, sep = "\n")

cachorro.gatos() #Acessamos mรฉtodos estรกticos apenas com o identificador da classe e o mรฉtodo
#Existe um mรฉtodo que pega o dicionรกrio referente a uma classe no python
print(catioro.__dict__)

#Uma outra função útil de python é verificar qual é o ID daquele objeto:
print(id(catioro))
#Cada objeto referencia um endereço de memória único, vemos com o id, qual é esse endereço

#******Existe um jeito de fazer ordenação de objetos, mas foda-se
