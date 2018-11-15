//Podemos fazer comentário assim
/*Ou com com quebra
    de
    linha*/
//Todo arquivo em C++ usa o G++ para compilar seus códigos
#include <iostream> //Habilita o uso funções para entradas e saidas
#include <vector> //Acredito que deve habilitar algumas funcionalidades com array
#include <string> //Habilita o uso de string
#include <fstream> //Aqui vamos fazer a leitura/escrita em arquivos e seus respectivos tratamentos

using namespace std;

//Nosso código principal também vai através do bloco int main
int main(){
//Podemos usar tanto a função cout, quanto std::cout, caso você não tenha declarado indireção estática com o namespace
cout << "Hello world!" << endl; //Montagem básica de um hello world, você entenderá a sua estrutura melhor depois

return 0;
}
/*
Para compilar um programa do terminal basta usar o comando:
g++ -o nomedoexecutavel.exe nomedoprograma.cpp
Obs: Para compilar precisa que haja instaldo em sua máquina o compilador mingw

Para rodar o nosso código, basta  estar com o terminal na pasta em que se está o programa e usar o comando ./nomedoexecutavel.exe
*/