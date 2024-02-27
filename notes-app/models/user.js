const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('Testing', 'root', 'Sophan123!', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('user', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
});

module.exports = User;
