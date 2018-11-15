#include <fstream>
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main(){
	//Arrays é a mesma merd4 de C
	int coisas[5] = {0,1,2,3,4};
	cout << "Coisa 0: " << coisas[0] << endl;
	//Temos arrays bidimendicionais em tri tbm, mas eles são arrays em si
	int bicoisas[5][5] = {{0,1,2,3,4}, {0,1,2,3,4}, {0,1,2,3,4}};
	cout << "Coisas 3-4: " << bicoisas[2][4] << endl;

	//For é a mesma merd4
	for(int i = 0; i < 10; i++) cout << i << endl;

	//Do...while igual, mas vamos ver como trabalhar com strings e receber coisas do usuario
	string chute; //Aqui, diferente de c e tal qual java, o string é objeto e n um array de caracteres
	int chuteValor = 0;
	do{
		cout << "Choose your destiny between 1 and 10" << endl;
		getline(cin, chute); //Usamos essa funcao para pegar valores da linha, dizendo que é do teclado(cin) e falando para colar no chute
		chuteValor = stoi(chute); //String to Int, transformar um string em um int
	}while(chuteValor != 4);
	cout << "You Die.. Zuera" << endl << endl;
	//Fazer isso no terminal sem acesso do adm pode fazer seu antivirus te fuder :v

	//while também é igual, mas veja como gera um número randômico dentre 1 até 100, caso seja 0 até 99, basta não somar nada
	int randNum = (rand() % 100) + 50;
	while(randNum != 50){
	cout << randNum << ',';
	randNum = (rand() % 100) + 1; //Enquanto o randomico n vier 100, vai ficar fazendo
	} 
}
//g++ -o arraysRepeticoes.exe arraysRepeticoes.cpp