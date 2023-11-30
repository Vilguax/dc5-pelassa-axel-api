const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize.js');

class campagnes extends Model {}

campagnes.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  start_date: DataTypes.TEXT,
  end_date: DataTypes.TEXT,
  budget: DataTypes.INTEGER
}, { 
  sequelize, 
  modelName: 'campaigns',
  timestamps: false
});

module.exports = campagnes;