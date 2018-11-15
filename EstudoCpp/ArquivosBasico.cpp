#include <fstream>
#include <iostream>
#include <string>
#include <vector>
using namespace std;
//4 gotas 15horas
int main(){
	//-------------------Para criar------------------------------------
	string teste = "Esse e um experimento com essa linguagem que n tenho nem o q dizer";
	//Agora vamos criar um stream de output ou criar o arquivo caso ele nao exista, através dessa função(ou é objeto?)
	ofstream writer("Teste.txt");
	//Tal qualquer linguagem, vamos fazer o flerte para ver se o arquivo foi criado ou o stream ativado para poder escrever
	if(!writer){
		cout << "Nao deu pra abrir saporcaria" << endl;
		return -1;
	}
	else{
		//Para então escrever dentro e pretty easy
		writer << teste << endl;
		writer.close(); //fechamos o cano :v
	}

	//-------------------Para escrever em um já feito----------------
	//Podemos, após fechar o cano, escrever no mesmo arquivo, após aquilo que foi escrito anteriormente, fazer um append
	//Para isso basta abrir o cano e especificar o input output stream(ios), como(::), append(app)
	ofstream escritor2("Teste.txt", ios::app);

	/*
	Existe um monte de coisas para especificar no nosso cano, elas são 
	ios::binary Trata o arquivo como uma sequência de números binários
	ios::in Definição para o cano ser apenas e input
	ios::trunc default, ele é definido qndo n usamos nenhum outro comando no segundo parâmetro, só deixa o cano de boas
	ios:: out Definição para o cano ser apenas de output */
	if(!escritor2){
		cout << "Nao deu pra abrir saporcaria" << endl;
		return -1;
	}
	else{
		//Para então escrever dentro e pretty easy
		escritor2 << "\n - O programador";
		escritor2.close(); //fechamos o cano :v
	}

	//-----------------Para ler------------------
	char letra;
	ifstream leitor("Teste.txt");
	if(!leitor){
		cout << "Nao deu pra abrir saporcaria" << endl;
		return -1;
	}
	else{
		//Vamos ter que ler letra por letra em nosso arquivo
		for(int i = 0; !leitor.eof(); i++){
			leitor.get(letra); //Aqui vamos ir salvando o que tem no cabeçate atual do arquivo na variavel char letra
			cout << letra;
		}
		cout << endl;
		leitor.close();
	}
}//g++ -o ArquivosBasico.exe ArquivosBasico.cpp