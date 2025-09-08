import { useTheme } from "@/core/hooks/useTheme";
import { Flex, Select } from "antd";
import { Computer, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ThemeToggleLayout() {
  const { t } = useTranslation();
  const { setTheme, theme } = useTheme();

  const onChangeTheme = (value: string) =>
    setTheme(value as "light" | "dark" | "system");

  return (
    <Select
      className="w-30"
      defaultValue="system"
      onChange={onChangeTheme}
      value={theme}
    >
      <Select.Option value="light">
        <Flex gap={5} align="center" justify="flex-start">
          <Sun /> {t("common.light")}
        </Flex>
      </Select.Option>
      <Select.Option value="dark">
        <Flex gap={5} align="center" justify="flex-start">
          <Moon /> {t("common.dark")}
        </Flex>
      </Select.Option>
      <Select.Option value="system">
        <Flex gap={5} align="center" justify="flex-start">
          <Computer /> {t("common.system")}
        </Flex>
      </Select.Option>
    </Select>
  );
}
