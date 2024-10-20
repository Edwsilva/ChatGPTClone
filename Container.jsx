import React from "react";
import "./Container.css"; // Importando o CSS para o Container

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
