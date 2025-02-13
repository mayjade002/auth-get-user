const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('✅ Conectado a MySQL'))
    .catch(err => console.error('❌ Error al conectar MySQL:', err));

module.exports = sequelize;
