import "dotenv/config";
import express from "express";
import cors from "cors";
import sequelize from "./src/database/configDB.js";

const app = express();
sequelize.sync().then(() => console.log("database connected successfully 🏦"));

app.use(cors());
app.use(express.json());

export default app;
