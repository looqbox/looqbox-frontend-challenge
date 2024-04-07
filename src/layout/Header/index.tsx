import { Switch } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";

import { Theme } from "@/@types/theme";

type HeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const Header = ({ theme, toggleTheme }: HeaderProps) => {
  return (
    <AntdHeader style={{ padding: 0 }}>
      <Switch
        checkedChildren="On"
        unCheckedChildren="Off"
        checked={theme.type === "dark"}
        onChange={toggleTheme}
      />
    </AntdHeader>
  );
};
