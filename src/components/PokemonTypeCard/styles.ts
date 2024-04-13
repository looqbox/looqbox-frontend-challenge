import styled from "styled-components";

export interface StatusProps {
  colorType: string;
  isSelected: boolean;
}

export const StyledContainer = styled.button<StatusProps>`
  background-color: ${(props) =>
    props.isSelected ? props.colorType : `#060F39`};

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: 0.3s;

  p {
    color: ${(props) => props.theme.white};
    font-size: 1rem;
    line-height: 1.5;

    text-transform: capitalize;
  }

  svg path {
    transition: 0.3s;
    fill: ${(props) =>
      props.isSelected ? props.theme.white : props.colorType};
  }

  &:hover {
    border: 1px solid ${(props) => props.colorType};
  }
`;
