#include <stdio.h>
#include <stdlib.h>
#define MAX 6

int main()
{
    int A[MAX] = {5,2,4,1,0,3};
    int i, j, aux, pos_menor, menor; /** Uma vari�vel para guardar a POSI��O do menor e outra apenas para guardar o menor valor */
    puts("Array fora de ordem");

    for (i = 0; i<MAX; i++) /** Aqui � s� para printar o Array atual */
    {
        printf("Posicao %d: %d\t", i, A[i]);
    }
    /** Aqui vamos entrar no for que vai fazer a magia acontecer */
    for(i=0; i<MAX ;i++)
    {
        /** primeiro vamos chutar que o menor valor j� esteja na primeira posi��o */
        menor = A[i]; /** O valor do menor ser� nesse chute o valor da primeira posi��o */

        pos_menor = i; /** O zero � a posi��o do menor valor */

        for(j=i+1;j<MAX;j++)
        {
            if( A[j] < menor) /** Aqui nos estamos verificando se o valor que definimos como menor
                                  no nosso chute � realmente o menor, pois esse if s� ser� ativado caso encontre um valor
                                  menor do que aquele que definimos como menor*/
            {
                menor = A[j];
                pos_menor = j;
            }
        }
        if(pos_menor != i) /** Aqui n�s vemos se no for acima o valor de i da posi��o menor foi trocada
                               se foi, ent�o n�s vamos fazer a troca do valor que est� dentro de cada bloquinho */
        {
            aux = A[i];
            A[i]= A[pos_menor];
            A[pos_menor] = aux;
        }
    }
    puts("\nd");
    for (i = 0; i<MAX; i++)
    {
        printf("Posicao %d: %d\t", i, A[i]);
    }
}
