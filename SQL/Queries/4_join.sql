--JOIN - Ela permite construir linhas com colunas extraidas de duas tabelas a partir de uma coluna
--com valores semelhantes

--Nesse exemplo construimos uma linha com  OrderID, CustomerName, OrderDate a partir de customerID, presente 
--nas duas tabelas com valores semelhantes
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

--INNER JOIN - Retorna instâncias uma correspondência do valor em ambas as tabelas
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
--LEFT OUTER JOIN - Retorna todas as instâncias da tabela da esquerda, e as instâncias que combinam na direita
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;

--RIGHT OUTER JOIN - Retorna todas as instâncias da tabela da direita, e as instâncias que combinam na esquerda
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;

--FULL OUTER JOIN - Retorna todos os registros quando houver uma correspondência na tabela esquerda ou direita
--Se não tiver uma correspondência de um elemento em uma das outras tabelas, as colunas referentes
--a ela, fica null
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;