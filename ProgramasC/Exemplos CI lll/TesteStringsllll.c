/** TesteStrings 4*/

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    char *str1 = "1234";
    char *str2 = "56789";
    char resultado[] = "2345"; /**Se o array tiver um valor máximo de elementos menor que o possível a ser colocado na string
    ocasionará em corrupção de memoria e se o resutado for um char constante(char *), ele vai dar erro após a compilação*/
    strcat(strcpy(resultado,str1), str2); /** Deixa essa merd4 sozinha para não dar bosta*/
    printf("E ai, o que vai dar? %s", resultado); //
    return 0;
}
