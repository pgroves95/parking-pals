"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Driveways extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Driveways.hasMany(models.Reservations, {
        foreignKey: "driveway_id",
      });
    }
  }
  Driveways.init(
    {
      is_open: DataTypes.BOOLEAN,
      address: DataTypes.STRING,
      description: DataTypes.STRING(500),
      rate: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Driveways",
    }
  );
  return Driveways;
};
