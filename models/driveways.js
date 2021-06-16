'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driveways extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Driveways.init({
    total_spaces: DataTypes.INTEGER,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    host_id: DataTypes.INTEGER,
    open_spaces: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Driveways',
  });
  return Driveways;
};