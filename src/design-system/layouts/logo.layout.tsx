import { useTheme } from "@/core/hooks/useTheme";
import { LogoDark, LogoLight } from "../icons/logo";

export function LogoLayout() {
  const { mode } = useTheme();

  if (mode === "light") return <LogoLight />;

  return <LogoDark />;
}
