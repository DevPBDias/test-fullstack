import Client from "../model/Client.js";

const createClient = (body) => Client.create(body);
const getAllClients = () => Client.findAll();
const getClientById = (id) => Client.findByPk(id);

export default {
  createClient,
  getAllClients,
  getClientById,
};
