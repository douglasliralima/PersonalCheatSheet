package br.com.alura.spring.data.specification;

import java.time.LocalDate;

import org.springframework.data.jpa.domain.Specification;

import br.com.alura.spring.data.orm.FuncionarioManyToManyOneOwner;

//Para construir uma query de forma dinamica, precisamos definir essas queries dinamicamente, onde em todas elas
//vamos estar passando esse critério de builder, o nome da coluna em que aquela busca pode acontecer e o critério de busca
public class SpecificationFuncionario {

	public static Specification<FuncionarioManyToManyOneOwner> nome(String nome) {
		return (root, criteriaQuery, criteriaBuilder) -> 
			criteriaBuilder.like(root.get("nome"), "%" + nome + "%");
	}
	
	public static Specification<FuncionarioManyToManyOneOwner> cpf(String cpf) {
		return (root, criteriaQuery, criteriaBuilder) -> 
			criteriaBuilder.equal(root.get("cpf"), cpf);
	}
	
	public static Specification<FuncionarioManyToManyOneOwner> salario(Double salario) {
		return (root, criteriaQuery, criteriaBuilder) -> 
			criteriaBuilder.greaterThan(root.get("salario"), salario);
	}
	
	public static Specification<FuncionarioManyToManyOneOwner> dataContratacao(LocalDate dataContratacao) {
		return (root, criteriaQuery, criteriaBuilder) -> 
			criteriaBuilder.greaterThan(root.get("dataContratacao"), dataContratacao);
	}
	
}
