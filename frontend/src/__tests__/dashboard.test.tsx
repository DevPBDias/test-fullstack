import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PageTitle from "@/components/common/PageTitle";
import Header from "@/components/header/Header";
import DashboardTitle from "@/components/common/DashboardTitle";
import DashboardButton from "@/components/common/DashboardButton";
import ClientCard from "@/components/client/ClientCard";
import { statusColor } from "@/utils";
import {
  createNewClient,
  getClientById,
  getClientsData,
  updateClienttById,
} from "@/services/clientData";
import axios from "axios";

jest.mock("axios");

describe("Dashboard Page", () => {
  it("Renders a title page", () => {
    render(<PageTitle titleName="Painel de clientes" />);

    const title = screen.getByRole("heading", { level: 3 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Painel de clientes");
  });

  it("Renders a heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Uol");
  });

  it("Renders a heading", () => {
    render(
      <DashboardTitle
        title="Listagem de usuários"
        subtitle="Escolha um cliente para visualizar detalhes"
      />
    );

    const title = screen.getByRole("heading", { level: 3 });
    const subtitle = screen.getByRole("heading", { level: 4 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Listagem de usuários");
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(
      "Escolha um cliente para visualizar detalhes"
    );
  });

  it("Renders a button", () => {
    render(<DashboardButton text="Novo cliente" path="/register" />);

    const button = screen.getByRole("link", { name: "Novo cliente" });

    expect(button).toBeInTheDocument();
  });

  it("Renders a client card", () => {
    const clients = {
      id: "1",
      name: "Paulo",
      email: "teste@teste.com",
      personalID: "123.456.789-00",
      phoneNumber: "(63) 99999-9999",
      status: "Ativo",
    };

    const statusValue: any = statusColor(clients.status);

    render(
      <ClientCard
        id={clients.id}
        email={clients.email}
        name={clients.name}
        personalID={clients.personalID}
        phoneNumber={clients.phoneNumber}
        status={clients.status}
      />
    );

    const name = screen.getByText(clients.name);
    expect(name).toBeInTheDocument();
    const email = screen.getByText(clients.email);
    expect(email).toBeInTheDocument();
    const personalID = screen.getByText(clients.personalID);
    expect(personalID).toBeInTheDocument();
    const phoneNumber = screen.getByText(clients.phoneNumber);
    expect(phoneNumber).toBeInTheDocument();
    const status = screen.getByText(clients.status);
    expect(status).toBeInTheDocument();
    const statusCircle = screen.getByTestId("status-div");
    expect(statusCircle.classList.contains(statusValue)).toBeTruthy();
    const link = screen.getByRole("link", { name: "Editar" });
    expect(link).toBeInTheDocument();
  });

  it("Testing statusColor function", () => {
    const statusValues = [
      "Ativo",
      "Inativo",
      "Desativo",
      "Aguardando ativação",
      "None",
    ];

    const firstValue: string | undefined = statusColor(statusValues[0]);
    expect(firstValue).toEqual("active");
    const secondValue: string | undefined = statusColor(statusValues[1]);
    expect(secondValue).toEqual("inactive");
    const thirdValue: string | undefined = statusColor(statusValues[2]);
    expect(thirdValue).toEqual("disabled");
    const forthValue: string | undefined = statusColor(statusValues[3]);
    expect(forthValue).toEqual("waiting");
    const noneValue: string | undefined = statusColor(statusValues[4]);
    expect(noneValue).toEqual(undefined);
  });

  it("Testing get all clients axios", async () => {
    const clients = {
      id: "1",
      name: "Paulo",
      email: "teste@teste.com",
      personalID: "123.456.789-00",
      phoneNumber: "(63) 99999-9999",
      status: "Ativo",
    };

    const mockGetResponse = {
      data: {
        results: [
          {
            id: "1",
            name: "Paulo",
            email: "teste@teste.com",
            personalID: "123.456.789-00",
            phoneNumber: "(63) 99999-9999",
            status: "Ativo",
          },
        ],
      },
    };

    const mockPostResponse = {
      message: "Created",
      clientCreated: {
        id: "1",
        name: "Paulo",
        email: "teste@teste.com",
        personalID: "123.456.789-00",
        phoneNumber: "(63) 99999-9999",
        status: "Ativo",
      },
    };

    const mockPacthResponse = { message: "Updated" };

    axios.get = jest.fn().mockResolvedValue(mockGetResponse);
    const getData = await getClientsData();
    expect(mockGetResponse).toEqual(getData);

    axios.get = jest.fn().mockResolvedValue(mockGetResponse);
    const getIdData = await getClientById("1");
    expect(mockGetResponse.data.results).toEqual(getIdData.data.results);

    axios.post = jest.fn().mockResolvedValue(mockPostResponse);
    const postData = await createNewClient(clients);
    expect(mockPostResponse).toEqual(postData);

    axios.patch = jest.fn().mockResolvedValue(mockPacthResponse);
    const updateData = await updateClienttById("1", clients);
    expect(mockPacthResponse).toEqual(updateData);
  });
});
