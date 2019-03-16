#Para criar um erro customizado em python é muito fácil
#basta puxar o exception da hierarquia
class ValorRepetidoErro(Exception):
    #Podemos fazer init customizado para a criação do levantamento da exceção
    def __init__(self, n):
        self.n = n
        
    #Mensagem customaizada de erro
    def __str__(self):
        return "Você já digitou esse número %i antes"%(self.n)

lista = []

for i in range(3):
    while True:
        try:
            num = int(input("Escolha um número: "))
            break
        except (ValueError, SyntaxError):
            print("Digite apenas numeros com a sintaxe correta")
    
    if num not in lista:
        lista.append(num)
    else:
        raise ValorRepetidoErro(num)