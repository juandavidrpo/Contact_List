CREATE DATABASE contact_list

USE contact_list

CREATE TABLE contact(
	id_contact INT IDENTITY NOT NULL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	phone VARCHAR(15) NOT NULL,
	email VARCHAR(50) NULL,
	date_birth DATE NULL,
);

INSERT INTO contact(name, phone, email, date_birth)
VALUES('Juan David', '1234567890', 'juandavid@example.com', '1996-09-02');

INSERT INTO contact(name, phone, email, date_birth)
VALUES('Nathalí Restrepo', '9874521036', 'nathali@example.com', '1999-11-11');

INSERT INTO contact(name, phone, email, date_birth)
VALUES('Luisa Restrepo', '3215870091', 'luisar@example.com', '1990-05-20');

INSERT INTO contact(name, phone, email, date_birth)
VALUES('Esteban Orozco', '5569780031', 'esteban@example.com', '2000-07-13');
