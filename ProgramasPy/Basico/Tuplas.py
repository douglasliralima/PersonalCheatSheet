#O mais próximo que você já viu de uma tupla é algo como uma lista que não pode ter seus valores modificados..

#Para criar uma tupla é bem fácil

x = 1, 2, 3, 4
print("Tupla 1:", x)
#x[0] = 4 Vai gerar exceção
y = x, 3, "QualquerCoisa"
print("Tupla 2:", y)
#Podemos acessar diretamente um elemento da tupla, como y[1], por exemplo
#Temos aquele lance de ir de um indece até uma casa, um range

#Temos o lance do len e do in podendo ser definido aqui também
print("\nTamanho da 2º Tupla:", len(y))
print("\nPossui \"QualquerCoisa\"?", ("QualquerCoisa" in y))