import React from "react";
import { Layout } from "antd";
import logo from "../../assets/logo.png";

const { Header } = Layout;

const HeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#5c4c92",
};

const CustomHeader: React.FC = () => (
  <Header style={HeaderStyle}>
    <img src={logo} alt="Pokédex" height={60} />
  </Header>
);

export default CustomHeader;
