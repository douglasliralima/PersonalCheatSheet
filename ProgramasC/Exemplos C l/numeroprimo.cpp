#include <stdlib.h>
#include <stdio.h>
#include <math.h>
/* Um n�mero primo � divis�vel apenas por ele mesmo ou por 1, ou seja, de 0 at� ele s� existem 2 divis�es poss�veis
ent�o para ver se 1 n�mero � primo ou n�o, basta fazer um contador de divis�es entre o numero e uma vari�vel teste qualquer
se o contador ficar acima de 2 e o numero n�o for 1, ent�o esse n�mero n�o ser� 0 */
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
