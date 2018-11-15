#include <stdlib.h>
#include <stdio.h>

enum semana{domingo, segunda, terca, quarta, quinta, sexta, sabado};

int main()
{
    enum semana s1, s2, s3;
    s1 = segunda;
    s2 = terca;
    s3 = s1 + s2;
    printf("Valor %d\n", s1);
    printf("Valor %d\n", s2);
    printf("Valor %d\n", s3);
    if(s3 == quarta)
    printf("S3 e igual a quarta");
}
