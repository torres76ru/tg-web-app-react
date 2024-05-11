import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Close</Button>
      <span className={"username"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet
        sint labore temporibus illum omnis quisquam, autem corporis quia
        laboriosam numquam sed nisi porro libero assumenda dolorum, mollitia
        nobis nemo! Username: {user?.username}
      </span>
    </div>
  );
};

export default Header;
