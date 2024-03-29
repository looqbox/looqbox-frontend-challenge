import React from "react";
import { Breadcrumb } from "antd";
import { useParams } from "react-router-dom";
import Page from "../components/Page";

const Character: React.FC = () => {
  const { character } = useParams();

  return (
    <Page>
      <Breadcrumb
        items={[{ title: <a href="/">Home</a> }, { title: character }]}
        style={{ marginBottom: "24px" }}
      />
    </Page>
  );
};

export default Character;
