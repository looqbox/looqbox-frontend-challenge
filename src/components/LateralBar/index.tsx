import "./index.css";
import { Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { changeFilter } from "@/store/slices/pokemonSlice";
import { useAppDispatch } from "@/hooks/hooks";
import { useState } from "react";

const LateralBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filterText, setFilterText] = useState("");

  return (
    <div className="lateralBar">
      <img className="pokeballLogo" src="pokeball-logo.png" />
      <Typography.Title style={{ color: "white", zIndex: 1 }} level={2}>
        Which pokemon are you looking for?
      </Typography.Title>
      <Input
        placeholder="Search Pokemon"
        style={{ borderRadius: 16, borderColor: "#fff" }}
        prefix={<SearchOutlined style={{ fontSize: 18, fontWeight: "bold" }} />}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            dispatch(changeFilter(filterText));
          }
        }}
        onChange={(event) => {
          setFilterText(event.target.value);
        }}
      />
    </div>
  );
};

export default LateralBar;
