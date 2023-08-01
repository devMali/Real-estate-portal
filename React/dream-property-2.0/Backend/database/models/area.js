'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      area.hasMany(models.user,{as :'user'});
      area.hasMany(models.property,{as :'prop'});

    }
  }
  area.init({
    aname: DataTypes.STRING,
    cid:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'area',
  });
  return area;
};