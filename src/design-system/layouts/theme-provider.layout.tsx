import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";

import { useTheme } from "@/core/hooks/useTheme";
import { getTheme } from "../config";

export function ThemeProviderLayout({ children }: PropsWithChildren) {
  const { mode } = useTheme();

  return <ConfigProvider theme={getTheme(mode)}>{children}</ConfigProvider>;
}
