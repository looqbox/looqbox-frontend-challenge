import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./styles.css";

const { Header } = Layout;

const CustomHeader: React.FC = () => (
  <Header className="header">
    <Link to="/">
      <img src={logo} alt="Pokédex" height={60} />
    </Link>
  </Header>
);

export default CustomHeader;
