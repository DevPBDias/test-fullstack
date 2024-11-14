import Link from "next/link";
import "./clients.css";
import { Client } from "@/types";
import { statusColor } from "@/utils";

type ClientProps = Client;

const ClientCard = (props: ClientProps) => {
  return (
    <section className="client-card-container">
      <div className="text-container">
        <div className="text-content">
          <p className="main-content">{props.name}</p>
          <span className="sub-content">{props.email}</span>
        </div>
        <div className="text-content">
          <p className="main-content">{props.personalID}</p>
          <span className="sub-content">{props.phoneNumber}</span>
        </div>
        <div className="status-content">
          <div
            data-testid="status-div"
            className={`${statusColor(props.status)}`}
          ></div>
          <span className="status-name">{props.status}</span>
        </div>
      </div>
      <Link className="card-button" href={`/${props.id}`}>
        Editar
      </Link>
    </section>
  );
};

export default ClientCard;
