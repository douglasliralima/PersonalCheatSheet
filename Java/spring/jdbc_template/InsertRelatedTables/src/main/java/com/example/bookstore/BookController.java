package com.example.bookstore;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BookController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping(path = "/newbook")
    public @ResponseBody String  newBook(){
        Publisher publisher = new Publisher("MANN", "Manning Publication CO");

        Book book = new Book("01023123", "Lord of the Rings", publisher);
        List<Chapter> chapters = new ArrayList<Chapter>();
        Chapter chapter1 = new Chapter("The hobbitown", 1);
        chapters.add(chapter1);
        Chapter chapter2 = new Chapter("The party", 2);
        chapters.add(chapter2);
        
        book.setChapters(chapters);

        jdbcTemplate.update("INSERT INTO publisher (code, publisher_name) VALUES (?, ?)", 
                            book.getPublisher().getCode(), book.getPublisher().getName());

        jdbcTemplate.update("INSERT INTO book (isbn, book_name, publisher_code) VALUES (?, ?, ?)",
                            book.getIsbn(), book.getName(), book.getPublisher().getCode());

        jdbcTemplate.batchUpdate("INSERT INTO chapter (book_isbn, chapter_num, title) VALUES (?, ?, ?)", 
                                new BatchPreparedStatementSetter(){
                                
                                    @Override
                                    public void setValues(PreparedStatement ps, int i) throws SQLException {
                                        ps.setString(1, book.getIsbn());
                                        ps.setInt(2, book.getChapters().get(i).getChapterNumber());
                                        ps.setString(3, book.getChapters().get(i).getChapter());
                                    }
                                
                                    @Override
                                    public int getBatchSize() {
                                        // TODO Auto-generated method stub
                                        return book.getChapters().size();
                                    }
                                });
        return "Livro anexado";
    }

    @GetMapping(path = "/teste")
    public @ResponseBody String hello(){
        return "Servidor executando";
    }   
}