import clientService from "../services/client.service.js";

const createClient = async (req, res) => {
  try {
    const { name, phoneNumber, email, personalID, status } = req.body;

    if (!phoneNumber || !name || !email || !personalID || !status) {
      return res.status(400).send({ message: "Submit all fields" });
    }

    const client = await clientService.createClient(req.body);

    if (!client) {
      return res.status(400).send({ message: "Not created" });
    }

    return res.status(201).send({
      message: "Created",
      clientCreated: {
        id: client.id,
        name,
        phoneNumber,
        email,
        personalID,
        status,
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAllClients = async (req, res) => {
  try {
    const clients = await clientService.getAllClients();

    if (clients.length === 0) {
      return res.status(400).send({ message: "Not found" });
    }

    return res.status(200).send(clients);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const clientFound = await clientService.getClientById(id);

    return res.status(200).send(clientFound);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateClient = async (req, res) => {
  try {
    const { name, phoneNumber, email, personalID, status } = req.body;
    const { id } = req.params;

    if (!phoneNumber && !name && !email && !personalID && !status) {
      return res.status(400).send({ message: "Submit at least one field" });
    }

    const clientFound = await clientService.updateClient(id, {
      name,
      phoneNumber,
      email,
      personalID,
      status,
    });

    if (!clientFound) {
      return response.status(400).json("Client not found");
    }

    res.status(200).send({ message: "Updated" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
};
