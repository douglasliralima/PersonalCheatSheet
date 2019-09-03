--GROUP BY - usado para agregar agrupar o resultado de funções (COUNT, MAX, MIN, SUM, AVG)
-- Nesse exemplo extraimos a count de costumerID e Country para formar uma nova tabela de costumers
-- a contagem de costumerID é organizada por Country
SELECT COUNT(CustomerID), Country FROM Customers
GROUP BY Country;

--HAVING - WHERE que aceita fazer as condições com funções
SELECT COUNT(CustomerID), Country FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;

chrome-extension://mpnfndnehgmmonhfcfdnaemdeokofgaf/img/5.jpg