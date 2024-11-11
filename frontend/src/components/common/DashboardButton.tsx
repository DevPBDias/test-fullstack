import Link from "next/link";
import "./styles.css";

interface ButtonProps {
  text: string;
  path: string;
}

const DashboardButton = ({ text, path }: ButtonProps) => {
  return (
    <Link href={path} className="button-dashboard">
      {text}
    </Link>
  );
};

export default DashboardButton;
