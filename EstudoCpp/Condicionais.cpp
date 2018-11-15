#include <iostream>
#include <vector>
#include <string>
#include <fstream>

using namespace std;
int main(){

//Aqui temos os operadores de and &&, & ou Or |, ||, ou not !
//Também os classicos ==, >=, <=, >, <

	int idade = 30;
	int idadeMinima = 18;
	bool presenca_drogas = true;
	if( idade < idadeMinima ) cout << "Não pode dirigir- idadeMinima muito baixa" << endl;
	else if( presenca_drogas) cout << "Não pode dirigir - presença de drogas no teste" << endl;
	else cout << "Pode dirigir" << endl;

	//switch(){ case: break default: break} (switch case igual)
	//variable = (conditional) ? true : false (Ternario igual)

}
//g++ -o Condicionais.exe Condicionais.cpp