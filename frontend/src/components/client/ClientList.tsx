import { getClientsData } from "@/services/clientData";
import { Client } from "@/types";
import ClientCard from "./ClientCard";
import "./clients.css";

const ClientList = async () => {
  const { data } = await getClientsData();

  return (
    <div className="client-list-container">
      {data?.map((item: Client) => (
        <ClientCard
          data-testid={`client-${item.id}`}
          key={item.id}
          id={item.id}
          name={item.name}
          email={item.email}
          personalID={item.personalID}
          phoneNumber={item.phoneNumber}
          status={item.status}
        />
      ))}
      <p data-testid="length" className="text-clients-qty">
        Exibindo {data.length} clientes
      </p>
    </div>
  );
};

export default ClientList;
