package io.spring.batch.domain;

import org.springframework.batch.item.validator.ValidationException;
import org.springframework.batch.item.validator.Validator;

/**
 * @author Michael Minella
 */
public class CustomerValidator implements Validator<Customer> {

	// Esse validate usa o sistema de exceções do Java, caso tenha dado problema
	// Caso esteja tudo certo, não precisamos fazer nada
	@Override
	public void validate(Customer value) throws ValidationException {
		if(value.getFirstName().startsWith("A")) {
			throw new ValidationException("First names that begin with A are invalid: " + value);
		}
	}
}
