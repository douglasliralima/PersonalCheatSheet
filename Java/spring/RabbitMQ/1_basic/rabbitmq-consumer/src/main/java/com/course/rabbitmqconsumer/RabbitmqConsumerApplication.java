package com.course.rabbitmqconsumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RabbitmqConsumerApplication {

	public static void main(String[] args) {
		SpringApplication.run(RabbitmqConsumerApplication.class, args);
	}

}
