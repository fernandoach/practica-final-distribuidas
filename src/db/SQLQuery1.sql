CREATE DATABASE Practica_Final;

USE Practica_Final;

CREATE TABLE Usuarios(
	id INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(100) NOT NULL,
	usuario VARCHAR(50) NOT NULL UNIQUE,
	passwd	VARCHAR(200) NOT NULL
);

CREATE TABLE Productos(
	id INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(100) NOT NULL,
	precio MONEY NOT NULL,
	stock INT NOT NULL,
	img VARBINARY(max) NOT NULL
);

SELECT * FROM Usuarios;