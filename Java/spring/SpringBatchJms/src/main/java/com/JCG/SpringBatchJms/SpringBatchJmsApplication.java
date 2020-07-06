package com.JCG.SpringBatchJms;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBatchJmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBatchJmsApplication.class, args);
	}

}
