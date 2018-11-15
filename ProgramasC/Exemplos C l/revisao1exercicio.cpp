#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(void)
{
    for(int i=0; i<=200; i++)
    {
        if(i%2==0)
        {
            printf("%d:So aprende a programar quem escreve	programas \n", i);
        }
        else
        {
            printf("%d: Quem não escreve programas não aprende a programar \n", i);
        }
    }
    return 0;
}
