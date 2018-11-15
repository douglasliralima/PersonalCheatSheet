#include <stdlib.h>
#include <stdio.h>
//Para alterar a versão do C que o compilador lê ou qualquer coisa assim, basta ir no settings->compiler
int main(void)
{
    int n,p,acertou=0;

    puts("Qual a resposta correta?");
   do
   {
    puts("coloque um numero de 1 a 5");
    scanf("%d", &n);
   }
   while(1>n||5<n);

    for(int i=1; i<=5; i++)
    {
        printf("Palpite %d\n", i);
        scanf("%d", &p);
            if(n==p)
            {
                acertou++;
            }
    }
    printf("%d pessoas acertaram\n", acertou);
}
