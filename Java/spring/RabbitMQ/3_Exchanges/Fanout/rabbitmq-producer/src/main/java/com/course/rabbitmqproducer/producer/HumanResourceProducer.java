package com.course.rabbitmqproducer.producer;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.rabbitmqproducer.entity.Employee;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class HumanResourceProducer {

	@Autowired
	private RabbitTemplate rabbitTemplate;
	
	private ObjectMapper objectMapper = new ObjectMapper();
	
	public void sendMessage(Employee emp) {
		try {
			var json = objectMapper.writeValueAsString(emp);
//			Para mandar no estilo fanout, basta dizer uma exchange e não especificar nenhuma routingKey
//			Assim todas as filas beanadas no exchange vâo receber a msg
			rabbitTemplate.convertAndSend("x.hr", "", json);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}
	
}
