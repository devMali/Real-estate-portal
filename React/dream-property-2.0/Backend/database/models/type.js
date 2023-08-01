'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type extends Model {
    
    static associate(models) {
      type.hasMany(models.property,{as :'prop'});
    }
  }
  type.init({
    tname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'type',
  });
  return type;
};