#include <stdlib.h>
#include <stdio.h>
#include <math.h>
/* Um número primo é divisível apenas por ele mesmo ou por 1, ou seja, de 0 até ele só existem 2 divisões possíveis
então para ver se 1 número é primo ou não, basta fazer um contador de divisões entre o numero e uma variável teste qualquer
se o contador ficar acima de 2 e o numero não for 1, então esse número não será 0 */
int main(void)
{
    int numero,contador=0;
    puts("coloque o numero:");
    scanf("%d", &numero);
    for(int teste=1;teste<=numero;teste++)
    {
        printf("teste numero:%d\n", teste);
        if(numero%teste==0)
        {
            contador++;
        }
    }
    numero==1||contador==2 ? printf("numero primo"):printf("not primo");

    return 0;
