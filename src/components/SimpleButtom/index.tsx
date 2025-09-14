import * as S from './styles';

type Props = {
  width?: string;
  height?: string;
  text: string;
  color?: string;
  position?: string;
  borderRadius?: string;
  active?: boolean;
  icon?: string;
  sizeIcon?: string;
  fontSize?: string;
  borderColor?: string;
  disabled?: boolean;
  onClick?: () => void;
};

function SimpleButton({
  width,
  height,
  text,
  color,
  position,
  borderRadius,
  icon,
  sizeIcon,
  fontSize,
  borderColor,
  active,
  disabled,
  onClick,
}: Props) {
  return (
    <S.Button
      $width={width}
      $height={height}
      $color={color}
      $position={position}
      $borderRadius={borderRadius}
      $borderColor={borderColor}
      $active={active}
      $fontSize={fontSize}
      $disabled={disabled}
      onClick={onClick}
    >
      {icon && <S.Icon $sizeIcon={sizeIcon} src={icon} alt="Icon" />}
      {text}
    </S.Button>
  );
}

export default SimpleButton;
