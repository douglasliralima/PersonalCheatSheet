/*
 * main.c
 *
 * Arquivo principal do projeto.
 *
 *  Criado em: 20 de abr de 2016
 *  Autor: lincoln
 *  Modificado por: Drayton Corrêa Filho             Matricula: 2016058088
 *                  Douglas Felizardo de Lira Lima   Matricula: 2016003123
 */

#include <stdio.h>
#define PRODUTO_PAO 	  1     /* numero que identifica o pao */
#define PRODUTO_MORTADELA 2	 	/* numero que identifica mortadela */
#define PRODUTO_BOLO      3	 	/* numero que identifica bolo */
#define PRODUTO_LEITE	  4	 	/* numero que identifica o leite */
#define MAX_PRODUTOS     1000

#define MAX_COMPRAS 	  200	 /* numero total de compras que o programa aceita */

float totalCompras[MAX_COMPRAS]; /* armazena o total de cada compra */
int nCompras = 0; 				 /* numero de compras ja registradas */
int produtoVendido[MAX_PRODUTOS];
float totalProdutos[MAX_PRODUTOS];
int nProdutos = 0;


void ApresentaMenu(void)
{
	printf("\n\nOpcoes:\n"
			"\n\t1 - Inicia uma venda"
			"\n\t2 - Informa o total de vendas"
			"\n\t3 - Informa a media das vendas"
			"\n\t4 - Informa o valor da maior venda"
			"\n\t5 - Lista todas as compras"
			"\n\t6 - Informa qual o produto mais vendido"
			"\n\t7 - Informa o total de venda por o produto"
			"\n\t8 - Ordena compras"
			"\n\t9 - Encerrar\n\n");
}

/**
 *  NovaVenda: Le o total vendido de cada produto e calcula o total dessa venda.
 *  		   A propria funcao armazena os produtos vendidos e total da venda
 *  		   nas variaveis adequadas.
 *  Parametros:
 *  	(nenhum)
 *  Retorno:
 *  	Retorna o total da venda.
 *  	Ou -1 caso não tenha mais espaço para armazenar.
 */
float NovaVenda(void)
{
	float totalVenda = 0.0, totalProduto;
	int produto;

	if (nCompras >= MAX_COMPRAS){
		/* Caso o array de compras esteja cheio, nao registrar nova compra */
		printf("Nao ha mais espaco para armazenar nova compra.");
		return -1;
	}

	printf("\n\n ***** Iniciando a venda #%d ***** \n", nCompras + 1);
	printf("Codigo dos produtos: "
			"\n\t1 - Pao"
			"\n\t2 - Mortadela"
			"\n\t3 - Bolo"
			"\n\t4 - Leite"
			"\n\t0 - Sair\n\n");

	/** laco que pede indefinidamente um produto e o valor total vendido desse produto
	 * ate que seja digitado produto zero.
	 */
	while(1) {
		printf("Digite o codigo do produto a adicionar ou 0 para sair: ");
		scanf("%d%*c", &produto);

		if (produto == 0) {
			/* encerrar a compra */
			break;
		}

		printf("Digite o total vendido desse produto: ");
		scanf("%f%*c", &totalProduto);

		totalVenda += totalProduto; /* adiciona o valor vendido na compra */
		/* TODO 1: registrar o produto e o valor do produto vendido */
        produtoVendido[nProdutos] = produto; /* TODO 1: registrar o produto e o valor do produto vendido */
        totalProdutos[nProdutos] = totalProduto;
        nProdutos++;

		printf("Adicionado R$%.2f do produto %d a compra.\nSubtotal: R$%.2f.\n\n", totalProduto, produto, totalVenda);
	}

    totalCompras[nCompras] = (totalVenda);

	nCompras++; /* Finaliza essa compra, a próxima sera armazenada no proximo item */

	return totalVenda;
}

/**
 * TotalVendas: Informa o total geral vendido, somando todas as vendas já realizadas.
 */
float TotalVendas(void)
{
	float totalVendas = 0;
    int i;

    for(i = 0; i < nCompras; i++){
        totalVendas = totalVendas + totalCompras[i];
    }

	return totalVendas;
}

/**
 * MediaVendas: Informa a media de valor das vendas.
 */
float MediaVendas(void)
{
	float mediaVendas = 0;
	float totalVendas = 0;
	int i;

	for(i = 0; i < nCompras; i++){
        totalVendas = totalVendas + totalCompras[i];
    }

	mediaVendas = totalVendas / nCompras;

	return mediaVendas;
}

/**
 * MaiorVenda: Informa o valor da maior venda já realizada.
 */
float MaiorVenda(void)
{
	float maiorVenda = 0;
	int i;

    if (nCompras == 1){
        maiorVenda = totalCompras[0];
    }

	for(i = 0; i < nCompras - 1; i++){
        if (totalCompras[i] > totalCompras[i+1]){
            maiorVenda = totalCompras[i];
        }

        if (totalCompras[i] < totalCompras[i+1]){
            maiorVenda = totalCompras[i+1];
        }

    }

	return maiorVenda;
}

/**
 * ListaVendas: Lista o valor de cada venda já realizada.
 */
