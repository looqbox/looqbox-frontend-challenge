import { Button, Divider, Dropdown, Flex, Space } from "antd";
import { cloneElement, useState } from "react";
import { useGetPokemonHabitatsListQuery } from "../state/services/pokemon";
import useQueryParams from "../hooks/useQueryParams";

export default function ListSorter() {
  const { setParams } = useQueryParams();
  const [selected, setSelected] = useState<string[]>([]);
  const { data: habitatList, error: habitatListError } =
    useGetPokemonHabitatsListQuery();

  const items = habitatList?.results.map((result, i) => ({
    key: i,
    label: result.name,
  }));

  const contentStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "10px 12px 10px -15px rgba(0,0,0,0.75)",
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
  };

  if (habitatListError) return <p>Error loading sort</p>;
  return (
    <Flex
      style={{
        height: "80px",
        minWidth: "400px",
        border: "1px solid lightGrey",
        borderRadius: "8px",
      }}
      justify="center"
      align="center"
      vertical
      gap="12px"
    >
      <p style={{ fontWeight: "bold" }}>Filter</p>
      <Flex>
        <Dropdown
          menu={{
            items,
            selectable: true,
            onSelect: ({ key }) => {
              const habitatName =
                habitatList?.results?.[Number(key)].name ?? "";
              setSelected([key]);
              setParams("habitat", habitatName);
              setParams("page", 1);
            },
            selectedKeys: selected,
          }}
          placement="bottom"
          dropdownRender={(menu) => (
            <div style={contentStyle}>
              {cloneElement(menu as React.ReactElement, { style: menuStyle })}
              <Divider style={{ margin: 0 }} />
              <Space style={{ padding: 8 }}>
                <Button
                  type="default"
                  onClick={() => {
                    setParams(`page`, 1);
                    setSelected([]);
                  }}
                >
                  Clear
                </Button>
              </Space>
            </div>
          )}
        >
          <Button>Habitats</Button>
        </Dropdown>
      </Flex>
    </Flex>
  );
}
