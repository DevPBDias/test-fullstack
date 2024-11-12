import Client from "../model/Client.js";

const createClient = (body) => Client.create(body);
const getAllClients = () => Client.findAll();
const getClientById = (id) => Client.findOne({ where: id });

const updateClient = (id, name, email, phoneNumber, personalID, status) =>
  Client.update(
    {
      name,
      phoneNumber,
      email,
      personalID,
      status,
    },
    { where: id }
  );

export default {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
};
