#include <fstream>
#include <string>
#include <iostream>
#include <vector>
using namespace std;

class Animal{

	protected: //Nos definimos um escopo como protected, tudo o que estiver embaixo fica privado para aquela classe e suas subs
		int peso;
		int altura;
		string nome;
		static int idAnimal; //Aqui o static trabalha igual que java
		static int numAnimais;
	public://Definimos o escopo publico, aqui vão os metódos que usarão os atributos do objeto
		int getAltura(){ return altura; }
		int getPeso(){ return peso; }
		string getNome(){return nome; }
		void setAltura(int altura){
			//O this aqui serve para referenciar algo especifico daquela classe
			this -> altura = altura; }
		void setPeso(int peso){ this ->peso = peso; }
		void setNome(string nome){ this -> nome = nome; }

		//Temos também aqui o construtor, ele funciona igualzinho a java, mas antes de o ver igual
		//vamos olhar para ele como um prototipo
		Animal(int, int, string); //Prototipo do construtor
		//Aqui temos também um descontrutor(?), ele é sinalizado com um tiozinho na frente
		~Animal();
		Animal(); //Esse aqui é o contrutor vazio, ele está overlodando o construtor parametrizado
		void setAll(int, int , string); //Isso é uma função prototipo

		//Temos também os métodos estáticos, apenas lembrando, eles são métodos vinculado a toda a classe e n um objeto especifico
		static int NumAnimais(){return numAnimais; }
		void toString(); //Outro prótótipo, que em teoria vai nos dar todas as informações daquele objeto.
};//Precisamos fechar com o ponto e virgula, escrotiinho

    //Podemos parametrizar atributos e classes protótipo de uma classe, em nossa classe main, colocando seu cabeçãlho completo
    //com o tipo de dado, identificador e atributos.

	//Para acessar diretamente os atributos estáticos de uma classe, usamos seu identificador seguido dos dois pontos
	int Animal::numAnimais = 0;

	/*Nos podemos implementar um método protótipo da  classe, aqui, desse jeito
	void Animal::setAll(int altura, int peso, string){
		this -> altura = altura;
		this -> peso = peso;
		Animal::numAnimais++;
	} */

	//Basicamente ele só está definindo o construtor do método
	Animal::Animal(int altura, int peso, string nome){
		this -> altura = altura;
		this -> peso = peso;
		this -> nome = nome;
		Animal::numAnimais++;
	}

	//Esse método é chamado para destruir aquele objeto :o
	Animal::~Animal(){
		cout << "O " << this -> nome << " foi destruido" << endl;
	}

	Animal::Animal(){
		Animal::numAnimais++;
	}
void Animal::toString(){
		cout << this -> nome << " possui a altura: " <<
		this -> altura << " e o peso: " << this -> peso << endl;
	}

//Herança, para fazer uma classe herdar os atributos e métodos de uma anterior, basta seguir

class Dog : public Animal{
private:
    string sound = "woof";
public:
    string dogSays(){
        return sound;
    }
    //Vamos definir o construtor como protótipo, pois sua classe assim também o faz
    Dog(int, int, string, string);
    void toString();
};

//Veja, aqui eu estou definindo o protótipo, chamando o construtor de sua super classe para usar os codigos dela, mas
//Vamos especializar esse método para definir também o som que o cachorro faz
Dog::Dog(int altura, int peso, string nome, string latido) : Animal(altura, peso, nome){
this -> sound = latido;
}

//Veja, por aqui não chamar a superclasse, nos substituimos inteiramente o método da super
void Dog::toString(){
    cout << this -> nome << " possui a altura: " <<
		this -> altura << " e o peso: " << this -> peso <<
		"\nwhat the dog says? " << this -> sound << endl;
}

int main(){
	//Agora sim, vamos declarar uma classe e usa-la
	Animal leao;
	leao.setAltura(150);
	leao.setPeso(100);
	leao.setNome("Alex");

	leao.toString();

	Animal zebra(150, 100, "Martim");
	zebra.toString();

	Dog bethoveen(50, 30, "Douglas", "Tawara, me da atencao!");
	bethoveen.toString();
	bethoveen.Animal::toString(); //Acessar um método de sua super classe
	cout << "\n\n Numero de animais que foram criados: " << Animal::NumAnimais() << endl;
	return 0;
}//g++ -o Classes.exe Classes.cpp





