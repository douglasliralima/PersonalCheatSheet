--Nos podemos criar um banco de dados bem fácil
CREATE DATABASE databasename;

--Podemos deletar esse mesmo banco facilmente tbm
DROP DATABASE databasename;

--É importante sempre ir fazendo o beckup do bd, pq se algum estágiario deletar, n foder tudo
BACKUP DATABASE databasename TO DISK = 'D:\backups\testDB.bak';

--Caso queira armazenar apenas as diferenças entre o BD e um ultimo beckup, usamos WITH DIFFERENTIAL
BACKUP DATABASE databasename TO DISK = 'D:\backups\testDB.bak' WITH DIFFERENTIAL;

--CREATE TABLE - Usada para criar uma nova tabela em um banco de dados.
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255) 
);

--Podemos criar uma tabela a partir das instâncias já presentes em outra tabela com
CREATE TABLE TestTable AS
SELECT customername, contactname
FROM customers;

--Para deletar uma tablea, usamos o drop tbm, só que para table
DROP TABLE TestTable;

--TRUNCATE TABLE - É usado para excluir os dados dentro de uma tabela, mas não a própria tabela
TRUNCATE TABLE Persons;