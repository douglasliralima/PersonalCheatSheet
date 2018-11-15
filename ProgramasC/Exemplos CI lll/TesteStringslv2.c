/** TesteStrings 1.2*/

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    char nome[10];
    printf("Digite seu nome com ate' 10 caracteres:"); /** Se o usuário colocar mais de 10 caracteres o programa vai bugar */
    fgets(nome,9,stdin);/** Se o usuario colocar o espaço buga, por algum motivo*/
    printf("Seu nome:%s", nome);
}
