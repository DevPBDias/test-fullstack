import Sequelize from "sequelize";

export const sequelize = new Sequelize("CRUD-db", "user", "password", {
  dialect: "sqlite",
  storage: "./database.db",
});

export default sequelize;
