import { Model, DataTypes } from "sequelize";
import sequelize from "../database/configDB.js";

class Client extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    personalID: {
      type: DataTypes.STRING,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "client",
    timestamps: true,
  }
);

export default Client;
