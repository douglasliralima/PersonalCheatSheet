#include <stdio.h>
#include <stdlib.h>
#define MAX 6

int main()
{
    int A[MAX] = {5,2,4,1,0,3};
    int i, j, aux, pos_menor, menor; /** Uma variável para guardar a POSIÇÃO do menor e outra apenas para guardar o menor valor */
    puts("Array fora de ordem");

    for (i = 0; i<MAX; i++) /** Aqui é só para printar o Array atual */
    {
        printf("Posicao %d: %d\t", i, A[i]);
    }
    /** Aqui vamos entrar no for que vai fazer a magia acontecer */
    for(i=0; i<MAX ;i++)
    {
        /** primeiro vamos chutar que o menor valor já esteja na primeira posição */
        menor = A[i]; /** O valor do menor será nesse chute o valor da primeira posição */

        pos_menor = i; /** O zero é a posição do menor valor */

        for(j=i+1;j<MAX;j++)
        {
            if( A[j] < menor) /** Aqui nos estamos verificando se o valor que definimos como menor
                                  no nosso chute é realmente o menor, pois esse if só será ativado caso encontre um valor
                                  menor do que aquele que definimos como menor*/
            {
                menor = A[j];
                pos_menor = j;
            }
        }
        if(pos_menor != i) /** Aqui nós vemos se no for acima o valor de i da posição menor foi trocada
                               se foi, então nós vamos fazer a troca do valor que está dentro de cada bloquinho */
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
