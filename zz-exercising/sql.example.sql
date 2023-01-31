
DROP TABLE IF EXISTS family;

CREATE TABLE family(
    id int auto_increment primary key,
    name varchar(100) not null,
    email varchar(100) not null,
    age int(3) not null,
    CreatedAt timestamp default current_timestamp()
) ENGINE=INNODB;