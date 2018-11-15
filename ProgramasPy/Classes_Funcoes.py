#No python não precisamos definir o retorno no cabeçalho da funcao, ela só vai determinar o tipo após o retorno

def somaBasica(a,b,c = 0):
	return a + b + c

print("Soma normal:", somaBasica(1,2,3))
#Uma variável pode pegar o "ponteiro" para uma funcao e ser usado como uma

magica = somaBasica
print("Magica:", magica(1,2,3))

#Em python os parâmetros que estão instânciados por default no cabeçalho se tornam opcionais, não precisamos fazer certos polimorfismos
a = int(input("Valor 1: "))
b = int(input("Valor 2: "))
print(somaBasica(a,b))

#Uma coisa interessante do python, diferente de python ou cpp, um arquivo pode conter várias classes e a classe principal n precisa ter o mesmo nome do arquivo
print("\n" * 3)


class mamifero:
	planeta = "terra"

	def set_planeta(self, planeta):
		self.planeta = planeta

	def __init__(self, patas, genero):
		self.patas = patas
		self.genero = genero

	def __str__(self):
		#Para acessar atributos estáticos, se coloca o nome da classe mesmo
		return "planeta" + mamifero.planeta + "\nnº de patas:" + str(self.patas) + "\nGenero:" + self.genero



#Um cachorro é um objeto e tal qual em JAVA, objetos são ponteiros, trabalhamos com eles assim em python
class cachorro(mamifero): #Precisamos colocar a classe que iremos acessar

	#Criamos qualquer método de instância em python, passando manualmente como um dos parâmetros o objeto que está chamando
	#Se omitirmos self, estaremos criando um método de classe
	def __init__(self, nome, idade, patas, genero):
		#Para chamar qualquer método da classe acima na herança, basta usar a funcao super, passando a classe que tá chamando e o objeto que faz a chamada
		super(cachorro, self).__init__(patas, genero)
		#Aqui nos temos um this também que cria as variáveis para a própria classe, ela é um self., colocamos o _ para simbolizar que a variavel é privada
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

	def gatos():#método estático
		print("morte a todos")

	#Precisamos sobreescrever o método str em python para podermos retornar a string como padrão
	def __str__(self):
		return "Cachorro: \nNome: " + self._nome + "\nIdade: " + str(self._idade) + super(cachorro, self).__str__()


catioro = cachorro("Bethoveen", 2, 4, "masculino")
print("Classe: ", catioro, sep = "\n")
catioro.set_nome("Relampago")
print("\n", "-Alterado", catioro, sep = "\n")

cachorro.gatos() #Acessamos métodos estáticos apenas com o identificador da classe e o método
#Existe um método que pega o dicionário referente a uma classe no python
print(catioro.__dict__)