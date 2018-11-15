#include <fstream>
#include <string>
#include <iostream>
#include <vector>
using namespace std;

class Animal{
	public:
		void nos(){
			cout << "Somos todos classes |o/" << endl;
		}
		virtual void identificador(){  //Caso queiramos acessar o método sobrescrito pela classe do objeto passado, ele precisa ter virtual
			cout << "Somos os animais" << endl;
		}

};

class Dog : public Animal{
public:
	void identificador(){
		cout << "Somos as cachorra" << endl;
	}
};

//Podemos aqui pegar os objetos de nossas classes e passa-los em funções
void qualSuaClasse(Animal * animal){
	animal->identificador();
}

int main(){
//Caso declaremos as classes como ponteiros, elas ficam muuito similares com o que temos em Java

	Animal * animais = new Animal;
	Dog *cachorrao = new Dog;

	qualSuaClasse(animais);
	qualSuaClasse(cachorrao);
	//Outra coisa legal que se pode fazer são ponteiros para as classes chamarem os métodos corretos
	Dog bethoveen;
	Animal * ptrCa = &bethoveen;
	ptrCa->nos(); //Como nada foi sobrescrito, vai pegar o do pai
	ptrCa->identificador();
}//g++ -o OutroJeitoClasses.exe OutroJeitoClasses.cpp