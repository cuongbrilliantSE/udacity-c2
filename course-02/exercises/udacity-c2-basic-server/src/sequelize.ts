import { config } from "./config/config";

const { Sequelize } = require('sequelize');


const env = config.postgres
const sequelize = new Sequelize({
    username: env.username,
    password: env.password,
    database: env.database,
    host: env.host,
    dialect: 'postgres',
    storage: ':memory:'
});

