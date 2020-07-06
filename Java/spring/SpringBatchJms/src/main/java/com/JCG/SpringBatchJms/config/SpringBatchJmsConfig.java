package com.JCG.SpringBatchJms.config;

import com.JCG.SpringBatchJms.model.Person;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.file.FlatFileItemWriter;
import org.springframework.batch.item.jms.JmsItemReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.FileSystemResource;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;
import org.springframework.jms.config.JmsListenerContainerFactory;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.support.converter.MappingJackson2MessageConverter;
import org.springframework.jms.support.converter.MessageConverter;
import org.springframework.jms.support.converter.MessageType;
 

// Tag que habilita comunicação com activeMQ via jms(java message system)
@EnableJms
// Tag que avisa ao spring que essa é uma classe de configuração e que o spring tem que fazer seus beans e amarrações
@Configuration
// Tag que avisa que essa é uma classe em que será definido o nosso processamento em batch
@EnableBatchProcessing
public class SpringBatchJmsConfig {

    public static final Logger logger = LoggerFactory.getLogger(SpringBatchJmsConfig.class.getName());
    
    @Autowired
    private JmsTemplate jmsTemplate;
 
    @Autowired
    public JobBuilderFactory jobBuilderFactory;
 
    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    //Esse método é usado para instanciar o jmsTemplate, que vamos usar para leitura e escrita de dados 
    @Bean
    public JmsListenerContainerFactory<?> queueListenerFactory() {
        DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
        factory.setMessageConverter(messageConverter());
        return factory;
    }
 
    //Esse método será responsável por criar um conversor que pega um objeto serializado e o
    //tranforma em uma string de texto 
    @Bean
    public MessageConverter messageConverter() {
        MappingJackson2MessageConverter converter = new MappingJackson2MessageConverter();
        converter.setTargetType(MessageType.TEXT);
        converter.setTypeIdPropertyName("_type");
        return converter;
    }
 
    // Aqui instanciamos um objeto do JmsItemReader falando o nosso jmsTemplate
    // e também o objeto que ele fara a conversão de leitura
    // Para o JmsItemReader, nós temos que definir um tempo em que ele ficará esperando na
    // fila por novas mensagens, ele é definido pela propriedade receive-timeout em application.yml
    @Bean
    public JmsItemReader personJmsItemReader(MessageConverter messageConverter) {
        JmsItemReader personJmsItemReader = new JmsItemReader<>();
        personJmsItemReader.setJmsTemplate(jmsTemplate);
        personJmsItemReader.setItemType(Person.class);
        return personJmsItemReader;
    }
 
 
    // Esse é um método simples de escrita que vai escrever os objetos de person e um arquivo de texto
    @Bean
    public FlatFileItemWriter personFlatFileItemWriter() {
        FlatFileItemWriter personFlatFileItemWriter = new FlatFileItemWriter<>();
        personFlatFileItemWriter.setLineAggregator(person -> person.toString());
        personFlatFileItemWriter.setLineSeparator(System.lineSeparator());
        personFlatFileItemWriter.setResource(new FileSystemResource("person.txt"));
        return personFlatFileItemWriter;
    }
 
    @Bean
    public Job importUserJob() {
        return jobBuilderFactory.get("importUserJob")
                .incrementer(new RunIdIncrementer())
                .listener(jobExecutionListener())
                .flow(step1())
                .end()
                .build();
    }
 
    private Step step1() {
        return stepBuilderFactory.get("step1")
                .<Person, Person>chunk(10)
                .reader(personJmsItemReader(messageConverter()))
                .writer(personFlatFileItemWriter())
                .build();
    }
    
    // Vamos utilizar o JobExecutionListener para antes do job começar
    // escrevermos várias pessoas na fila do activeMQ que serão consumidas para o seu processamento
    // podiamos fazer um after job, mas não será o caso
    @Bean
    public JobExecutionListener jobExecutionListener() {
        return new JobExecutionListener() {
            @Override
            public void beforeJob(JobExecution jobExecution) {
                Person[] people = {new Person("Jack", "Ryan"), new Person("Raymond", "Red"), new Person("Olivia", "Dunham"),
                        new Person("Walter", "Bishop"), new Person("Harry", "Bosch")};
                for (Person person : people) {
                    logger.info(person.toString());
                    //Aqui utilizamos internamente o conversor que definimos acima
                    jmsTemplate.convertAndSend(person);
                }
            }
 
            @Override
            public void afterJob(JobExecution jobExecution) {
 
            }
        };
    }


}