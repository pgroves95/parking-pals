'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Users.hasMany(models.Reservations,{foreignKey:"driver_id"})
      models.Users.hasMany(models.Driveways, {foreignKey:'host_id'})
    }
  };
  Users.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    stripe_acct: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    access: DataTypes.STRING,
    license_plate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};