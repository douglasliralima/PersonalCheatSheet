#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    const char *ar;
    ar = "bizarro\n";
    printf("%s", ar);
    printf("%c",1["estranho"]);/**Aqui é somado 1 com o primeiro endereço da string e impresso o caracter na tela*/
    printf("%s", "\nmuito locko");/** Aqui o string é criado logo no printf */
    return 0;
}
