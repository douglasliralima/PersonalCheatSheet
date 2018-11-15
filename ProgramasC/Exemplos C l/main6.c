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
    int ProdutoEscolhido = 1;
    int Quantidade;
    int VendaTotalQualquer; //Esse int será referente a essa venda
    char produtos[][40]={"arroz", "leite", "Pacote de carne(1Kg)", "Baguete", "Miojo", "Cup Noodles","Refrigerante lata(350ml)"};
    float PrecosProdutos[] = { 20.0 , 6.99 , 30.0 , 4.0 , 2.0 , 3.50 , 3.0 };
    menuInicial();
    scanf("%d", &EscolhaCaixa);
    //Aqui ela escolheu fazer uma venda
            //Códigos apenas para mostrar todos os itens e os preços
    switch (EscolhaCaixa)
    {
        case 0:
            VendaTotalQualquer = 0;
            puts("Ao inves de selecionar algum produto, aperte 0 para finalizar a venda");
            for(int i = 0; i<7; i++)
            {
                printf("\t%d - %s - %.2f\n", i+1, produtos[i],PrecosProdutos[i] );
                //nessa linha de cima ele apenas fará o agregado de todas as opções de produto e valores
            }
            puts("--------------------------------Produtos em Venda-------------------------------");
            while(ProdutoEscolhido)
            {
                //A partir daqui ela escolhera os itens a serem vendidos
                printf("Produto:");
                scanf("%d", &ProdutoEscolhido);
                if(ProdutoEscolhido>0)
                {
                printf("Quantidade:");
                scanf("%d", &Quantidade);
                printf("%s x %d = %.2f\n", produtos[ProdutoEscolhido-1], Quantidade, PrecosProdutos[ProdutoEscolhido-1]*Quantidade);
                VendaTotalQualquer = VendaTotalQualquer + (PrecosProdutos[ProdutoEscolhido-1]*Quantidade);/*Aqui estará sendo somados
                os preços dos itens*/
                }
                else
                {
                    printf("Preço Total:%d\n", VendaTotalQualquer);
                    puts("--------------------------Fim da venda---------------------------------");
                }
            }
            break;
    }
return 0;
}
