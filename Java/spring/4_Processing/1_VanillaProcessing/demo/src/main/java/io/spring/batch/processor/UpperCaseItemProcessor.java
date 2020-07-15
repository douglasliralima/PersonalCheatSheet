package io.spring.batch.processor;

import io.spring.batch.domain.Customer;

import org.springframework.batch.item.ItemProcessor;

/**
 * Nosso ItemProcessor receberá um Customer e fornecerá um customer também
 */
public class UpperCaseItemProcessor implements ItemProcessor<Customer, Customer> {

	@Override
	public Customer process(Customer item) throws Exception {
		// Esse método pode ser chamado mais de uma vez por row, por isso é importante fazer a criação
		// única de um objeto em memória, que é único. do que a manipulação direta de dados em um 
		// nessa classe
		return new Customer(item.getId(),
				item.getFirstName().toUpperCase(),
				item.getLastName().toUpperCase(),
				item.getBirthdate());
	}
}
