package com.example.batchprocessing;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

//Essa é uma classe processadora, a usamos para realizar o processamento dos items
//Nos implementos o processador de item, informando o objeto de entrada e outro de saída
public class PersonItemProcessor implements ItemProcessor<Person, Person> {

    // Usamos para fazer o print
    private static final Logger log = LoggerFactory.getLogger(PersonItemProcessor.class);
  
    // Tranformando lowerCase -> upperCase
    @Override
    public Person process(final Person person) throws Exception {
      final String firstName = person.getFirstName().toUpperCase();
      final String lastName = person.getLastName().toUpperCase();
  
      final Person transformedPerson = new Person(firstName, lastName);
  
      log.info("Converting (" + person + ") into (" + transformedPerson + ")");
  
      return transformedPerson;
    }
  
}