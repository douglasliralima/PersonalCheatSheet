-- DISTINCT - Seleciona tudo, menos essa coluna

SELECT DISTINCT Country FROM Customers;

--SELECT TOP - Útil para especificar o número de instâncias para retornar de big tables
--Existe algumas variações dependendo do SGBD
SELECT TOP 3 * FROM Customers;
SELECT TOP 3 * FROM Customers WHERE Country='Germany';
SELECT TOP 50 PERCENT * FROM Customers;

--IN - Operador que permite um OR mais fácil, quando temos um monte de condições no WHERE
--Temos aqui puxando linhas onde country = 'Germany' ou 'France' ou 'uk'
SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');

--Com esse operador podemos puxar linhas com valores em que está em outra coluna em outra tabela
SELECT * FROM Customers WHERE Country IN (SELECT Country FROM Suppliers);

--BETWEEN - Operadores seleciona valores a partir de um range, aceita string, numero e data
-- Filtro que está entre 10 e 20 e categoryID n é (1,2,3)
SELECT * FROM Products WHERE Price BETWEEN 10 AND 20 AND NOT CategoryID IN (1,2,3);

--Para usar o texto, é bom definir algum parametro
SELECT * FROM Products WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
ORDER BY ProductName;

--Data temos que defini-las entre ## ou string msm
SELECT * FROM Orders WHERE OrderDate BETWEEN #01/07/1996# AND #31/07/1996#;
SELECT * FROM OrdersWHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';

--UNION - Usado para juntar dois SELECTS, para permitir valores duplicados nas colunas selecionadas, usar o ALL.
SELECT column_name(s) FROM table1
UNION --ALL
SELECT column_name(s) FROM table2;
