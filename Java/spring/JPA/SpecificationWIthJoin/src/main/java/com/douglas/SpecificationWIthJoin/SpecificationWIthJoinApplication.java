package com.douglas.SpecificationWIthJoin;

import com.douglas.SpecificationWIthJoin.entities.Product;
import com.douglas.SpecificationWIthJoin.entities.SomeUser;
import com.douglas.SpecificationWIthJoin.repositories.ProductRepository;
import com.douglas.SpecificationWIthJoin.repositories.SomeUserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@SpringBootApplication
public class SpecificationWIthJoinApplication implements ApplicationRunner {

	private final SomeUserRepository someUserRepository;
	private final ProductRepository productRepository;
	private static final Logger logger = LoggerFactory.getLogger(SpecificationWIthJoinApplication.class);


	public SpecificationWIthJoinApplication(SomeUserRepository someUserRepository, ProductRepository productRepository){
		this.someUserRepository = someUserRepository;
		this.productRepository = productRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(SpecificationWIthJoinApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) {
		logger.info("TROOOOUUUUXA");
		Optional<SomeUser> someUser = someUserRepository.findOne(Specification.where(SpecificationJoin.userHasName("Kelly")));
		if(someUser.isPresent()){
			List<Product> thatProducts = productRepository.findAll(Specification.where(SpecificationJoin.joinTest(someUser.get())));
			thatProducts.forEach(p -> {
				logger.info(p.toString());
				SomeUser someUser1 = p.getOwner();
				logger.info(someUser1.toString());
			});
		}
	}


}
