import React from "react";
import { Layout } from "antd";
import logo from "../../../assets/logo.png";
import "./styles.css";

const { Header } = Layout;

const CustomHeader: React.FC = () => (
  <Header className="header">
    <img src={logo} alt="Pokédex" height={60} />
  </Header>
);

export default CustomHeader;
