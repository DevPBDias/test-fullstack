import { Client, getClientsData } from "@/services/clientData";
import ClientCard from "./ClientCard";
import "./clients.css";

const ClientList = async () => {
  const { data } = await getClientsData();

  return (
    <div className="client-list-container">
      {data?.map((item: Client) => (
        <ClientCard
          key={item.id}
          id={item.id}
          name={item.name}
          email={item.email}
          personalID={item.personalID}
          phoneNumber={item.phoneNumber}
          status={item.status}
        />
      ))}
    </div>
  );
};

export default ClientList;
