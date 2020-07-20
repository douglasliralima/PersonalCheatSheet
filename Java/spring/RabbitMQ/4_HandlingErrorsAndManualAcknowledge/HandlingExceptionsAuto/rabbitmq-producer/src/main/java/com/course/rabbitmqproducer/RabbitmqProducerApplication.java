package com.course.rabbitmqproducer;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.course.rabbitmqproducer.entity.Picture;
import com.course.rabbitmqproducer.producer.MyPictureProducer;

@SpringBootApplication
// @EnableScheduling
public class RabbitmqProducerApplication implements CommandLineRunner {

	@Autowired
	private MyPictureProducer pictureProducer;

	private final List<String> SOURCES = List.of("mobile", "web");

	private final List<String> TYPES = List.of("jpg", "png", "svg");

	public static void main(String[] args) {
		SpringApplication.run(RabbitmqProducerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		for (int i = 0; i < 1; i++) {
			var p = new Picture();

			p.setName("Picture " + i);
			//Vamos settar uma imagem gigantona q daria erro no nosso consumer
			p.setSize(ThreadLocalRandom.current().nextLong(9001, 10001));
			p.setSource(SOURCES.get(i % SOURCES.size()));
			p.setType(TYPES.get(i % TYPES.size()));
			
			pictureProducer.sendMessage(p);
		}
	}

}
