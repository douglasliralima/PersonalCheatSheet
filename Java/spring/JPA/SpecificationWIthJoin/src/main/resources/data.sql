INSERT INTO some_user (name) VALUES ('John');
INSERT INTO some_user (name) VALUES ('Ariel');
INSERT INTO some_user (name) VALUES ('Brian');
INSERT INTO some_user (name) VALUES ('Kelly');
INSERT INTO some_user (name) VALUES ('Tom');
INSERT INTO some_user (name) VALUES ('Sonya');

INSERT INTO product (owner_id,name) VALUES (1,'Nokia 3310');
INSERT INTO product (owner_id,name) VALUES (2,'Sony Xperia Aqua');
INSERT INTO product (owner_id,name) VALUES (3,'IPhone 4S');
INSERT INTO product (owner_id,name) VALUES (1,'Xiaomi MI5');
INSERT INTO product (owner_id,name) VALUES (3,'Samsung Galaxy S7');
INSERT INTO product (owner_id,name) VALUES (3,'Sony Xperia Z3');

INSERT INTO following_relationship (follower_id, owner_id) VALUES (4,1);
INSERT INTO following_relationship (follower_id, owner_id) VALUES (5,1);
INSERT INTO following_relationship (follower_id, owner_id) VALUES (4,2);
INSERT INTO following_relationship (follower_id, owner_id) VALUES (6,2);
INSERT INTO following_relationship (follower_id, owner_id) VALUES (6,3);
INSERT INTO following_relationship (follower_id, owner_id) VALUES (1,3);