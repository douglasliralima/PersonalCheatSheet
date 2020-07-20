package com.course.rabbitmqconsumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.util.concurrent.ThreadLocalRandom;

@Service
public class Consumer {

    private Logger log = LoggerFactory.getLogger(Consumer.class);

    //queues - Filas que a gente vai ficar escutando
    //concurrency - Numero de consumidores que serão threads que ficaro consumindo
    @RabbitListener(queues = "course.hello", concurrency = "3")
    public void consume(String message){
        log.info(Thread.currentThread().getName() + " " + message);

        // Para fazer a thread atual dormir e outro poder pegar a mensagem
        try {
            Thread.sleep(ThreadLocalRandom.current().nextLong(2000));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
