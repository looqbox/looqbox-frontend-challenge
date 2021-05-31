import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Rodape = (props) => (
  <Navbar
    fixed="bottom"
    variant="light"
    style={{ color: "white", background: "#666", marginBottom: 0 }}
  >
    <Link className="navbar-brand" to="/about">
      <h1 style={{ color: "black" }}>About</h1>
    </Link>
  </Navbar>
);
