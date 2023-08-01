'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      property.hasMany(models.inquiry,{as:'inquiry'})

    }
  }
  property.init({
      padd: DataTypes.STRING,
      price:DataTypes.STRING,
      description:DataTypes.STRING,
      size:DataTypes.STRING,
      img:DataTypes.TEXT,
      is_sell : DataTypes.BOOLEAN,
      is_rent : DataTypes.BOOLEAN,
      aid:DataTypes.INTEGER,
      tid:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'property',
  });
  return property;
};