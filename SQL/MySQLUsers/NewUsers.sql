CREATE DATABASE `mydb`;

--TO create new users
CREATE USER 'myuser' IDENTIFIED BY 'mypassword';

--TO create new users on localhost
--This has low password type
CREATE USER 'myuser'@localhost IDENTIFIED BY 'myuser123';

--To leave only read actions to local host
GRANT USAGE ON *.* TO 'myuser'@localhost IDENTIFIED BY 'mypassword';

--To leave only read actions to user in network
GRANT USAGE ON *.* TO 'myuser'@'%' IDENTIFIED BY 'mypassword';

--To leave read/white actions in some db named 'mysb'
 GRANT ALL privileges ON `mydb`.* TO 'myuser'@localhost;
 
 --Apply changes
 FLUSH PRIVILEGES;

DROP USER myuser@localhost;
DROP DATABASE mydb;