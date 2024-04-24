import { Button, Divider, Dropdown, Flex, Space } from "antd";
import { Dispatch, cloneElement } from "react";
import { useGetPokemonHabitatsListQuery } from "../state/services/pokemon";

export default function ListSorter({
    setSelectedHabitat,
  }: {
    setSelectedHabitat: Dispatch<string>;
  }) {
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
  
    if (habitatListError) return <p>Error loading sort</p>
    return (
      <Flex>
        <Dropdown
          menu={{
            items,
            selectable: true,
            onSelect: ({ key }) => {
              setSelectedHabitat(habitatList?.results?.[Number(key)].name ?? "");
            },
          }}
          placement="bottom"
          dropdownRender={(menu) => (
            <div style={contentStyle}>
              {cloneElement(menu as React.ReactElement, { style: menuStyle })}
              <Divider style={{ margin: 0 }} />
              <Space style={{ padding: 8 }}>
                <Button type="default" onClick={() => setSelectedHabitat("")}>
                  Clear
                </Button>
              </Space>
            </div>
          )}
        >
          <Button>Habitats</Button>
        </Dropdown>
      </Flex>
    );
  }
  