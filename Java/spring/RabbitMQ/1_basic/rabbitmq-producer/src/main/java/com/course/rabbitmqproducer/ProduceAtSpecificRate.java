package com.course.rabbitmqproducer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class ProduceAtSpecificRate {

    private int i = 0;

    private Logger log = LoggerFactory.getLogger(ProduceAtSpecificRate.class);

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Scheduled(fixedRate = 500)
    public void send(){
        log.info("Producting: " + i);
        rabbitTemplate.convertAndSend("course.hello", "Message " + i);
        i++;
    }

}
