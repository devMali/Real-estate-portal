'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inquiry.init({
    uid:DataTypes.INTEGER,
    pid:DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'inquiry',
  });
  return inquiry;
};