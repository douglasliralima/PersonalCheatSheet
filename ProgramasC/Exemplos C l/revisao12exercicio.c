#include <stdio.h>
#include <stdlib.h>
int main(void)
{
    int valor,repeticao=1,palpite,NumPalp=0;
    puts("Valor que vai ser advinhado");
    scanf("%d", &valor); //Se o programa para logo ap�s voc� colocar a vari�vel voc� provavelmente esqueceu do &
    while(repeticao)
    {
        puts("Seu palpite:");
        scanf("%d", &palpite);
        NumPalp++;
        (palpite==valor) ? (repeticao=0) : (repeticao=1);//Essa pohh1nhola s� vai com parentenses em todos os termos
    }

    printf("Voce acertou, %d e o valor.\n", palpite);
    printf("Numero de tentativas:%d", NumPalp);
    return 0;
}
