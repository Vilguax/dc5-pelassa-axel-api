const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize.js');

class Campagnes extends Model {}

Campagnes.init({
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
  modelName: 'Campagnes',
  timestamps: false
});

module.exports = Campagnes;