'''Podemos criar listas de valores quinemquigual a C++
cada elemento da lista terá um index para que possamos o acessar e o manipular
com o primeiro tendo o index de 0'''

#----------------------------------Output
'''
Podemos fazer colocar as aspas normalmente na string com um \"
Para fazer um string de multiplas linhas, você precisa definir ele da mesma forma que
um comentário de multiplas linhas
'''
#Nos podemos fazer coisas muito loucas, como isso, multiplicar as vezes que uma string acontece
print("\n" * 3)

'''
Você deve ter percebido que o print do python termina automáticamente com o \n, podemos
controlar com o que ele irá acabar, colocando end = "aquilo que voce deseja", por exemplo para colocar um
espaço entre duas strings ou n fazer o pulo de linha '''
print("Se", end = " ")
print("acostumando\n")

'''Voce deve ter percebido que sempre ao se separar no print alguma coisa
por uma virgula ele automáticamente já coloca no lugar da virgula em sua string um espaço
podemos retirar essa funcionalidade também settando sep = "" '''
print("Fica", "juntinho\n\n", sep="")
 
#Podemos usar o print igual ao java, bem bonzinho
print("Muito " + "Melhor")

linha_unica = "\"Muito diferente\n"
multiplas_linhas = '''String
Com
Várias linhas '''

#Juntar strings aqui ´´e basicamente só fazer somas
soma = linha_unica + multiplas_linhas
#Para aparecer dentro do print, fazemos parecido com c
print("%s%s%s" %('Posso fazer assim',linha_unica, multiplas_linhas),)

#-------------------------------input
#Aqui a gente só chama uma funcaozinha marota que pega e converte em string
#se quiser outro valor, só fazer um cast na string(bizarro)
print("\n" * 3 + "Digite um valor: ", end="")
x = int(input())
print("Valor digitado", x)
#Podemos especificar a mensagem para a pegada do valor na própria funcao
x = input("Digite uma string: ")
print("Outro valor digitado:", x)