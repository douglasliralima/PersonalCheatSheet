package br.com.alura.spring.data.service;

import java.util.Scanner;

import org.springframework.stereotype.Service;

import br.com.alura.spring.data.orm.CargoEntityOneToMany;
import br.com.alura.spring.data.repository.CargoSimpleRepository;

//Aqui temos o service utilizando das funções fornecidas pelo CrudRepository
@Service
public class CrudCargoService {
	
	private Boolean system = true;

//	Mesmo o repository sendo uma interface, o spring consegue criar uma classe para preencher essa interface, devido a termos
//	marcado ela como uma repository
	private final CargoSimpleRepository cargoSimpleRepository;
	
	public CrudCargoService(CargoSimpleRepository cargoSimpleRepository) {
		this.cargoSimpleRepository = cargoSimpleRepository;
	}
	
	public void inicial(Scanner scanner) {
		while(system) {
			System.out.println("Qual acao de cargo deseja executar");
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
				visualizar();
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
		System.out.println("Descricao do cargo");
		String descricao = scanner.next();
		CargoEntityOneToMany cargoEntityOneToMany = new CargoEntityOneToMany();
		cargoEntityOneToMany.setDescricao(descricao);
		cargoSimpleRepository.save(cargoEntityOneToMany);
		System.out.println("Salvo");
	}
	
	private void atualizar(Scanner scanner) {
		System.out.println("Id");
		int id = scanner.nextInt();
		System.out.println("Descricao do Cargo");
		String descricao = scanner.next();
		
		CargoEntityOneToMany cargoEntityOneToMany = new CargoEntityOneToMany();
		cargoEntityOneToMany.setId(id);
		cargoEntityOneToMany.setDescricao(descricao);
//		Essa função atualiza a instância passada, caso o id seja informado
		cargoSimpleRepository.save(cargoEntityOneToMany);
		System.out.println("Atualizado");
	}
	
	private void visualizar() {
		Iterable<CargoEntityOneToMany> cargos = cargoSimpleRepository.findAll();
		cargos.forEach(cargoEntityOneToMany -> System.out.println(cargoEntityOneToMany));
	}
	
	private void deletar(Scanner scanner) {
		System.out.println("Id");
		int id = scanner.nextInt();
		cargoSimpleRepository.deleteById(id);
		System.out.println("Deletado");
	}
	
}
