/** TesteStrings 4*/

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    char *str1 = "1234";
    char *str2 = "56789";
    char resultado[] = "2345"; /**Se o array tiver um valor m�ximo de elementos menor que o poss�vel a ser colocado na string
    ocasionar� em corrup��o de memoria e se o resutado for um char constante(char *), ele vai dar erro ap�s a compila��o*/
    strcat(strcpy(resultado,str1), str2); /** Deixa essa merd4 sozinha para n�o dar bosta*/
    printf("E ai, o que vai dar? %s", resultado); //
    return 0;
}
