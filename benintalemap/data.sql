create if not exists BeninTaleMap;
use BeninTaleMap;

create table city (
    name varchar(100) not null,
    myths varchar(1000) [],
    origin varchar(100) not null,
    FOREIGN KEY (origin) REFERENCES country(name)
);

create table country (
    name varchar(100) not null,
    cities varchar(100) [],
    population integer
);
