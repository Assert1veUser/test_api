const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_db', 'postgres', 'Valera061020', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;