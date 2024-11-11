import { User } from "lucide-react";
import React from "react";
import "./styles.css";

interface PageProps {
  titleName: string;
}

const PageTitle = ({ titleName }: PageProps) => {
  return (
    <section className="title-section">
      <User color="black" size={28} />
      <h3 className="title-page">{titleName}</h3>
    </section>
  );
};

export default PageTitle;
