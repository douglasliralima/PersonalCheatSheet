package com.course.rabbitmqconsumer.consumer;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.AmqpRejectAndDontRequeueException;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import com.course.rabbitmqconsumer.entity.Picture;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class MyPictureImageConsumer {

	private ObjectMapper objectMapper = new ObjectMapper();
	
	private static final Logger log = LoggerFactory.getLogger(MyPictureImageConsumer.class);

	//Para lidar com erros essa fila pode usar dois argumentos que são settados na criacao da fila(n da para editar filas)
	//dead-letter-exchange - Nome do exchange que essa fila vai usar para encaminhar mensagens que lance um dead letter
	//dead-letter-routing-key - Uma nova routing-key que sera anexada as mensagens de erro, caso precise, no caso de
	//filas funout todo mundo recebe a msg, logo se a fila de erro estiver no mesmo lugar, n é necessario alterar nada
	@RabbitListener(queues = "q.mypicture.image")
	public void listen(String message) throws JsonParseException, JsonMappingException, IOException {
		var p = objectMapper.readValue(message, Picture.class);
		
		if (p.getSize() > 9000) {
			//Adicionando esse exception ele deixa essa mensagem com um dead letter e nao recoloca nessa fila
			throw new AmqpRejectAndDontRequeueException("Picture size too large : " + p);
		}
		
		log.info("On image : {}", p.toString());
	}
	
}
