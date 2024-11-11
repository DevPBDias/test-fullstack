import { Client, clients } from "@/services/fakeData";
import React from "react";
import ClientCard from "./ClientCard";

const ClientList = () => {
  return (
    <div className="card-container">
      {clients.map((item: Client) => (
        <ClientCard
          key={item.id}
          name={item.name}
          email={item.email}
          personalID={item.personalID}
          phoneNumber={item.phoneNumber}
          status={item.email}
        />
      ))}
    </div>
  );
};

export default ClientList;
