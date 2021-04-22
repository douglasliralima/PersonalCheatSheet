package br.com.alura.spring.data.orm;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "funcionarios")
public class FuncionarioManyToManyOneOwner {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private String cpf;
	private Double salario;
	private LocalDate dataContratacao;

//	Relacionamento N-1, ou seja, varios funcionários estão relacionados a apenas 1 cargo
	@ManyToOne
//	Aqui estamos definido por qual coluna essa associação vai acontecer
	@JoinColumn(name = "cargo_id", nullable = false)
	private CargoEntityOneToMany cargoEntityOneToMany;

	@Fetch(FetchMode.SELECT)
//	Denotação do relacionamento N-N, nele nos na verdade temos relacionamentos [Entidade 1-N (tabela de join) N-1 Entidade]
//	Aqui, em alguma das entidades, precisamos definir a tabela de join, sendo o joinTable a tabela dominante, ou seja, quem vai
//	ser definida primeiro, como join column e a inverse join column, como a dominada, ou seja, quem vai ter seus valores associados
//	adicionados na relação da dominante
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "funcionarios_unidades", joinColumns = {
			@JoinColumn(name = "fk_funcionario") }, 
	inverseJoinColumns = { @JoinColumn(name = "fk_unidade") })
	private List<UnidadeTrabalho> unidadeTrabalhos;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Double getSalario() {
		return salario;
	}

	public void setSalario(Double salario) {
		this.salario = salario;
	}

	public LocalDate getDataContratacao() {
		return dataContratacao;
	}

	public void setDataContratacao(LocalDate dataContratacao) {
		this.dataContratacao = dataContratacao;
	}

	public CargoEntityOneToMany getCargo() {
		return cargoEntityOneToMany;
	}

	public void setCargo(CargoEntityOneToMany cargoEntityOneToMany) {
		this.cargoEntityOneToMany = cargoEntityOneToMany;
	}

	public List<UnidadeTrabalho> getUnidadeTrabalhos() {
		return unidadeTrabalhos;
	}

	public void setUnidadeTrabalhos(List<UnidadeTrabalho> unidadeTrabalhos) {
		this.unidadeTrabalhos = unidadeTrabalhos;
	}

	@Override
	public String toString() {
		return "Funcionario: " + "id:" + id + "| nome:'" + nome + "| cpf:" + cpf + "| salario:" + salario
				+ "| dataContratacao:" + dataContratacao + "| cargo:" + cargoEntityOneToMany.getDescricao();
	}
}
