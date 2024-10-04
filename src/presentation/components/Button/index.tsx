import { Button } from "antd";

interface ButtonComponentProps {
  isDisabled: boolean;
  text: string;
  handleClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({isDisabled, text, handleClick}) => {
  return (
    <Button type="primary" onClick={handleClick} disabled={isDisabled}>
      {text}
    </Button>
  )
}

export default ButtonComponent;