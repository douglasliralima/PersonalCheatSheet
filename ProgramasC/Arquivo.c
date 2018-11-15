#include <stdio.h>
#include <stdlib.h>

int main()
{
    /**Aqui eu criei as frases que vão ser usada, tentei faser um array de duas dimensões mas deu merd4 por causa do strlen*/
    char frase1[] = {"Vamo ver se vai:"};
    char frase2[] = {"Foi pohh4"};
    FILE *pArq;
    /**Aqui eu criei o arquivo que vai ser usado, com w = modo de escrita, se não tiver cria, se já tiver deleta*/
    pArq = fopen("Arquivo.txt", "w");
    if(pArq == NULL)
    {
        puts("Arquivo nao existe \n");
        return 1;
    }
    /**Então percorremos toda a string escrevendo cada caracter no arquivo*/
    for(int i=0; i<=strlen(frase1); i++)
    {
        fputc(frase1[i], pArq);

    }
    /**Podemos colocar um caracter direto no arquivo e aqui eu estou dando um tab, não precisamos escrever apenas a string no
    nosso arquivo*/
    fputc('\t', pArq);
    /**Aqui colocamos a segunda frase*/
    for(int i=0; i<=strlen(frase2); i++)
    {
        fputc(frase2[i], pArq);
        fputc(' ', pArq);
    }
    /**SEMPRE FECHA A POHH4 DO PROGRAMA, PODE DAR MERD4!*/
    fclose(pArq);
    return 0;
}
