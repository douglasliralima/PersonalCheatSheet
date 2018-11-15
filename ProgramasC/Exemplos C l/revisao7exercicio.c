#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(void)
{
    int numero,i;
    puts("coloque o numero:");
    scanf("%d", &numero);
    for(int testador=0;testador!=numero;testador++)
    {
        if(numero%testador==0)
        {
            i++;
        }
        printf("%d", i);
    }
    return 0;
}
