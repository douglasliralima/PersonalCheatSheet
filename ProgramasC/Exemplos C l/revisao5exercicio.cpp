#include <stdio.h>
#include <stdlib.h>

/* Aqui nos precisamos pegar
dois conceitos, 1 para a regua
 e outro para os numerais, os
 numerais eu acredito que seja mais f�cil
para a regua n�s podemos fazer o
seguinte,n�s s� colocamos na tela se o n�mero

A segunda parte do programa, ele
tera que repetir de 0 a 10 5 vezes,
definios ent�o duas variaveis, uma
para contar de 0 a 49 e
outra para ficar indo apenas at� 10
 e depois reiniciar

Quando i iniciar, j inicia e imprime na tela
sempre que o resto de i for diferente de 0
, quando i contar 10 vezes, o j precisa receber o
valor 0, para isso ele pega o resto de de i com 10,
que nesse momento, ser� igual
a zero e o resultado � colocado na
tela
*/
//"%" � apenas para n�meros inteiros
//Lembre-se o % � apenas para o resto, o resto! n�o o denominador
int main(void)
{
    for(int i=0; i<=50; i++)
    {
        i%10==0 ? printf("%d", i/10):printf("%c", ' ');
    }
    puts("");
    for(int i=0, j=0; i<=50; i++)
    {
        if(i%10!=0)
        {
            j++;
            printf("%d", j);
        }
        else
        {
            j=(i%10);
            printf("%d", j);
        }
    }
    return 0;
}
