import { Card } from "antd";
import { Link } from "@tanstack/react-router";

import { LogoLayout } from "./logo.layout";
import { ThemeToggleLayout } from "./theme-toggler.layout";
import { LangSelectorLayout } from "./lang-selector.layout";

export function PageHeaderLayout() {
  return (
    <Card className="w-full px-4 py-3 lg:px-10 lg:py-5 rounded-t-none!">
      <div className="flex h-full justify-between items-center gap-2">
        <Link to="/">
          <LogoLayout />
        </Link>

        <div className="flex gap-4 w-200px">
          <LangSelectorLayout />
          <ThemeToggleLayout />
        </div>
      </div>
    </Card>
  );
}
