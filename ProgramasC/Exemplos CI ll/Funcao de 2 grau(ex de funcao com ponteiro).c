
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

float Delta(float a3, float b3, float c3)
    {
        return pow(b3,2) - (4*a3*c3); //Uma função só retorna um único valor, mesmo se você usar a virgula, ela vai retornar o operador virgula
    }



/* Essa função foi feita para fazer os calculos da função do 2º grau*/
void Funcao2grau(float a2, float b2, float c2, float *x12, float *x22, int *Pcondicional) // Ou seja, na hora de criar o usuário precisará colocar os valores com o &ndereço
    {
        float delta = Delta(a2,b2,c2);//Estou mandando para a função Delta fazer seu trabalho
        if(delta<0)
        {
            *Pcondicional = 1;
        }
        else
        {
            *x12 = (-b2+sqrt(delta))/(2*a2); //Aqui ele não funciona quando o delta fica negativo, graças a raiz, provavelmente.
            *x22 = (-b2+sqrt(delta))/(2*a2);
        }
    }



int main(void)
    {
        int x = 3, asd, dsa = 2;
        int *pInt = &x;
        asd= pInt + sizeof(5) ;
        printf("%d", asd);
        int condicional = 0;
        float a, b, c;
        float x1= 0, x2 = 0;
        puts("Coloque os valores de a, b, c:");
        scanf("%f %f %f", &a, &b, &c);
        Funcao2grau(a , b, c, &x1, &x2, &condicional);
        if(condicional==0)
        {
            printf("x1=%f x2=%f", x1, x2);
            return 0;
        }
        else
        {
            puts("delta negativo, resultados invalidos");
        }
    }

