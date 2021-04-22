package br.com.alura.spring.data.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Scanner;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import br.com.alura.spring.data.orm.FuncionarioManyToManyOneOwner;
import br.com.alura.spring.data.repository.FuncionarioRepositoryQueries;
import br.com.alura.spring.data.specification.SpecificationFuncionario;

@Service
public class RelatorioFuncionarioDinamico {

	private final FuncionarioRepositoryQueries funcionarioRepositoryQueries;
	
	private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

	public RelatorioFuncionarioDinamico(FuncionarioRepositoryQueries funcionarioRepositoryQueries) {
		this.funcionarioRepositoryQueries = funcionarioRepositoryQueries;
	}

//	Veja que para fazer a query de forma dinamica, podemos simplesmente ir fazendo algumas validações básicas deixando null o que a gente não vai usar
//	então ele vai entender que, tudo o que tiver null, não é para entrar em nossa query
	public void inicial(Scanner scanner) {
		System.out.println("Digite o nome");
		String nome = scanner.next();
		
		if(nome.equalsIgnoreCase("NULL")) {
			nome = null;
		}
		
		System.out.println("Digite o cpf");
		String cpf = scanner.next();
		
		if(cpf.equalsIgnoreCase("NULL")) {
			cpf = null;
		}
		
		System.out.println("Digite o Salario");
		Double salario = scanner.nextDouble();
		
		if(salario == 0) {
			salario = null;
		}
		
		System.out.println("Digite o data de contratacao");
		String data = scanner.next();
		
		LocalDate dataContratacao;
		if(data.equalsIgnoreCase("NULL")) {
			dataContratacao = null;
		} else {
			dataContratacao = LocalDate.parse(data, formatter);
		}

	//		E no final usar a especificação que criamos para cada parametro dinamico que queremos buscar
		List<FuncionarioManyToManyOneOwner> funcionarioManyToManies = funcionarioRepositoryQueries.findAll(Specification
				.where(
						SpecificationFuncionario.nome(nome))
						.or(SpecificationFuncionario.cpf(cpf))
						.or(SpecificationFuncionario.salario(salario))
						.or(SpecificationFuncionario.dataContratacao(dataContratacao))
				);
		funcionarioManyToManies.forEach(System.out::println);
	}
	
}
