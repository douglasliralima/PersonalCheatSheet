#include <iostream>
#include <string>
#include <fstream>
#include <vector>
using namespace std;

int main(){
	const double PI = 3.1415926535; //Podemos criar variaveis constantes aqui
	char letra = 'd';
	bool tentanto = true; //Sim, temos boolean em c++
	int nivel = 8001;
	float flutuante = 0.1;
	//Temos também as variações short, long, long long e unsigned para eles
	cout << "Valor de PI: " << PI << endl;
	//O comando sizeof também existe aqui e veja como o << parece o + do Java que faz a concatenação, podendo realizar a quebra
	cout << "Valor do Double: " << sizeof(PI) << endl << "Valor de qualquer char:" 
	<< sizeof(char) << endl <<endl;

	//Aqui as variaveis de operadores sao iguais
	//+,-,*,/,%,++,--, +=, -=...
	//Ao fazer operações dentro do print é melhor deixar tudo em seu cout
	//Por algum motivo quando eu fiz tudo dentro de apenas 1, bugou
	int c = 5;
	cout << "5++ = " << c++ << endl;
	cout << "++5 = " << ++c << endl;
	cout << "5-- = " << c-- << endl;
	cout << "--5 = " << --c << endl << endl;

	//Temos também o efeito de casting aqui e ignorar aquilo que n é seu tipo
	cout << "4/5= " << 4/5 << endl;
	cout << "4/5= " << (float) 4/5 << endl;
	return 0;
}

//g++ -o variaveis.exe variaveis.cpp
//Para abrir o terminal de programa onde vc está segure o shift e clique com o botão direito na pasta