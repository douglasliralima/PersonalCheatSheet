#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    char oi[15] = "Hello Word"; /** Se voc� colocar o n�mero de elementos igual a 10, acarret� em um T na hora que voc� chamar
    para printar vindo do inferno, sempre lembrar do '\0' */
    printf("%s", oi); /**Se colocar oi[] n�o compila*/
    return 0;
}
