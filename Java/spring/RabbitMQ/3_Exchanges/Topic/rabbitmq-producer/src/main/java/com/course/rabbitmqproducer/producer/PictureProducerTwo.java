package com.course.rabbitmqproducer.producer;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course.rabbitmqproducer.entity.Picture;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

// Em uma fila de tópicos, as mensagens são encaminhadas a partir de uma routingKey composta de uma ou mais chaves
// cada chave é separada por um '.'
// No RabbitMq, o routing pode ser feito com o * e o #
// * substitui qualquer palavra que possa ser mandada no routingkey e o # substitui uma ou mais palavras
@Service
public class PictureProducerTwo {

	@Autowired
	private RabbitTemplate rabbitTemplate;
	
	private ObjectMapper objectMapper = new ObjectMapper();
	
	public void sendMessage(Picture p) throws JsonProcessingException {
		//Classe bem legal que nos permite ir construindo a string a partir de uma listagem
		var sb = new StringBuilder();
		
		sb.append(p.getSource());
		sb.append(".");
		
		if (p.getSize() > 4000) {
			sb.append("large");
		} else {
			sb.append("small");
		}
		sb.append(".");
		
		sb.append(p.getType());
		
		var json = objectMapper.writeValueAsString(p);
		var routingKey = sb.toString();
		rabbitTemplate.convertAndSend("x.picture2", routingKey, json);
	}
	
}
