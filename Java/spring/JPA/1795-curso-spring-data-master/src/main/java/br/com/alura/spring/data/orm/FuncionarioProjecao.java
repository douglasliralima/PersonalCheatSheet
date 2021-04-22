package br.com.alura.spring.data.orm;

public interface FuncionarioProjecao {
//	Veja que essa interface tem apenas os métodos de get com os valores que vamos querer da query
	Integer getId();
	String getNome();
	Double getSalario();
}
