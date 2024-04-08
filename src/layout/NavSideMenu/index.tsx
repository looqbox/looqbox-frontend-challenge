import { LeftCircleOutlined } from "@ant-design/icons";
import { Button, Menu, Skeleton, Space } from "antd";
import { useNavigate } from "react-router-dom";

import { useGetPokemonTypes } from "@/queries/pokemons";
import { getColorBySpecies } from "@/utils/theme";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import * as S from "./styles";

type NavSideMenuProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

export const NavSideMenu = ({ collapsed, setCollapsed }: NavSideMenuProps) => {
  const navigate = useNavigate();
  const { isLoading, data } = useGetPokemonTypes();

  const typesList =
    data?.results.map((type) => {
      const colorSpecie = getColorBySpecies(type.name);

      return {
        key: type.name,
        icon: (
          <img
            src={`/assets/svgs/species/${type.name}.svg`}
            alt={type.name}
            width={20}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/assets/svgs/icons/question-circle.svg";
            }}
          />
        ),
        label: type.name,
        style: {
          color: colorSpecie?.main,
        },
      } as ItemType<MenuItemType>;
    }) || [];

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
        onClick={({ key }) => {
          key === "all" ? navigate("/") : navigate(`/species/${key}`);
        }}
        items={[
          {
            key: "all",
            label: "all",
            icon: (
              <img src={`/assets/svgs/icons/pokeball-blue.svg`} alt="all" />
            ),
          },
          ...typesList,
        ]}
      />
      {isLoading ? (
        <S.SkeletonList>
          {[...Array(10)].map((_, index) => (
            <Skeleton.Button
              key={index}
              active
              style={{ width: "80%", height: "1rem", background: "#FFFFFF50" }}
            />
          ))}
        </S.SkeletonList>
      ) : null}
    </S.Container>
  );
};
