#Aqui nos temos laços de repetição if-else, if-elif(else if)-else e while que funcionam exatamente igual com aquilo que já tinhamos visto anteriormente
x = 0
print("while são assim:")
while x < 5:
	print(x)
	x+=1

#Para fazermos iteração no python é diferente da maioria das linguagens, aqui nos usamos uma funcao chamada range, que retorna um array em que,
#range("Passo de criação do array":"Numero de casas do array")
#onde o x vai atualizando nos valores desse array

print("\n" * 2, "Fors são assim:", sep = "")
for x in range(5):
	print(x)

print("\n" * 2, "Fors-each são iguais a java", sep= "")

lista = [1,2,3,4,8]
for x in lista:
	if x == 3:
		continue #Temos o break também
	print(x)