void ListaVendas(void)
{
    int i;

    if (nCompras ==  0){
        printf ("Nenhuma compra foi efetuada.\n");
    }

    for (i = 0; i < nCompras; i++){
        printf ("O valor da compra %2d foi: R$ %.2f\n", i+1 , totalCompras[i]);

    }
}

/**
 * TotalVendidoPorProduto: Informa o total vendido do produto especificado.
 *  Parametros:
 * 		produto (entrada): o codigo do produto
 * 	Retorno:
 * 		o total que foi vendido do produto especificado
 */
float TotalVendidoPorProduto(int produto)
{
	/* TODO calcular o total vendido do produto passado no parametro */
    int i;
	float totalVendidoPorProduto = 0.0;

	for(i = 0; i < nProdutos; i++)
        {
        if(produtoVendido[i] == produto){
            totalVendidoPorProduto = totalVendidoPorProduto + totalProdutos[i];
        }
	}
	return totalVendidoPorProduto;
}

void ListaTotalVendidoPorProduto(void)
{
    float pao, mortadela, bolo, leite;

    pao = TotalVendidoPorProduto(1);
    mortadela = TotalVendidoPorProduto(2);
    bolo = TotalVendidoPorProduto(3);
    leite = TotalVendidoPorProduto(4);

    printf("\n--------------------------Total de venda por produto----------------------------------"
           "\nPao:%.2fR$ \nMortadela:%.2f$"
           "\nBolo:%.2fR$ \nLeite:%.2fR$\n", pao, mortadela, bolo, leite);
}

/**
 * ProdutoMaisVendido: Informa o código do produto mais vendido.
 */
int ProdutoMaisVendido(void)
{
	/* TODO procurar qual produto mais aparece no array de produtos vendidos */
	 float pao, mortadela, bolo, leite;

        pao = TotalVendidoPorProduto(1);
        mortadela = TotalVendidoPorProduto(2);
        bolo = TotalVendidoPorProduto(3);
        leite = TotalVendidoPorProduto(4);

        if((pao >= mortadela) && (pao >= bolo) && (pao >= leite)){
            printf("\nProduto mais vendido: Pao Total vendido:%.2fR$", pao);
        }
        if((mortadela >= pao) && (mortadela >= bolo) && (mortadela >= leite)){
            printf("\nProduto mais vendido: Mortadela Total vendido:%.2fR$", mortadela);
        }
        if((bolo >= mortadela) && (bolo >= pao) && (bolo >= leite)){
            printf("\nProduto mais vendido: Bolo Total vendido:%.2fR$", bolo);
        }
        if((leite >= pao) && (leite >= bolo) && (leite >= mortadela)){
            printf("\nProduto mais vendido: Leite Total vendido:%.2fR$", leite);
        }
 return 0;
}

/**
 * Troca: troca dois valores entre si.
 */
 void Troca(float *valor1, float *valor2){
    float auxiliar = *valor1;

    *valor1 = *valor2;
    *valor2 = auxiliar;

 }

 /**
 * OrdenaCompras: ordena do menor para o maior (de forma crescente) os valores do array das compras.
 */
 void OrdenaCompras(void){
    int checagem = 1;
    int i, compara;

    while (checagem != 2){
        checagem = 2;

        for (i = 0; i < nCompras - 1; i++){
            compara = 0;

             if (totalCompras[i] > totalCompras[i+1]){
                compara = 1;
            }

            if (compara == 1){
                Troca ( &totalCompras[i] , &totalCompras[i+1] );
                checagem = 1;
            }

        }
        i = 0;
    }

 }

/**
 * Funcao main()
 */
int main()
{
	float totalVenda, total;
	float media, maior;
	int produtoMaisVendidoINT;
	char opcao;

	/* Mensagem de boas vindas */
	printf("Ola, esse programa registra as compras"
			"de um mercadinho\n");

	/* Loop infinito com opcoes do usuario */
	while(1) {
		ApresentaMenu();
		printf("Escolha uma opcao do menu: ");
		scanf("%c%*c", &opcao);

		if (opcao == '9') {
			break;
		}

		switch (opcao) {
			case '1':
				totalVenda = NovaVenda();
				printf("Venda #%d finalizada. Total: R$%.2f.\n", nCompras, totalVenda);
				break;
			case '2':
				total = TotalVendas();
				printf("Total vendido em %d compras: R$ %.2f\n", nCompras, total);
				break;
            case '3':
                media = MediaVendas();
                printf ("A media de vendas em %d compras: R$ %.2f\n", nCompras, media);
                break;
            case '4':
                maior = MaiorVenda ();
                printf ("O valor da maior venda foi: R$ %.2f\n", maior);
                break;
            case '5':
                ListaVendas();
                break;

            case '6':
                ProdutoMaisVendido();
                break;
            case '7':
                ListaTotalVendidoPorProduto();
                break;

            case '8':
                OrdenaCompras();
                printf ("Os valores das compras foram ordenados.\n");
                break;
			default:
				printf("Opcao \'%c\' invalida, tente novamente.\n", opcao);
		}
	}

	printf("Obrigado por utilizar esse programa.");

	return 0;
}

