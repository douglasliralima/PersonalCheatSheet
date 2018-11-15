#include <stdio.h>
#include <stdlib.h>
#define ELEMENTOS 4

void funcaotroca(int a[], int b[], int i)
{
    b[i+1];
    int aux;
    aux = a[i];
    a[i]= b[i+1];
    b[i+1] = aux;
    printf("%d\n", *b);
}

int main() {
    int static artic[4];
    for (int i = 0; i<4; i++)
    {
        printf("array numero %d com valor:%d\n", i, artic[i]);
    }
   // Números desordenados
   int ar[ELEMENTOS] = {2,1,0,5};
   int auxiliar, i, repeticao = 1;

   // Aplico o bubble sort para ordenar os valores no vetor
   while(repeticao)
    {
    repeticao = 0;/**então se tudo estiver organizado, o laço poderá acabar*/
    for ( i = 0; i < ELEMENTOS -1; i++)//ou seja, vai repetir até o penúltimo valor da variável
        {
        if (ar[i] > ar[i+1]) //Se a posição anterior for maior que a próxima, troca
            {
            funcaotroca(ar,ar, i); //Cuidado, lembrar que você pode passar
            /** Aqui B fica o valor que já estava guardado em A*/

            repeticao = i; /**Ou seja, sempre que em algum lugar do laço, for encontrada, uma posição que não esteja crescente
                            ** o laço se repetirá, até que ele não venha mais a cair nesse if
                            */
            }
        }
    }

   // Agora mostra o array organizado
   printf("Vetor organizado:\n");
   for (i = 0; i < ELEMENTOS; i++) {
      printf("%d",ar[i]);
      if (i < ELEMENTOS - 1) {
         printf(", ");
      }
   }
   printf("\n");
}
