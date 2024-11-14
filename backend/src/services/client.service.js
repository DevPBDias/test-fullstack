import Client from "../model/Client.js";

const createClient = (body) => Client.create(body);
const getAllClients = () => Client.findAll();
const getClientById = (id) => Client.findByPk(id);
const updateClient = async (id, body) => {
  const clientFound = await getClientById(id);

  if (!clientFound) return null;

  clientFound.name = body.name;
  clientFound.phoneNumber = body.phoneNumber;
  clientFound.email = body.email;
  clientFound.personalID = body.personalID;
  clientFound.status = body.status;

  await clientFound.save();

  return clientFound;
};

export default {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
};
