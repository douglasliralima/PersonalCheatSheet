#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    /* Cabeçalho */
    int ValorInicial,ValorAnterior, ProxValor,repeticao=1,i=0,j=0,razao,Soma;
    puts("Digite os valores que quer verificar em sequencia, quando finalizar, introduza o valor 0.");

    puts("Primeiro Valor:");
    scanf("%d", &ValorInicial);
    ValorAnterior=ValorInicial;
    puts("Proximo valor");
    scanf("%d", &ProxValor);
    razao = ValorAnterior - ProxValor;
    Soma = ValorInicial + ProxValor;
    if(ProxValor==0||ValorAnterior-razao==ProxValor)
        {
            j++;
        }
    i++;
    ValorAnterior=ProxValor;
    do
    {
        puts("Proximo valor");
        scanf("%d", &ProxValor);
        Soma = Soma + ProxValor;
        (ProxValor==0) ? (repeticao=0):(repeticao=1);
        if(ProxValor==0||ValorAnterior-razao==ProxValor)
        {
            j++;
        }
        i++;
        ValorAnterior=ProxValor;
    }
    while(repeticao);
    if(i==j)
    {
        puts("Os valores formam uma PA");
        printf("razao=%d\n",razao=-razao);
        printf("Soma=%d", Soma);
    }
    else
    {
        puts("Os valores nao formam uma PA");
    }
}
