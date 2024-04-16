import { Flex } from "rebass";
import styled, { css } from "styled-components";

interface IInputDropdownItem {
  active: boolean;
}

export const RelativeContainer = styled.div`
  position: relative;
`;

export const LabelText = styled.span`
  letter-spacing: -0.005em;
  font-size: 14px;
  color: #cccccc;
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

export const StyledInput = styled.input`
  height: 48px;
  width: 100%;
  background: #fff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 8px;
  letter-spacing: -0.005em;
  color: #142159;
  padding: 14px 16px 12px 16px;

  &:hover {
    border: 1px solid #cccccc;
  }

  &:focus {
    border: 1.2px solid #cccccc;
    outline: none;
  }

  &:focus-visible {
    border: 1.2px solid #cccccc;
    outline: none;
  }


  &::placeholder {
    // placeholder
  }

  &:disabled {
    border: 1px solid #cccccc;
    background: #eeeeef;
  }

  &[data-has-error="true"] {
    border: 1px solid #cd3131;

    &:hover,
    &:focus {
      border: 1px solid #cd3131;
    }
  }

  padding-left: 46px;

  /* transition: all 0.1s linear; */
`;

export const HelperText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #cccccc;

  &[data-has-error="true"] {
    color: #cd3131;
  }

  text-decoration: ${({ onClick }) => (onClick ? "underline" : "none")};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
`;

export const DropdownWrapper = styled.div<{ opened?: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  gap: 2px;

  width: 100%;
  max-height: 450px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  background: #ffffff;
  padding: 2px;

  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24);
  border-radius: 8px;

  opacity: ${({ opened }) => (opened ? 1 : 0)};
  
  pointer-events: ${({ opened }) => (opened ? "all" : "none")};

  transition: opacity 0.1s linear;
  z-index: 9999;
`;

export const DropdownItem = styled.div<IInputDropdownItem>`
  padding: 12px 16px !important;
  letter-spacing: -0.005em;

  background: #ffffff;
  border-radius: 6px;

  &:hover {
    background: #eeeeef;
  }

  ${({ active }) =>
    active &&
    css`
      background: #e6e6e6;
    `}

  cursor: pointer;
  transition: background 0.1s linear;
`;

export const LeftIcon = styled(Flex)`
  left: 7px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};

  padding: 3px;
`;

export const RightIcon = styled(Flex)`
  right: 7px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};

  padding: 3px;
`;
