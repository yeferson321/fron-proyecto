create database refugio;
use refugio;

create table users(
name varchar(50) not null,
lastname varchar(50) not null,
phone int(20) not null,
email varchar(30) primary key not null,
password varchar(30) not null
);
