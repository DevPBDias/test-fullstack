import axios from "axios";

export type Client = {
  id: string;
  name: string;
  email: string;
  personalID: string;
  phoneNumber: string;
  status: string;
};

const baseURL = "http://localhost:3004";

export function createNewClient(body: Client) {
  const response = axios.post(`${baseURL}/client`, body);
  return response;
}

export const getClientsData = async () => {
  const response = axios.get(`${baseURL}/client`);
  return response;
};

export function getClientById(id: string | number) {
  const response = axios.get(`${baseURL}/client/${id}`);
  return response;
}

export function updateClienttById(id: string | number, body: Client) {
  const response = axios.patch(`${baseURL}/client/${id}`, body);
  return response;
}
