export type Client = {
  id: string;
  name: string;
  email: string;
  personalID: string;
  phoneNumber: string;
  status: string;
};

export const clients: Client[] = [
  {
    id: "1",
    name: "Jonh Doe",
    email: "johndoe@teste.com",
    personalID: "123.456.789-00",
    phoneNumber: "(11) 99999-9999",
    status: "Ativo",
  },
  {
    id: "2",
    name: "Jonh Doe",
    email: "johndoe@teste.com",
    personalID: "123.456.789-00",
    phoneNumber: "(11) 99999-9999",
    status: "Inativo",
  },
  {
    id: "3",
    name: "Jonh Doe",
    email: "johndoe@teste.com",
    personalID: "123.456.789-00",
    phoneNumber: "(11) 99999-9999",
    status: "Aguardando ativação",
  },
  {
    id: "4",
    name: "Jonh Doe",
    email: "johndoe@teste.com",
    personalID: "123.456.789-00",
    phoneNumber: "(11) 99999-9999",
    status: "Desativo",
  },
];
