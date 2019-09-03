--MIN() MAX() - Retorna o menor e maior valor respectivamente da tabela
SELECT MIN(Price) AS SmallestPrice FROM Products;
SELECT MAX(Price) AS LargestPrice FROM Products;

--COUNT() - Funcão que retorna o numero de linhas, pode combar com where
SELECT COUNT(ProductID) FROM Products;

--AVG() - Função que retorna o valor numérico médio de toda a coluna, pode combar com where
SELECT AVG(Price) FROM Products;

--SUM() - Função que retorna a soma total da coluna, pode combar com where
SELECT SUM(Quantity) FROM OrderDetails;