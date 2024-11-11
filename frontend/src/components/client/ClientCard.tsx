import { Client } from "@/services/fakeData";
import Link from "next/link";

type ClientProps = Omit<Client, "id">;

const ClientCard = (props: ClientProps) => {
  return (
    <div>
      <div>
        <p>{props.name}</p>
        <span>{props.email}</span>
      </div>
      <div>
        <p>{props.personalID}</p>
        <span>{props.phoneNumber}</span>
      </div>
      <div>
        <div></div>
        <span>{props.status}</span>
      </div>
      <Link href="/edit">Editar</Link>
    </div>
  );
};

export default ClientCard;
