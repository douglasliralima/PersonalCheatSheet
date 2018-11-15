#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void menuInicial()
{
    printf("---------------------------Opcoes de Caixa--------------------------------------\n\n");
    puts("Bem vindo(a)");

    printf("Selecione o que deseja fazer:\n"
           "\tDigite 0 para registrar a venda\n"
           "\tDigite 1 para obter o total de vendas realizadas\n\n");
}



int main()
{
    int EscolhaCaixa;
    int ProdutoEscolhido;
    int Quantidade;
    menuInicial();
    scanf("&d", &EscolhaCaixa);
    switch (EscolhaCaixa)
    case 1: //Aqui ela escolheu fazer uma venda

    //Códigos apenas para mostrar todos os itens e os preços
    char produtos[][40]={"arroz", "leite", "Pacote de carne(1Kg)", "Baguete", "Miojo", "Cup Noodles","Refrigerante lata(350ml)"};
    float PrecosProdutos[] = { 20.0 , 6.99 , 30.0 , 4.0 , 2.0 , 3.50 , 3.0 };
    for(int i = 0; i<7; i++)
    {
        printf("\t%d - %s - %.2f\n", i+1, produtos[i],PrecosProdutos[i] );
        //nessa linha de cima ele apenas fará o agregado de todas as opções de produto e valores
    }

    //A partir daqui ela escolhera os itens a serem vendidos
    scanf("%d %d", &ProdutoEscolhido, &Quantidade);
    puts("-------------------------------------Produtos em Venda----------------------------------------");
    printf("%s x %d = %f\n" produto[ProdutoEscolhido], Quantidade, PrecosProdutos[ProdutoEscolhido]*Quantidade)
    return 0;
}
