/** TesteStrings 3*/

#include <stdlib.h>

int main(void)
{
    char *ar = "1234";
    int a = strlen(ar);
    printf("Tamanho total da string: %d, Tamanho no strlen: %d\n", a+1, strlen(ar));
    char ar2[] = "4321";
    char ar3[] = "5678";
    int endereco = strcpy(ar3,ar2);
    printf("A string ar3 se tornou:%s e o primeiro endereço de ar3 e':%d", ar3, endereco);
    return 0;
}
