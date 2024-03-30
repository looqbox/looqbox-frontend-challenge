import React from "react";
import { Layout } from "antd";
import "./styles.css";

const { Footer } = Layout;

const CustomFooter: React.FC = () => (
  <Footer className="footer">
    {new Date().getFullYear()} - Created by{" "}
    <a href="https://github.com/roquiles" rel="noreferrer" target="_blank">
      roquiles
    </a>
  </Footer>
);

export default CustomFooter;
