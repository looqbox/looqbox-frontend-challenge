import { Button } from "antd/lib";

type ButtonProps = {
        children: React.ReactNode,
        styleType?: "link" | "text" | "default" | "primary" | "dashed",
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function ButtonComponent({children, styleType, ...props}: ButtonProps) {
  return (
    <Button {...props} type={styleType}>
      {children}
    </Button>
  );
}