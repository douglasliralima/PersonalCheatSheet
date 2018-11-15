#include <stdio.h>
#include <stdlib.h>
//Cuidado com variaveis fora da tabela ASCII, repetição != repeticao
int main(void)
{
    int SaldoInicial,valor,SaldoFinal,repeticao =1;
    puts("Qual o seu saldo inicial?");
    scanf("%d", &SaldoInicial);
    SaldoFinal = SaldoInicial;
    while(repeticao)
    {
        puts("Introduza uma despesa ou ganho:");
        scanf("%d",&valor);
        SaldoFinal = SaldoFinal+valor;
        if(valor==0)
        {
            repeticao=0;
        }
    }
    printf("Seu saldo final:%d", SaldoFinal);
}
