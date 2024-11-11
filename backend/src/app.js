import "dotenv/config";
import express from "express";
import cors from "cors";
import clientRoute from "./src/routes/client.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/client", userRoute);

export default app;
