<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Fastfeet, Backend
</h3>

<blockquote align="center">“Não sabendo que era impossível, foi lá e fez”</blockquote>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)

## 💻 Projeto

A aplicação desenvolvida neste projeto é a API de um app para uma transportadora fictícia, o FastFeet.

## 📥 Instalação e execução

Faça um clone desse repositório

  ### Backend
  1. A partir da raiz do projeto, entre na pasta rodando `cd backend`;
  2. Inicie os bancos de dados postgresql, mongodb e redis utilizando docker, e crie o banco `fastfeet` no postgres:
  ```bash
    $ docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
    $ docker run --name mongo -p 27017:27017 -d -t mongo
    $ docker run --name redis -p 6379:6379 -d -t redis:alpine
    $
    $ docker exec -it postgres /bin/sh
    # su postgres
    /$ psql
    postgres=# CREATE DATABASE fastfeet;
    postgres=# exit
    /$ exit
    # exit
  ```
  3. Crie um arquivo `.env` a partir do arquivo `.env.example` preenchendo todas as variáveis pedidas;
  4. Rode `yarn` para instalar todas as dependências;
  5. Rode `yarn migrate` para criar as migrations;
  6. Rode `yarn seed` para popular o banco;
  7. Rode `yarn queue` para iniciar o consumo das filas;
  8. Rode `yarn prod` em um novo terminal para compilar e iniciar o servidor node;

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
