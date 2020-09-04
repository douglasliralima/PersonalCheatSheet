/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.example.demo.config;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.job.builder.FlowBuilder;
import org.springframework.batch.core.job.flow.Flow;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.SimpleAsyncTaskExecutor;

@Configuration
public class BatchConfiguration {

	@Autowired
	private JobBuilderFactory jobBuilderFactory;

	@Autowired
	private StepBuilderFactory stepBuilderFactory;

	@Bean
	public Tasklet tasklet() {
		return new CountingTasklet();
	}

	//Definição do flow 1
	@Bean
	public Flow flow1() {
		return new FlowBuilder<Flow>("flow1")
				.start(stepBuilderFactory.get("step1")
						.tasklet(tasklet()).build())
				.build();
	}

	//Definição do flow 2
	@Bean
	public Flow flow2() {
		return new FlowBuilder<Flow>("flow2")
				.start(stepBuilderFactory.get("step2")
						.tasklet(tasklet()).build())
				.next(stepBuilderFactory.get("step3")
						.tasklet(tasklet()).build())
				.build();
	}

	//Temos um job então que será esses dois flows rodando em paralelo
	@Bean
	public Job job() {
		return jobBuilderFactory.get("job")
				.start(flow1())
				//Para rodar em paralelo usamos o split, passamos então para ele um
				//Executor asynchrono, e adicionamos todos os flows que vão rodar em paralelo a onde
				//ele splitou, nesse caso, só 1
				.split(new SimpleAsyncTaskExecutor()).add(flow2())
				.end()
				.build();
	}

	//Esse vai ser o Tasklet simples que vamos rodar em paralelo
	//Ele simplesmente vai pegar o nome do step e a thread e printar na tela
	public static class CountingTasklet implements Tasklet {

		@Override
		public RepeatStatus execute(StepContribution stepContribution, ChunkContext chunkContext) throws Exception {
			System.out.println(String.format("%s has been executed on thread %s", chunkContext.getStepContext().getStepName(), Thread.currentThread().getName()));
			return RepeatStatus.FINISHED;
		}
	}
}
