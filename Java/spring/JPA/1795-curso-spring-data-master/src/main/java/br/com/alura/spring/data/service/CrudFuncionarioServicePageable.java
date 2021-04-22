package br.com.alura.spring.data.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.com.alura.spring.data.orm.CargoEntityOneToMany;
import br.com.alura.spring.data.orm.FuncionarioManyToManyOneOwner;
import br.com.alura.spring.data.orm.UnidadeTrabalho;
import br.com.alura.spring.data.repository.CargoSimpleRepository;
import br.com.alura.spring.data.repository.FuncionarioRepositoryQueries;
import br.com.alura.spring.data.repository.UnidadeTrabalhoRepository;

@Service
public class CrudFuncionarioServicePageable {

	private Boolean system = true;
	private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
	
	private final CargoSimpleRepository cargoSimpleRepository;
	private final FuncionarioRepositoryQueries funcionarioRepositoryQueries;
	private final UnidadeTrabalhoRepository unidadeTrabalhoRepository;
	
	
	public CrudFuncionarioServicePageable(FuncionarioRepositoryQueries funcionarioRepositoryQueries,
										  CargoSimpleRepository cargoSimpleRepository, UnidadeTrabalhoRepository unidadeTrabalhoRepository) {
		this.cargoSimpleRepository = cargoSimpleRepository;
		this.funcionarioRepositoryQueries = funcionarioRepositoryQueries;
		this.unidadeTrabalhoRepository = unidadeTrabalhoRepository;
	}
	
	public void inicial(Scanner scanner) {
		while(system) {
			System.out.println("Qual acao de funcionario deseja executar");
			System.out.println("0 - Sair");
			System.out.println("1 - Salvar");
			System.out.println("2 - Atualizar");
			System.out.println("3 - Visualizar");
			System.out.println("4 - Deletar");
			
			int action = scanner.nextInt();
			
			switch (action) {
			case 1:
				salvar(scanner);
				break;
			case 2:
				atualizar(scanner);
				break;
			case 3:
				visualizar(scanner);
				break;
			case 4:
				deletar(scanner);
				break;
			default:
				system = false;
				break;
			}
			
		}
		
	}
	
	private void salvar(Scanner scanner) {
		System.out.println("Digite o nome");
        String nome = scanner.next();

        System.out.println("Digite o cpf");
        String cpf = scanner.next();

        System.out.println("Digite o salario");
        Double salario = scanner.nextDouble();

        System.out.println("Digite a data de contracao");
        String dataContratacao = scanner.next();

        System.out.println("Digite o cargoId");
        Integer cargoId = scanner.nextInt();

        List<UnidadeTrabalho> unidades = unidade(scanner);

        FuncionarioManyToManyOneOwner funcionarioManyToManyOneOwner = new FuncionarioManyToManyOneOwner();
        funcionarioManyToManyOneOwner.setNome(nome);
        funcionarioManyToManyOneOwner.setCpf(cpf);
        funcionarioManyToManyOneOwner.setSalario(salario);
        funcionarioManyToManyOneOwner.setDataContratacao(LocalDate.parse(dataContratacao, formatter));
        Optional<CargoEntityOneToMany> cargo = cargoSimpleRepository.findById(cargoId);
        funcionarioManyToManyOneOwner.setCargo(cargo.get());
        funcionarioManyToManyOneOwner.setUnidadeTrabalhos(unidades);

        funcionarioRepositoryQueries.save(funcionarioManyToManyOneOwner);
        System.out.println("Salvo");
	}
	
	private List<UnidadeTrabalho> unidade(Scanner scanner) {
        Boolean isTrue = true;
        List<UnidadeTrabalho> unidades = new ArrayList<>();

        while (isTrue) {
            System.out.println("Digite o unidadeId (Para sair digite 0)");
            Integer unidadeId = scanner.nextInt();

            if(unidadeId != 0) {
                Optional<UnidadeTrabalho> unidade = unidadeTrabalhoRepository.findById(unidadeId);
                unidades.add(unidade.get());
            } else {
                isTrue = false;
            }
        }

        return unidades;
    }
	
	private void atualizar(Scanner scanner) {
		System.out.println("Digite o id");
        Integer id = scanner.nextInt();

        System.out.println("Digite o nome");
        String nome = scanner.next();

        System.out.println("Digite o cpf");
        String cpf = scanner.next();

        System.out.println("Digite o salario");
        Double salario = scanner.nextDouble();

        System.out.println("Digite a data de contracao");
        String dataContratacao = scanner.next();

        System.out.println("Digite o cargoId");
        Integer cargoId = scanner.nextInt();

        FuncionarioManyToManyOneOwner funcionarioManyToManyOneOwner = new FuncionarioManyToManyOneOwner();
        funcionarioManyToManyOneOwner.setId(id);
        funcionarioManyToManyOneOwner.setNome(nome);
        funcionarioManyToManyOneOwner.setCpf(cpf);
        funcionarioManyToManyOneOwner.setSalario(salario);
        funcionarioManyToManyOneOwner.setDataContratacao(LocalDate.parse(dataContratacao, formatter));
        Optional<CargoEntityOneToMany> cargo = cargoSimpleRepository.findById(cargoId);
        funcionarioManyToManyOneOwner.setCargo(cargo.get());

        funcionarioRepositoryQueries.save(funcionarioManyToManyOneOwner);
        System.out.println("Alterado");
	}
	
	private void visualizar(Scanner scanner) {
		System.out.println("Qual pagina voce deseja visualizar");
		Integer page = scanner.nextInt();
//		Para fazer a paginação, criamos esse objeto da pagina, que vai informar como essa paginação acontece
//		Podemos definir a forma que ela vai ser ordenada a paritr desse objeto passado, inclusive se ele vai ser não ordenado
//		Aqui no caso estamos ordenando pelo nome de forma ascendente
		Pageable pageable = PageRequest.of(page, 5, Sort.by(Sort.Direction.ASC, "nome"));
		Page<FuncionarioManyToManyOneOwner> funcionarios = funcionarioRepositoryQueries.findAll(pageable);

		//Um objeto do tipo página nós trás métodos úteis para podermos servir ao cliente
		System.out.println(funcionarios);
		System.out.println("Pagina atual " + funcionarios.getNumber());
		System.out.println("Total elemento " + funcionarios.getTotalElements());
		funcionarios.forEach(funcionario -> System.out.println(funcionario));
	}
	
	private void deletar(Scanner scanner) {
		System.out.println("Id");
		int id = scanner.nextInt();
		funcionarioRepositoryQueries.deleteById(id);
		System.out.println("Deletado");
	}
	
}
