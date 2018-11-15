#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    char oi[15] = "Hello Word"; /** Se você colocar o número de elementos igual a 10, acarretá em um T na hora que você chamar
    para printar vindo do inferno, sempre lembrar do '\0' */
    printf("%s", oi); /**Se colocar oi[] não compila*/
    return 0;
}
