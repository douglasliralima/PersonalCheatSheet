#include <fstream>
#include <string>
#include <iostream>
#include <vector>
using namespace std;

int main(){
	//Basicamente aqui parece bastante similar com java, com toda a identação igual, mas aqui podemos resgatar coisas no catch
	int numero = 0;
	try{
		if(numero != 0) cout << (2/numero) << endl;
		else throw (numero);
	}catch(int numero){
		cout << "Numero igual a zero" << endl;
	}
}