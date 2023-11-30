const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './dc5-pelassa-axel.db'
});

module.exports = sequelize;