#include <stdio.h>

int * testedear(int *ar)
{
int static ar2[1] = {2} ;
ar[1]=5; //Aqui o 5 fica salvo no endere�o, mesmo ap�s o fim da fun��o
return ar2[1];
}

int main(void)
{
    int ar[]={};
    int *p = testedear(&ar[0]);
    printf("posicao 1:%d\nposicao 4:%d", ar[1], *p);
}
