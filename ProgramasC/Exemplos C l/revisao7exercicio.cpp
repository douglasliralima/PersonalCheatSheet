#include <stdio.h>
#include <stdlib.h>
#include <math.h>
/*quando tivermos o >= <= dentro de um loop com o acrescimo de 1 no final, ele s� vai parar de repetir quando o valor estiver
superior ou inferior do colocado*/
int main(void)
{
    //Precisamos fazer um la�o de repeti��o para que esteja dentro do max e do minimo permitido
    int numero,contador=0;
    do
    {
    puts("coloque um numero entre 1 e 10000:");
    scanf("%d", &numero);
    }
    while(numero<1||numero>10000); //S� continua quando o n�mero estiver entre a faixa permitida
        for(int i=1;i<=numero;i++)//Aqui come�amos a fazer a contagem de cada n�mero
        {
            for(int teste=1;teste<=i;teste++)//Vamos verificar se aquele i � primo ou n�o
                {
                    if(i%teste==0)//Se o resto entre o n�mero e o teste for igual a 0, ele entra aqui
                    {
                        contador++; //Aqui o ccontador soma, toda vez que o i for divisivel pelo testador
                    }
                }
            if(i==1||contador==2)//Se o n�mero for primo, ou seja, apenas no m�ximo duas divis�es
                {
                    printf("Numero primo:%d\n", i);
                }
            contador=0; //Aqui n�s zeramos o contador para fazer a verifica��o dos pr�ximos numeros primos
        }
        printf("Numero digitado:%d\n", numero);
        return 0;
}
