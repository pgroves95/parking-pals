'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Reservations.belongsTo(Driveways,{foreignKey:driveway_id})
      // Reservations.belongsTo(Users,{foreignKey:driver_id})
      // Reservations.belongsTo(Users, {foreignKey: host_id})
      // define association here
    }
  };
  Reservations.init({
    driver_id: DataTypes.INTEGER,
    driveway_id: DataTypes.INTEGER,
    host_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    start_request: DataTypes.TIME,
    end_request: DataTypes.TIME,
    distance: DataTypes.INTEGER,
    stripe_payment: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};