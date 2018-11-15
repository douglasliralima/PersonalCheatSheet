/** Resumo struct e union */

#include <stdio.h>
#include <stdlib.h>

    typedef union{ /** Se vier depois da bosta*/
    char nivel[30];
    char medo[10000];
    }tfodido;

    typedef struct{
    int dia,mes,ano;
    }tdata;

    typedef struct{
    char nome[50];
    tdata nascimento;
    tfodido niveldefodido;
    tfodido quantidadedefodido;
    }tregistro;


int main(void)
{
    tregistro registro1 = {"Douglas Lima", {26,10,1997},"10","8000"};
    exiberegistro1(registro1);
    return 0;
}


