package io.spring.batch.domain;

import org.springframework.batch.item.ItemProcessor;

/**
 * Para filtrar um item, é só retornar null no ItemProcessor que ele
 * pula automático
 */
public class FilteringItemProcessor implements ItemProcessor<Customer, Customer> {
	@Override
	public Customer process(Customer item) throws Exception {

		if(item.getId() % 2 == 0) {
			return null;
		}
		else {
			return item;
		}
	}
}
