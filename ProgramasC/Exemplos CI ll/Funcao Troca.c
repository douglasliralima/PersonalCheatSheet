#include <stdio.h>
#include <stdlib.h>
int numeroProdutos[];
void Troca(int *a, int *b)
{
    //Aqui você indescritivelmente tem que pensar nos bloquinhos
    int aux; //Criamos uma variável apenas para nos auxiliar na troca
    aux = *b; //Colocamos o valor de A no auxiliar
    *b = *a; // Colocamos o valor de B em A
    *a = aux;//Colocamos o valor de A que foi inicialmente colocado no auxiliar em B e assim está feita a troca
}

int main()
{
    int a = 2, b = 5;
    Troca(&a, &b);
    for (int i = 0; i<10; i++)
    {
    numeroProdutos[4]++;
    }
    printf("A Trocado = %d\n\n B Trocado = %d, NumeroProdutos:%d ", a, b, numeroProdutos[4]);
    return 0;
}
