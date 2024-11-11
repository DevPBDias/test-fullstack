import "dotenv/config";
import express from "express";
import cors from "cors";
import { openDb } from "./database/configDB";

const app = express();
openDb();

app.use(cors());
app.use(express.json());

export default app;
