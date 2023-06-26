import {Sequelize} from "sequelize";

const db = new Sequelize('paa_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;