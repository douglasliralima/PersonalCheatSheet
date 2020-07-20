package com.course.rabbitmqproducer.producer;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.rabbitmqproducer.entity.Employee;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class EmployeeJsonProducer {

	@Autowired
	private RabbitTemplate rabbitTemplate;
	
	private ObjectMapper objectMapper = new ObjectMapper();
	
	public void sendMessage(Employee emp) {
		try {
			// Aqui temos a serialização do objeto em json usando o jackson
			var json = objectMapper.writeValueAsString(emp);
			rabbitTemplate.convertAndSend("q.teste", json);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}
	
}
