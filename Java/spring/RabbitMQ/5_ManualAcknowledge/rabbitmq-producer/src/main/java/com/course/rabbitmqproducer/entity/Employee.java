package com.course.rabbitmqproducer.entity;

import java.time.LocalDate;

import com.course.rabbitmqproducer.json.CustomLocalDateSerializer;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

//Usamos oo JsonProperty para indicar  como beanamos o nosso objeto
public class Employee {

	@JsonProperty("employee_id")
	private String employeeId;

	private String name;
	
//	@JsonProperty("birth_date")
//	@JsonSerialize(using = CustomLocalDateSerializer.class)
//	private LocalDate birthDate;

	public Employee(String employeeId, String name, LocalDate birthDate) {
		super();
		this.employeeId = employeeId;
		this.name = name;
//		this.birthDate = birthDate;
	}

//	public LocalDate getBirthDate() {
//		return birthDate;
//	}

	public String getEmployeeId() {
		return employeeId;
	}

	public String getName() {
		return name;
	}

//	public void setBirthDate(LocalDate birthDate) {
//		this.birthDate = birthDate;
//	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public void setName(String name) {
		this.name = name;
	}

}
