#include <stdio.h>
#include <stdlib.h>

//O while do do...while tem ;
int main(void)
{
    int valor=0, resultado, b;
    do
    {
        puts("Coloque um valor inteiro não negativo");
        scanf("%d", &valor);
    }
    while(valor<0);
    if(valor==1)
    {
        puts("Resultado:0");
    }
    else
    {
        resultado=valor;
        for(int i=valor-1;i>=1;i--)
        {
            resultado = resultado*i;
        }
        printf("Resultado:%d", resultado);
    }
}
