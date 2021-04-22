package br.com.alura.spring.data.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.alura.spring.data.orm.FuncionarioManyToManyOneOwner;
import br.com.alura.spring.data.orm.FuncionarioProjecao;

@Repository
//Para adicionar a capacidade de paginação do banco, basta usar o repository PagingAndSortingRepository,
//para criarmos queries dinâmicas, usamos o JpaSpecificationExecutor
public interface FuncionarioRepositoryQueries extends PagingAndSortingRepository<FuncionarioManyToManyOneOwner, Integer>,
		JpaSpecificationExecutor<FuncionarioManyToManyOneOwner> {
	//	Isso aqui se chama derivative query, basicamente o spring data é capaz de montar queries com base na assinatura do
	//	metodo que você coloca no java e em seus parametros, mais sobre e as derivações que podem ser utilizadas:
	//	https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods
	List<FuncionarioManyToManyOneOwner> findByNome(String nome);

	//	Podemos fazer qualquer metodo ser paginado, desde que passemos para ele um objeto paginador
	List<FuncionarioManyToManyOneOwner> findByNome(String nome, Pageable pageable);

	//	Veja que podemos criar inclusive queries complexas, entretanto o nome do método acaba ficando muito complexo
	List<FuncionarioManyToManyOneOwner> findByNomeAndSalarioGreaterThanAndDataContratacao(String nome, Double Salario, LocalDate data);

	//	Um jeito melhor as vezes é usar o jpql, que é basicamente definir uma query usando JPQL que é defnir uma query, só que
	//	com as entidades e classes conforme nos definimos no java
	@Query("SELECT f FROM Funcionario f WHERE f.nome = :nome "
			+ "AND f.salario >= :salario AND f.dataContratacao = :data")
	List<FuncionarioManyToManyOneOwner> findNomeSalarioMaiorDataContratacao(String nome, Double salario, LocalDate data);

	//	Ao usar o nativeQuery = true, usamos exatamente a query que vai ser executada no banco de dados, veja que aqui
	//	colocamos data_contracao ao inves de dataContratacao como está no java
	@Query(value = "SELECT * FROM funcionarios f WHERE f.data_contratacao >= :data",
			nativeQuery = true)
	List<FuncionarioManyToManyOneOwner> findDataContratacaoMaior(LocalDate data);

	// Podemos definir aqui pelo spring data projeções, isso é, interfaces que tem apenas alguns valores que queremos extrair de uma consulta
	// Isso é chamado de Interface based Projection, mas poderia ser uma classe tbm do tipo dto
	@Query(value = "SELECT f.id, f.nome, f.salario FROM funcionarios f", nativeQuery = true)
	List<FuncionarioProjecao> findFuncionarioSalario();

	//	Podemos ter joins também, ou seja, relacionamentos entre tabelas, tanto em derivedQuery, quanto em jpql:
	List<FuncionarioManyToManyOneOwner> findByCargoDescricao(String descricao);

	//	Esse codigo abaixo é equivalente ao de cima
	@Query("SELECT f FROM Funcionario f JOIN f.cargo c WHERE c.descricao = :descricao")
	List<FuncionarioManyToManyOneOwner> findByCargoPelaDescricao(String descricao);
}