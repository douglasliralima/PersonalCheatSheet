class Conta():
    
    #Método especial para definir o construtor
    def __init__(self, ID, saldo):
        self.ID = ID
        self.saldo = saldo
    
    #Método padrão para quando se fizer o print(objetoCLasse) aparecer
    #Também é usado se quiser converter o objeto da classe em string
    def __str__(self):
        return "Esse é meu novo strign padrão"
    
    #Método para fazer a soma de objetos
    def __add__(self, outroObjeto):
        self.saldo += outroObjeto.saldo #No caso só com outro objeto
        #Temos também o __sub__, __div__ e o __mult__
    
bradesco = Conta()

bradesco.__dict__

#Se a gente documentar cada método com o """ """ 
#podemos ver toda a sua documentação com o help()
    
bradesco.__bases__ #Permite ver a herança do objeto

#Tem o método e função call q eu achei inútil
    