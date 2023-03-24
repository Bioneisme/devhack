# Beef Tech Backend

## Description

This is the backend for the Beef Tech project. It is a REST API written in TypeScript using
the [Express](https://expressjs.com/) framework, [Sequelize](https://sequelize.org/) as ORM
and [PostgreSQL](https://www.postgresql.org/) as database.

### API Documentation

API documentation can be found [here](https://13lab.redoc.ly/) (available only till 30.03.2023) 
or in OpenAPI format, in the openapi.yaml file.

### Database Diagram

![image](https://res.cloudinary.com/dmqunjsua/image/upload/v1679595125/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-03-24_001150_lf2suz.png)

### Synchronization
Description of the principle of operation [here](https://docs.google.com/document/d/1IF9WHjcmz0M9DYvpgRB0HCZwqmB0KYDFnFKMS5_zYK4/edit?usp=sharing)

## Setup

### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [PostgreSQL](https://www.postgresql.org/)

### Installation

Adapt the .env file to your needs

```bash
cp .env.example .env
```

Install dependencies

```bash
npm install
```

Run the server

```bash
npm start
```

```bash
npm run dev
```
