package br.com.alura.spring.data.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.alura.spring.data.orm.CargoEntityOneToMany;

@Repository
//Esse é o repository que vai ter no geral apenas as operações de salvar e atualizar(ambos pela opção save), buscar e deletar informações do banco
//Todo repository do spring precisa de dois parametros para funcionar, são eles a classe orm e qual é o tipo do id
public interface CargoSimpleRepository extends CrudRepository<CargoEntityOneToMany, Integer> {

}
