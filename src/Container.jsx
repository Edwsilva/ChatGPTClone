import React from "react";
import "./container.css"; // Importando o CSS para o Container

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
