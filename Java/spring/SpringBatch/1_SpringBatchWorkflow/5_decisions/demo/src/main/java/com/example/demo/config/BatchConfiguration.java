package com.example.demo.config;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.job.flow.FlowExecutionStatus;
import org.springframework.batch.core.job.flow.JobExecutionDecider;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BatchConfiguration {

	@Autowired
	private JobBuilderFactory jobBuilderFactory;

	@Autowired
	private StepBuilderFactory stepBuilderFactory;

	@Bean
	public Step startStep() {
		return stepBuilderFactory.get("startStep")
				.tasklet((contribution, chunkContext) -> {
					System.out.println("This is the start tasklet");
					return RepeatStatus.FINISHED;
				}).build();
	}

	@Bean
	public Step evenStep() {
		return stepBuilderFactory.get("evenStep")
				.tasklet((contribution, chunkContext) -> {
					System.out.println("This is the even tasklet");
					return RepeatStatus.FINISHED;
				}).build();
	}

	@Bean
	public Step oddStep() {
		return stepBuilderFactory.get("oddStep")
				.tasklet((contribution, chunkContext) -> {
					System.out.println("This is the odd tasklet");
					return RepeatStatus.FINISHED;
				}).build();
	}

	@Bean
	public JobExecutionDecider decider() {
		return new OddDecider();
	}

	@Bean
	public Job job() {
		return jobBuilderFactory.get("job")
				.start(startStep())
				.next(decider())
				.from(decider()).on("ODD").to(oddStep())
				.from(decider()).on("EVEN").to(evenStep())
				//Isso aqui quer dizer que independente do status que vier
				//executaremos o decider
				.from(oddStep()).on("*").to(decider())
				//Essas duas linhas não são necessárias, pois ao irmos para o decider
				//voltamos ao começo, como um loop
//				.from(decider()).on("ODD").to(oddStep())
//				.from(decider()).on("EVEN").to(evenStep())
				.end()
				.build();
	}

	// Para fazer as decisões, precisamos implementar a classe JobExecutionDecider
	public static class OddDecider implements JobExecutionDecider {

		private int count = 0;

		// Esse ExecutionStep é o do último passo que foi executado
		// Antes de passarmos esse objeto decider
		@Override
		public FlowExecutionStatus decide(JobExecution jobExecution, StepExecution stepExecution) {
			count++;

			if(count % 2 == 0) {
				return new FlowExecutionStatus("EVEN");
			}
			else {
				return new FlowExecutionStatus("ODD");
			}
		}
	}
}
