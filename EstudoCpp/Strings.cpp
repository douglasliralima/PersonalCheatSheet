#include <fstream>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main(){
	/*Como já dito anteriormente, aqui podemos ter o string como um objeto em java, mas podemos também combinalos com
	os arrays de caracteres de C, ele é um meio termo, veja:
	*/
	char feliz[] = {'f','e','l','i','z','\0'};
	string aniversario = " aniversario";

	cout << feliz + aniversario << endl;

	//Podemos passar uma string para um double com a funcao stod(stringASerConvertida)
	string valor;
	cout << "Valor aproximado de pi: " <<  endl;
	getline(cin, valor);
	double Dvalor = stod(valor);
	if(Dvalor == 3.14) cout << "Acertou" << endl;
	else cout << "Errrrrou" << endl;

	//Podemos pegar o tamanho da string ou o número de caracteres na string
	cout << "Tamanho da string: " << valor.size() << endl;

	//Podemos ver se a string está vazia(1 se sim, 0 se não)
	cout << "String vazia?" << valor.empty() << endl;

	//Podemos concatenar strings
	cout << valor.append(" foi o seu valor") << endl;

	//Temos aquele negoci que eu nao sei pra que serve de comparar os valores do ASCII e ver quem é maior
	string dogString = "dog";
	string catString = "cat";

	cout << dogString.compare(catString) << endl; //1, pois quem chama é maior
	cout << dogString.compare(dogString) << endl; //0, pois são iguals
	cout << catString.compare(dogString) << endl; //-1, pois o do parametro é maior

	//Nós podemos copiar uma string para outra através de uma funcao, n sei se da para fazer sem
	string meunome = "Douglas Lima";
	string nomeInteiro = meunome.assign(meunome);
	cout << nomeInteiro << endl << endl;

	//Ou copiar apenas uma parte da string, passando como o string, o inicio de onde se quer e o fim do string
	string primeiroNome = meunome.assign(meunome, 0, 7);
	cout << primeiroNome << endl << endl;
	//Esse método modifica tambeém a própria string que chamou o método	
	cout << "Meu nome apos o metodo: " << meunome << endl << endl;

	//Para fazer uma buscar do endereco do começo de algo na sua string, basta dizer o que procurar e a partir de onde, respectivamente
	int UltimoIndex = nomeInteiro.find("Lima", 0);
	cout << "Index do comeco de Lima: " << UltimoIndex << endl << endl;

	//Para colocar uma certa string em um certo index da string
	meunome.insert(7, " Felizardo");
	cout << meunome << endl << endl;

	//Podemos também apagar uma certa string, informando o tamanho daquilo que quer ser apagado e a partir de onde, respec.
	meunome.erase(9, 8);
	cout << meunome << endl << endl;

	//Podemos também substituir, informando o tamanho daquilo e de onde começar e quantos caracteres serão substituidos
	meunome.replace(8, 7, "maximus");
	cout << meunome << endl << endl;
	
}
//g++ -o Strings.exe Strings.cpp
