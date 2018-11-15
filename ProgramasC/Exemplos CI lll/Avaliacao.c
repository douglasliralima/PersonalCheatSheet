#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

#define MAX_TIPO 21
#define MAX_QUANTFOCO 501
#define DISTANCIA 5

/** Armando S. Salvador Neto      2016009109*/
/** Douglas F. L. Lima            2016003123*/

typedef struct
    {
        int x, y;
        char tipo[MAX_TIPO];
    }

FocoDengue;
FocoDengue registrodefoco[MAX_QUANTFOCO];

int QuantFoco = 0;

void NovoRegistro(void)
{
    while(1)
    {
        if(QuantFoco >= MAX_QUANTFOCO)
        {
            printf("Não há mais espaco para registrar\n"
                   "Algoritmo encerrado");
            exit(1);
        }
        printf("Para parar digite [0 0]\n" "Digite as coordenada do foco:\n");
        scanf("%d%d", &registrodefoco[QuantFoco].x, &registrodefoco[QuantFoco].y);

        fflush(stdin);

        if(registrodefoco[QuantFoco].x == 0 && registrodefoco[QuantFoco].y == 0)
        {
            return;
        }

        printf("\nDigite o tipo do foco: ");
        fgets(registrodefoco[QuantFoco].tipo, MAX_TIPO-1, stdin);
        registrodefoco[QuantFoco].tipo[strlen(registrodefoco[QuantFoco].tipo)-1] = '\0';
        QuantFoco++;
    }
}

//------------------------------------------------------------------------------------------------------------------------------

float LocalDeFoco(int xA, int yA, int xB, int yB)
{
    return sqrt( pow((xB - xA), 2) + pow((yB - yA), 2) );
}

//-------------------------------------------------------------------------------------------------------------------------------

void VerificaFoco(void)
{
    int j = 0, a, b;
    float localdefoco;
    printf("Coordenadas:\n");
    scanf("%d%d", &a, &b);

    for(int i = 0; i<QuantFoco; i++)
    {
        localdefoco = LocalDeFoco(a, b, registrodefoco[i].x, registrodefoco[i].y);

        if(localdefoco <= DISTANCIA)
        {
            printf("O foco %s com as coordenada: %d, %d se encontra proximo\n", registrodefoco[i].tipo, registrodefoco[i].x, registrodefoco[i].y);
            j++;
        }
    }
    printf("%d focos estao proximos a coordenada inserida\n", j);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------

void ListaDeRegistro(void)
{
    for(int i = 0; i<QuantFoco; i++)
    {
        printf("registro[%d]\n"
                "-->Descricao: %s\n"
                "-->Coordenadas: %d,%d\n", i+1, registrodefoco[i].tipo, registrodefoco[i].x, registrodefoco[i].y);
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

int Total(const char *str)
{
    int resultado = 0;
    for (int i = 0; i<QuantFoco; i++)
    {
        if(strcmp(str, registrodefoco[i].tipo) == 0)
        {
            resultado++;
        }
    }
    return resultado;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------

float Porcentagem(int total)
{
    float porcentagem;
    porcentagem = (100*total)/QuantFoco;
    return porcentagem;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------

void Relatorio(void)
{

    char registro[MAX_TIPO];
    int total;
    float porcentagemRegistro;

    FILE *stream;
    stream = fopen("relatorio.txt", "w+");

    printf("Digite o tipo de registro para gerar o relatorio:\n");
    fgets(registro, MAX_TIPO -1, stdin);
    registro[strlen(registro)-1] = '\0';

    total = Total(registro);

    printf("Houveram %d registros do tipo: %s\n\n", total, registro);
    fprintf(stream, "Houveram %d registro do tipo: %s\n\n", total, registro);

    porcentagemRegistro = Porcentagem(total);

    printf("A porcentagem desse registro e' de %.2f porcento\n\n", porcentagemRegistro);
    fprintf(stream, "A porcentagem dessa registro e' de %.2f porcento\n\n", porcentagemRegistro);

    for(int i = 0; i<QuantFoco; i++)
    {
        if(strcmp(registro, registrodefoco[i].tipo) == 0)
        {
            printf("registro[%d]\n"
                "-->Descricao: %s\n"
                "-->Coordenadas: %d,%d\n", i+1, registrodefoco[i].tipo, registrodefoco[i].x,registrodefoco[i].y);
            fprintf(stream, "registro[%d]\n"
                "-->Descricao: %s\n"
                "-->Coordenadas: %d,%d\n", i+1, registrodefoco[i].tipo, registrodefoco[i].x, registrodefoco[i].y);
        }
    }

}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

void ExibeMenu(void)
{
    printf("-------------------------------------MENU--------------------------------------"
           "\n\n\n"
           "[1] Cadastrar ocorrencia\n"
           "[2] Listar Ocorrencia\n"
           "[3] Consulta por regiao\n"
           "[4] Gerar relatorio por tipo\n"
           "[0] Sair\n");

}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

int main()
{
    while(1)
        {
        int opcao;
        ExibeMenu();
        scanf("%d", &opcao);
        fflush(stdin);

        switch(opcao){
            case 1:
                NovoRegistro();
                break;
            case 2:
                ListaDeRegistro();
                break;
            case 3:
                VerificaFoco();
                break;
            case 4:
                Relatorio();
                break;
            case 0:
                return 1;
            default:
                printf("\nOpcao invalida\n");
                break;
        }

    }
    return 0;
}
