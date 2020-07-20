package com.course.rabbitmqconsumer.consumer;

import java.io.IOException;

import com.rabbitmq.client.AMQP;
import com.rabbitmq.client.Channel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;

import com.course.rabbitmqconsumer.entity.Employee;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.boot.autoconfigure.amqp.RabbitProperties;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.stereotype.Service;

@Service
public class EmployeeJsonConsumer {

	private final ObjectMapper objectMapper = new ObjectMapper();
	private static final Logger log = LoggerFactory.getLogger(EmployeeJsonConsumer.class);


	@RabbitListener(queues = "q.teste")
	public void receive(String payload, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long tag)
			throws IOException {
		Employee emp = null;
		int i;
		try {
			emp = objectMapper.readValue(payload, Employee.class);
			System.out.println(emp);
			if(Integer.parseInt(emp.getEmployeeId()) == 3){
				System.out.println("Entru no if");
				System.exit(-1);
			}
			channel.basicAck(tag, false);
		} catch (Exception e) {
			System.out.println("DEUUU ERRROOOO *********************************");
			channel.basicReject(tag, true);
//			e.printStackTrace();
		}
	}
}
