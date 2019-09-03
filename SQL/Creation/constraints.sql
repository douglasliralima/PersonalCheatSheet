--NOT NULL - Garante que uma coluna não possa ter um valor NULL
--UNIQUE - Garante que todos os valores em uma coluna sejam diferentes
CREATE TABLE Persons (
    ID int NOT NULL UNIQUE,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);


--PRIMARY KEY - Combinação de um NOT NULL e UNIQUE. Identifica exclusivamente cada linha em uma tabela
CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);


--Se quisermos definirmos multiplos, fazemos assim
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
);

--Podemos fazer o ALTER TABLE para deixar uma coluna primária
ALTER TABLE Persons
ADD PRIMARY KEY (ID);

ALTER TABLE Persons
ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);

--FOREIGN KEY - Identifica exclusivamente uma linha / registro em outra tabela
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);


CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    OrderNumber int NOT NULL,
    PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
);

--CHECK - Garante que todos os valores em uma coluna satisfaçam uma condição específica
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);

--Para checar multiplas coluans de uma vez
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);

--Podemos alterar tabelas
ALTER TABLE Persons
ADD CHECK (Age>=18);

ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');

--Para dropar o CHECK em uma tabela, usar
ALTER TABLE Persons
DROP CHECK CHK_PersonAge;

--DEFAULT - Define um valor padrão para uma coluna quando nenhum valor é especificado
--INDEX - Usado para criar e recuperar dados do banco de dados muito rapidamente