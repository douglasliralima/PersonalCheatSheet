#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(void)
{
int continuacao = 0, y=0;
    while(continuacao = 1 - y)
    {
        int n1,n2,maior,menor;
        printf("Coloque seu primeiro valor aqui: \n");
        scanf("%d", &n1);
        printf("Coloque seu segundo valor aqui:\n");
        scanf("%d", &n2);
        n1>n2 ? (maior=n1,menor=n2):(maior=n2,menor=n1); //1º maior repetindo no maior e menor
        printf("Maior:%i | Menor:%i", maior, menor);

        printf("\nDeseja repetir?\n");
        scanf("%d", &y);
    }
    return 0;
}
