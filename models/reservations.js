"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Reservations.belongsTo(models.Driveways, {
        foreignKey: "driveway_id",
      });
      models.Reservations.belongsTo(models.Users, { foreignKey: "user_id" });
      // define association here
    }
  }
  Reservations.init(
    {
      user_id: DataTypes.INTEGER,
      driveway_id: DataTypes.INTEGER,
      date: DataTypes.DATE,
      start_req: DataTypes.TIME,
      end_req: DataTypes.TIME,
      stripe_charge_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Reservations",
    }
  );
  return Reservations;
};
