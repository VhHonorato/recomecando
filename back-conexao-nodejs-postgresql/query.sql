drop table if exists autores;

create table autores (
	id serial primary key,
  nome text not null,
  idade smallint 
);

drop table if exists livros;

create table livros (
	id serial primary key,
  autor_id integer not null,
  nome text not null,
  editora varchar(100),
  genero varchar(50) not null,
  data_publicacao date,
  foreign key(autor_id) references autores (id)
);

drop table if exists usuarios;

create table usuarios (
	id serial primary key,
  nome text not null,
  idade smallint,
  email varchar(100) unique not null,
  telefone varchar(50),
  cpf varchar(11) unique not null
  
);

-- Para testar a rota listar usuarios.
insert into usuarios (nome, idade, email, telefone, cpf)
values
('Victo Hugo', 32, 'vhhonorato@hotmail.com', '71992913060', '05073158555');

