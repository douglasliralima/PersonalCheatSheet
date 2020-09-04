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
package io.spring.batch.configuration;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author Michael Minella
 */
@Configuration
public class StepTranstionConfiguration {

	@Autowired
	public JobBuilderFactory jobBuilderFactory;

	@Autowired
	public StepBuilderFactory stepBuilderFactory;

	@Bean
	public Step step1() {
		return stepBuilderFactory.get("step1")
				.tasklet(new Tasklet() {
					@Override
					public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
						System.out.println(">> This is step 1");
						return RepeatStatus.FINISHED;
					}
				}).build();
	}

	@Bean
	public Step step2() {
		return stepBuilderFactory.get("step2")
				.tasklet((contribution, chunkContext) -> {
					System.out.println(">> This is step 2");
					return RepeatStatus.FINISHED;
				}).build();
	}

	@Bean
	public Step step3() {
		return stepBuilderFactory.get("step3")
				.tasklet(new Tasklet() {
					@Override
					public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
						System.out.println(">> This is step 3");
						return RepeatStatus.FINISHED;
					}
				}).build();
	}

	// Os steps podem estar ser encadeados em qualquer ordem e inclusive repetidos
	// @Bean
	// public Job transitionJobSimpleNext() {
	// 	return jobBuilderFactory.get("transitionJobNext")
	// 			.start(step1())
	// 			.next(step2())
	// 			.next(step3())
	// 			.next(step2())
	// 			.next(step2())
	// 			.build();
	// }

	@Bean
	public Job transitionJobSimpleNext() {
		return jobBuilderFactory.get("transitionJobNext")
				.start(step1())
				//Esse on indica um BatchStatus, ele só vai iniciar o step2
				//quanto o step1 retornar completed
				.on("COMPLETED").to(step2())
				//Aqui ele indica a partir de onde vamos começar step2
				//e com o status de completed, iniciamos o step3
				// .from(step2()).on("COMPLETED").to(step3())
				//Podemos indicar quando um flow falhou
				// .from(step2()).on("COMPLETED").fail()
				//Podemos fazer um stop e reiniciar a partir de um step especifico
				.from(step2()).on("COMPLETED").stopAndRestart(step3())
				//esse end é para indicar programacionalmente o fim do flow
				.from(step3()).end()
				.build();
	}
}
