-- SELECT - Seleciona a coluna especifica de uma tabela

SELECT * FROM Customers;

--WHERE - Especifica quais instâncias dessa coluna devem ser retornadas
--Pode ter operação lógica - And,or,not, <=...

SELECT * FROM Customers WHERE City = 'Berlin' OR City = 'London';

--ORDER BY - usada para classificar o conjunto de resultados em ordem crescente ou decrescente,
--em ordem crescente por padrão.

SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;

--INSERT INTO -Para colocar um elemento na tabela se usa o comando, especificando as colunas 
--e cada valor que vai nela, respectivamente

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

--NULL - Para saber se uma coluna tem o valor null, temos duas palavras chaves para isso
SELECT CustomerName, ContactName, Address FROM Customers WHERE CustomerName IS NULL;
SELECT CustomerName, ContactName, Address FROM Customers WHERE CustomerName IS NOT NULL;

--UPDATE/SET - Atualiza os dados de uma coluna em uma tabela
--WHERE - Quais instâncais puxas, se mais de uma instância, todas elas são alteradas
--Se omitir o WHERE, todos os valores naqla coluna se transformam na alteração
UPDATE Customers SET ContactName = 'Alfred Schmidt', City= 'Frankfurt' WHERE CustomerID = 1;

--DELETE - Remove os elementos da tabela, que atendem a condição no where
--Se não houver o where, deleta todas as instâncias
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
