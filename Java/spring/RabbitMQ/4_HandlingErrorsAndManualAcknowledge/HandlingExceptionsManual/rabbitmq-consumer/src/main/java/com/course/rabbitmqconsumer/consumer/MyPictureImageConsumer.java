package com.course.rabbitmqconsumer.consumer;

import java.io.IOException;

import com.rabbitmq.client.Channel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.AmqpRejectAndDontRequeueException;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import com.course.rabbitmqconsumer.entity.Picture;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

//Precisamos modificar o application.yml para funcionar no modo manual
@Service
public class MyPictureImageConsumer {

	private ObjectMapper objectMapper = new ObjectMapper();
	
	private static final Logger log = LoggerFactory.getLogger(MyPictureImageConsumer.class);

	//Para lidar com erros essa fila pode usar dois argumentos que são settados na criacao da fila(n da para editar filas)
	//dead-letter-exchange - Nome do exchange que essa fila vai usar para encaminhar mensagens que lance um dead letter
	//dead-letter-routing-key - Uma nova routing-key que sera anexada as mensagens de erro, caso precise, no caso de
	//filas funout todo mundo recebe a msg, logo se a fila de erro estiver no mesmo lugar, n é necessario alterar nada
	@RabbitListener(queues = "q.mypicture.image")
	public void listen(Message message, Channel channel)
			throws JsonParseException, JsonMappingException, IOException {
		//Como estamos pegando a mensagem inteira, pprecisamos manualmente pegar a string pelo getBody
		var p = objectMapper.readValue(message.getBody(), Picture.class);

		if (p.getSize() > 9000) {
			//O Reject nos fazemos dentro do nosso canal de comunicação, passando a tag de comunicaço e
			//se aquela mensagem deve ou nao ser reempilhada no caso de um dlx
			channel.basicReject(message.getMessageProperties().getDeliveryTag(), false);
		}

		log.info("On image : {}", p.toString());
		//Como estamos no modo manual, precisamos dar o ack na mao caso de tudo certo
		channel.basicAck(message.getMessageProperties().getDeliveryTag(), false);
	}
	
}
