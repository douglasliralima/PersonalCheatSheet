#include <stdio.h>

int main(void)
{
    int a=1,b=2;
    int ar[2] = {2,4}; /**aqui tem dois elementos o ar[0] e o ar[1]*/
    int const* p = &ar[0]; /**Como o asterisco está depois do const, o ar[0] que se torna constante*/
    a += b;
    p++;
    printf("%d", a);
    return 0;
}
