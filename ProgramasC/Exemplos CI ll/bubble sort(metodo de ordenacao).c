#include <stdio.h>
#include <stdlib.h>

#define ELEMENTOS 1000000

int main() {
   // N�meros desordenados
   int ar[ELEMENTOS] ;
   int auxiliar, i, repeticao = 1;

   // Aplico o bubble sort para ordenar os valores no vetor
   while(repeticao)
    {
    repeticao = 0;/**ent�o se tudo estiver organizado, o la�o poder� acabar*/
    for ( i = 0; i < ELEMENTOS -1; i++)//ou seja, vai repetir at� o pen�ltimo valor da vari�vel
        {
        if (ar[i] > ar[i+1]) //Se a posi��o anterior for maior que a pr�xima, troca
            {
            auxiliar = ar[i]; /** Auxiliar pega o valor de a*/
            ar[i] = ar[i+1];  /** aqui A e B ficam iguais*/
            ar[i+1] = auxiliar; /** Aqui B fica o valor que j� estava guardado em A*/
            printf("\tTroca\n");
            repeticao = i; /**Ou seja, sempre que em algum lugar do la�o, for encontrada, uma posi��o que n�o esteja crescente
                            ** o la�o se repetir�, at� que ele n�o venha mais a cair nesse if
                            */
            }
        }
    }

   // Agora mostra o array organizado
   printf("Vetor organizado:\n");
   for (i = 0; i < 10; i++) {
      printf("%d",ar[i]);
      if (i < 9) {
         printf(", ");
      }
   }
   printf("\n");
}
