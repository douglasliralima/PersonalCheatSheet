package com.helloworld.helloworld.config;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableBatchProcessing
public class JobConfiguration {

    @Autowired
    private JobBuilderFactory jobBuilderFactory;

    @Autowired
    private StepBuilderFactory stepBuilderFactory;

    @Bean
    public Step step(){
        return stepBuilderFactory.get("PrimeiroStep")
        .tasklet(
            // Existem dois tipos de objetos de steps, 
            // os que são baseados em uma tarefa arbitrária e 
            // os baseados no processamaento de imputs(chunks) que seguem etapa
            // de read, process(optional) e write
            new Tasklet() {
            @Override
            //Apertar control e ver os tipos de repeat status que podemos retornar
			public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
				System.out.println("Hello world");
				return RepeatStatus.FINISHED;
			}
        })
        .build();
    }
    
    @Bean
    public Job job(){
        return jobBuilderFactory.get("TrabalhoDeHello")
        .start(step())
        .build();
    }
}