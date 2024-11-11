import Image from "next/image";
import uolIcon from "@/assets/uol.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Image
        src={uolIcon}
        alt="uol Icon"
        quality={100}
        priority
        className="uol-icon"
      />
      <h1>Uol</h1>
    </header>
  );
};

export default Header;
