--ALTER TABLE - É usado para adicionar, excluir ou modificar colunas em uma tabela existente.

--Adiciona o email na coluna Customers
ALTER TABLE Customers ADD Email varchar(255);

--Dropando a coluna Email de Customers
ALTER TABLE Customers
DROP COLUMN Email;

--Para alterar o tipo de dados de uma coluna em uma tabela, usamos a seguinte sintaxe
ALTER TABLE Persons
MODIFY COLUMN DateOfBirth year;