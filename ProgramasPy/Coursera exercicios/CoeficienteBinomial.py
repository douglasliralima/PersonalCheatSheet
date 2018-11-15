def fatorial(x):
    fatorial = 1
    while x > 1:
        fatorial = fatorial * x
        x = x - 1
    return fatorial

def coefBinomial(n, k):
    resultado = fatorial(n) //(fatorial(k)*fatorial(n-k))
    return resultado

#Vamos testar isso diretamente pelo interpretador do IDLE
