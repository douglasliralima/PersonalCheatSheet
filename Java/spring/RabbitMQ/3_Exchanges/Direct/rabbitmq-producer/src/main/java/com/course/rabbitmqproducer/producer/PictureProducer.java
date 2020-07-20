package com.course.rabbitmqproducer.producer;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.rabbitmqproducer.entity.Picture;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PictureProducer {

	@Autowired
	private RabbitTemplate rabbitTemplate;
	
	private ObjectMapper objectMapper = new ObjectMapper();
	
	public void sendMessage(Picture p) throws JsonProcessingException {
		var json = objectMapper.writeValueAsString(p);
		//Toda fila direct precisa que passamos uma chave correspondente para ela depositar nossa mensagem em uma
		//fila correspondente, caso a key n corresponda a nenhuma fila, por default ela é descartada
		rabbitTemplate.convertAndSend("x.picture", p.getType(), json);
	}
	
}
