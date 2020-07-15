package io.spring.batch.listener;

import org.springframework.batch.core.annotation.AfterChunk;
import org.springframework.batch.core.annotation.BeforeChunk;
import org.springframework.batch.core.scope.context.ChunkContext;

//Existe listener para tudo, itemreader, writer, job
/**
 * Podemos definir nossos listener a partir de anotações
 */
public class ChunkListener {

	@BeforeChunk
	public void beforeChunk(ChunkContext context) {
		System.out.println(">> Before the chunk");
	}

	@AfterChunk
	public void afterChunk(ChunkContext context) {
		System.out.println("<< After the chunk");
	}
}
