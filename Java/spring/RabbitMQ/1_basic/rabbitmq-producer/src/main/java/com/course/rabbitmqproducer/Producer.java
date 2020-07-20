package com.course.rabbitmqproducer;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Producer {

    @Autowired
    private RabbitTemplate rabbitTemplate;


    public void send (String helloMessage){
        rabbitTemplate.convertAndSend("course.hello", "hello" + helloMessage);
    }

}
