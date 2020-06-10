package com.example.batchprocessing;

import javax.sql.DataSource;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

@Configuration
@EnableBatchProcessing
public class BatchConfiguration {

    @Autowired
    public JobBuilderFactory jobBuilderFactory;
    
    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    // Veja que em todos os métodos abaixo nos criamos classes que estão já padronizadas para
    // realizarem as operações no spring batch

    // Aqui temos a definição da operação de leitura
    @Bean
    public FlatFileItemReader<Person> reader() {
    return new FlatFileItemReaderBuilder<Person>()
        .name("personItemReader")
        .resource(new ClassPathResource("sample-data.csv"))
        .delimited()
        .names(new String[]{"firstName", "lastName"})
        .fieldSetMapper(new BeanWrapperFieldSetMapper<Person>() {{
        setTargetType(Person.class);
        }})
        .build();
    }

   // De processamento, ao qual já montamos no PersonItemProcessor
    @Bean
    public PersonItemProcessor processor() {
    return new PersonItemProcessor();
    }

    //De escrita, onde inclusive realizamos uma operação SQL para salvar os dados que lemos do csv
    @Bean
    public JdbcBatchItemWriter<Person> writer(DataSource dataSource) {
    return new JdbcBatchItemWriterBuilder<Person>()
        .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
        .sql("INSERT INTO people (first_name, last_name) VALUES (:firstName, :lastName)")
        .dataSource(dataSource)
        .build();
    }
    // Parametros de definição de 1 step, primeiro nos defenimos quando objetos serão
    // processados em cada step, no caso esse chunk(10) e depois passamos o reader, processor e writer
    // que fizemos assim
    @Bean
    public Step step1(JdbcBatchItemWriter<Person> writer) {
    return stepBuilderFactory.get("step1")
        .<Person, Person> chunk(10)
        .reader(reader())
        .processor(processor())
        .writer(writer)
        .build();
    }

    // Parametros de definição do job, precisamos definir o incrementador para o ContextExecutor
    // para ele poder se recuperar em caso de merd4, depois nos passamos um notificador  personalizado 
    // que vai nos informar quando esse job acabar.
    // Finalmente dizemos os steps que aquele job precisa performar.
    @Bean
    public Job importUserJob(JobCompletionNotificationListener listener, Step step1) {
    return jobBuilderFactory.get("importUserJob")
        .incrementer(new RunIdIncrementer())
        .listener(listener)
        .flow(step1)
        .end()
        .build();
    }


}