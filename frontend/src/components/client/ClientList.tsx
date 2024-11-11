import { Client, clients } from "@/services/fakeData";
import React from "react";
import ClientCard from "./ClientCard";
import "./clients.css";

const ClientList = () => {
  return (
    <div className="client-list-container">
      {clients.map((item: Client) => (
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
