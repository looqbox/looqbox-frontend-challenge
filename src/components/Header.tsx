import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#5c4c92",
};

const CustomHeader: React.FC = () => (
  <Header style={HeaderStyle}>
    <img
      src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
      alt="Pokédex"
      height={50}
    />
  </Header>
);

export default CustomHeader;
