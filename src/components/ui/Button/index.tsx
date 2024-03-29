import { Button } from "antd/lib";

type ButtonProps = {
        children: React.ReactNode,
        type?: "link" | "text" | "default" | "primary" | "dashed",
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function ButtonComponent({children, ...props}: ButtonProps) {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
}