CREATE DATABASE "x_obra_liter"
	 WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;


CREATE SCHEMA IF NOT EXISTS desenvolvimento
    AUTHORIZATION postgres;


CREATE TABLE IF NOT EXISTS desenvolvimento.usuario (
	idUsuario int not null,
	nome varchar(200) not null,
	email varchar(200) not null,
	senha varchar(200) not null,
	dataCadastro date not null,
	uf char(2) not null,
	dataNascimento date not null,
	perfil char(1) not null,
	status char(1) not null,
	primary key(idUsuario)
);

CREATE TABLE IF NOT EXISTS  desenvolvimento.categoria(
	idCategoria int not null,
	nome varchar(100) not null,
	PRIMARY KEY (idCategoria)
);


CREATE TABLE IF NOT EXISTS  desenvolvimento.embremas (
	idEmbrema int not null,
	foto oid not null,
	titulo varchar(100) not null, 
	descricao varchar(250) not null,
	status char(1) not null,
	dataCadastro date not null,
	pontuacao double precision not null,
	PRIMARY KEY (idEmbrema)
);

CREATE TABLE IF NOT EXISTS  desenvolvimento.quiz(
	idQuiz int not null,
	idUsuario int not null,
	autor varchar(100) not null,
	obra varchar(100) not null,
	dataCadastro date not null,
	titulo varchar(100) not null,
	descricao varchar(250) not null,
	status  char(1) not null,
	PRIMARY KEY(idQuiz),
	FOREIGN KEY(idUsuario) REFERENCES desenvolvimento.usuario(idUsuario)
);
	
CREATE TABLE IF NOT EXISTS  desenvolvimento.usuario_quiz(
	idUsuarioQuiz int not null,
	idUsuario int not null,
	idQuiz int not null,
	qtdePontos double precision not null,
	dataCadastro date not null,
	avaliacao double precision not null,		
	PRIMARY KEY (idUsuarioQuiz),
	FOREIGN KEY (idUsuario) REFERENCES desenvolvimento.usuario(idUsuario),
	FOREIGN KEY (idQuiz) REFERENCES desenvolvimento.quiz(idQuiz)
);


CREATE TABLE IF NOT EXISTS  desenvolvimento.perguntas(
	idPergunta int not null,
	idCategoria int not null,
	idQuiz int not null,
	texto varchar(200) not null,
	ajuda varchar(200) not null,
	tempo time not null,
	status char(1)not null,
	PRIMARY KEY (idPergunta),
	FOREIGN KEY (idCategoria) REFERENCES desenvolvimento.categoria(idCategoria),
	FOREIGN KEY (idQuiz) REFERENCES desenvolvimento.quiz(idQuiz)
);

CREATE TABLE IF NOT EXISTS  desenvolvimento.respostas (
	idResposta int not null,
	idPergunta int not null,
	texto varchar(200) not null,
	correto smallint not null,
	PRIMARY KEY (idResposta),
	FOREIGN KEY (idPergunta) REFERENCES desenvolvimento.perguntas(idPergunta)
	
);


CREATE TABLE IF NOT EXISTS  desenvolvimento.embrema_criterio(
	idEmbremaCriterio  int not null,
	idEmbrema int not null,
	qtdeQuiz double precision not null,
	qtdeAutor double precision not null,
	qtdeObra double precision not null,
	PRIMARY KEY (idEmbremaCriterio),
	FOREIGN KEY( idEmbrema) REFERENCES desenvolvimento.embremas(idEmbrema)
	
);

CREATE TABLE IF NOT EXISTS  desenvolvimento.usuario_embremas(
	idUsuarioEmbrema int not null,
	idUsuario int not null,
	idEmbrema int not null,
	qtdePontos double precision not null,
	dataCadastro time not null,
	PRIMARY KEY (idUsuarioEmbrema),
	FOREIGN KEY (idUsuario) REFERENCES desenvolvimento.usuario(idUsuario),
	FOREIGN KEY (idEmbrema) REFERENCES desenvolvimento.embremas (idEmbrema)
);
	
	
/*
	admin_00  
	
*/