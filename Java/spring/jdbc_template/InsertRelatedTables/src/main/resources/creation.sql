create database bookstore;

use bookstore;

create table publisher(
    code varchar(5) not null,
    publisher_name varchar(40) not null,
    primary key(code)
);

create table book(
    isbn varchar(10) not null,
    book_name varchar(100) not null,
    publisher_code varchar(5) not null,
    primary key (isbn),
    foreign key (publisher_code) references publisher (code)
);

create table chapter (
    book_isbn varchar(30) not NULL,
    chapter_num INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    PRIMARY KEY (book_isbn, chapter_num),
    FOREIGN KEY (book_isbn) REFERENCES book(isbn)
);