package com.course.rabbitmqproducer;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.course.rabbitmqproducer.entity.Picture;
import com.course.rabbitmqproducer.producer.PictureProducer;

@SpringBootApplication
// @EnableScheduling
public class RabbitmqProducerApplication implements CommandLineRunner {

	@Autowired
	private PictureProducer pictureProducer;

	private final List<String> SOURCES = List.of("mobile", "web");

	private final List<String> TYPES = List.of("jpg", "png", "svg");

	public static void main(String[] args) {
		SpringApplication.run(RabbitmqProducerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//Só um for que vai criar 10 imagens com propriedades diferentes no type e source
		for (int i = 0; i < 10; i++) {
			var p = new Picture();

			p.setName("Picture " + i);
			p.setSize(ThreadLocalRandom.current().nextLong(1, 10001));
			p.setSource(SOURCES.get(i % SOURCES.size()));
			p.setType(TYPES.get(i % TYPES.size()));
			
			pictureProducer.sendMessage(p);
		}
	}

}
