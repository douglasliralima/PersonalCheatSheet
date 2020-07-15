package com.example.demo.configuration;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import com.example.demo.domain.Customer;
import com.example.demo.domain.CustomerRowMapper;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.database.JdbcPagingItemReader;
import org.springframework.batch.item.database.Order;
import org.springframework.batch.item.database.support.MySqlPagingQueryProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author Michael Minella
 */
@Configuration
public class JobConfiguration {

	@Autowired
	public JobBuilderFactory jobBuilderFactory;

	@Autowired
	public StepBuilderFactory stepBuilderFactory;

	@Autowired
	public DataSource dataSource;

	// Esse é o jeito mais fácil de fazer a leitura de dados, apenas
	// precisamos definir uma query, passar o objeto de data source e o
	// nosso rowmapper, mas ele n é seguro para multithread, pois podemos
	// acabar com problemas na hora de usar esse cursor compartilhado por
	// vários threads

	// @Bean
	// public JdbcCursorItemReader<Customer> cursorItemReader() {
	// 	JdbcCursorItemReader<Customer> reader = new JdbcCursorItemReader<>();

	// Fazer uma query ordenada é super importante para restartabilidade
	// pois assim podemos garantir o recomeço a partir de um mesmo ponto
	// 	reader.setSql("select id, firstName, lastName, birthdate from customer order by lastName, firstName");
	// 	reader.setDataSource(this.dataSource);
	// 	reader.setRowMapper(new CustomerRowMapper());

	// 	return reader;
	// }
	
	//Método de leitura thread safe feito por paginação
	@Bean
	public JdbcPagingItemReader<Customer> pagingItemReader() {
		JdbcPagingItemReader<Customer> reader = new JdbcPagingItemReader<>();

		reader.setDataSource(this.dataSource);
		//Quantas rows estão presentes em cada pagina
		//O melhor é ela ser do tamanho do seu chunck size
		reader.setFetchSize(10);
		reader.setRowMapper(new CustomerRowMapper());

		//Como faremos query por paginação, pedimos ao spring boot cuidar
		//disso para a gente, existe um objeto para cada tipo de banco, aqui
		//estamos usando o mysql
		MySqlPagingQueryProvider queryProvider = new MySqlPagingQueryProvider();
		queryProvider.setSelectClause("id, firstName, lastName, birthdate");
		queryProvider.setFromClause("from customer");

		//Criamos o id como key de sort para ele ser totalmente único em cada row
		Map<String, Order> sortKeys = new HashMap<>(1);

		sortKeys.put("id", Order.ASCENDING);

		queryProvider.setSortKeys(sortKeys);

		reader.setQueryProvider(queryProvider);

		return reader;
	}

	@Bean
	public ItemWriter<Customer> customerItemWriter() {
		return items -> {
			for (Customer item : items) {
				System.out.println(item.toString());
			}
		};
	}

	@Bean
	public Step step1() {
		return stepBuilderFactory.get("step1")
				.<Customer, Customer>chunk(10)
				.reader(pagingItemReader())
				.writer(customerItemWriter())
				.build();
	}

	@Bean
	public Job job() {
		return jobBuilderFactory.get("job")
				.start(step1())
				.build();
	}
}
