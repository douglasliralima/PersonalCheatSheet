package br.com.alura.spring.data.orm;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//Com essa tag, sinalizamos ao spring data que essa classe é uma entidade
@Entity
//Com essa tag, podemos especificar melhor certar propriedades da nossa tabela, como o nome, ao invés de cargo, ser cargoS
@Table(name = "cargos")
public class CargoEntityOneToMany {

//	Essa sinaliza que esse atributo é o atributo que iremos usar para o controle da entidade
	@Id
//	Essa tag é para realiar a geração automática desse campo, passando identity ele vai fazer de forma sequencial
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String descricao;

//	Um cargo pode ser compartilhado por vários funcionários
	@OneToMany(mappedBy = "cargo")
	private List<FuncionarioManyToManyOneOwner> funcionarioManyToManyOneOwner;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	@Override
	public String toString() {
		return "Cargo [id=" + id + ", descricao=" + descricao + "]";
	}

}