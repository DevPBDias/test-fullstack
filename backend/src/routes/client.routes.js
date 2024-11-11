import { Router } from "express";
import clientController from "../controllers/client.controller.js";

const clientRoute = Router();

clientRoute.post("/", clientController.createClient);
clientRoute.get("/", clientController.getAllClients);
clientRoute.get("/:id", clientController.getClientById);
clientRoute.patch("/:id", clientController.updateClient);

export default clientRoute;
