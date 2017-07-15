drop database if exists bamazon_db;
create database bamazon_db;

use bamazon_db;
create table products(
	item_id integer(20) auto_increment not null,
    product_name varchar(100) not null,
    department_name varchar(50) not null default "other",
    price float(10,2) not null default 1.00,
    stock_quantity integer(10) not null default 0,
    primary key (item_id)
);

use bamazon_db;
insert into products (product_name, department_name, price, stock_quantity)
values 
("Potatoes", "Grocery", 2.00, 100),
("White T-shirt", "Clothing", 12.00, 200),
("Denon AH-MM400 Music Maniac Over-Ear Headphones", "Electronics", 399.00, 40),
("Sharpie", "Stationary", 3.00, 230),
("Nintendo Switch", "Electronics", 423.98, 100),
("Anova Sous Vide", "Electronics", 149.00, 50),
("Darjeeling Tea", "Grocery", 27.95, 310),
("Black Keyboard", "Electronics", 10.00, 5000),
("Coffee Beans", "Grocery", 22.00, 2204),
("Ibuprofen", "Pharmacy", 5.00, 500),
("Scissors", "Stationary", 5.99, 1000);

select * from products;