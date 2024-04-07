import { LeftCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Menu, Space } from "antd";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

type NavSideMenuProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

export const NavSideMenu = ({ collapsed, setCollapsed }: NavSideMenuProps) => {
  const navigate = useNavigate();

  return (
    <S.Container
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sider"
    >
      <Space direction="horizontal">
        {!collapsed ? <h2>SPECIES</h2> : null}
        <Button
          type="text"
          id="collapse-button"
          onClick={() => setCollapsed(!collapsed)}
        >
          <LeftCircleOutlined size={24} />
        </Button>
      </Space>
      <Menu
        className="menu"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "all",
            icon: <UserOutlined />,
            label: "all",
            onClick: () => navigate("/"),
          },
          {
            key: "type",
            icon: <UserOutlined />,
            label: "type",
            onClick: () => navigate("/type"),
          },
        ]}
      />
    </S.Container>
  );
};
