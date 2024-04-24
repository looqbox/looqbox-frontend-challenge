import { Button, Divider, Dropdown, Flex, Space } from "antd";
import { Dispatch, cloneElement, useState } from "react";
import { useGetPokemonHabitatsListQuery } from "../state/services/pokemon";
import { useDispatch } from "react-redux";
import { setPage } from "../state/services/paginationSlice";

export default function ListSorter({
  setSelectedHabitat,
}: {
  setSelectedHabitat: Dispatch<string>;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useDispatch();
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
      <p style={{fontWeight: 'bold'}}>Filter</p>
      <Flex>
        <Dropdown
          menu={{
            items,
            selectable: true,
            onSelect: ({ key }) => {
              setSelected([key]);
              setSelectedHabitat(
                habitatList?.results?.[Number(key)].name ?? ""
              );
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
                    dispatch(setPage(1));
                    setSelectedHabitat("");
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
