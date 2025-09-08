import type React from "react";
import { Button, Flex } from "antd";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { cn } from "@/core/utils/styles";
import { useTranslation } from "react-i18next";

type ContainerLayoutProps = {
  className?: string;
  goBackPath?: string;
  children: React.ReactNode;
};

export function ContainerLayout({
  children,
  className,
  goBackPath,
}: ContainerLayoutProps) {
  const { t } = useTranslation();

  return (
    <Flex
      className={cn("px-2! lg:px-20! w-full flex-1 flex-col gap-4", className)}
    >
      {!!goBackPath && (
        <Link to={goBackPath} className="w-fit">
          <Button variant="link">
            <ArrowLeft />
            {t("common.return")}
          </Button>
        </Link>
      )}

      {children}
    </Flex>
  );
}
