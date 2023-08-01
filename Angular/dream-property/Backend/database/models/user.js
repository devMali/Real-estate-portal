'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.inquiry,{as:'inquiry'})
    }
  }
  user.init({
    fname: DataTypes.STRING,
    lname : DataTypes.STRING,
   email:DataTypes.STRING,
    password:DataTypes.STRING,
    mobile:DataTypes.STRING,
    address:DataTypes.STRING,
    uimg:DataTypes.TEXT,
    role:DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};