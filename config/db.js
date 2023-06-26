const Sequelize = require('sequelize');

const db = new Sequelize('board', 'user', 'pass',{
  host:'localhost',
  dialect: 'sqlite'
})


module.exports = db;


