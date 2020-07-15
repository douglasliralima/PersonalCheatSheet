package com.example.demo.domain;

import java.util.Date;

import org.springframework.batch.item.ResourceAware;
import org.springframework.core.io.Resource;

//Implementamos o ResourceAware, pois ele vai nos ajudar saber
//qual arquivo estamos lendo, mas não é obrigatório
public class Customer implements ResourceAware {

	private final long id;

	private final String firstName;

	private final String lastName;

	private final Date birthdate;

	//Essa interface vai nos permitir preencher esse objeto por trás dos panos
	//a partir do reader
	private Resource resource;

	// Podemos ver aqui que ele não é nem obrigatório no construtor
	public Customer(long id, String firstName, String lastName, Date birthdate) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthdate = birthdate;
	}

	@Override
	public String toString() {
		return "Customer{" +
				"id=" + id +
				", firstName='" + firstName + '\'' +
				", lastName='" + lastName + '\'' +
				", birthdate=" + birthdate +
				", from " + resource.getDescription() +
				'}';
	}

	@Override
	public void setResource(Resource resource) {
		this.resource = resource;
	}
}
