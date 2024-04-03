import styled, { css } from "styled-components";
import { Card } from "antd";

export const Wrapper = styled(Card)`
  border-radius: 1rem;
  width: 100%;
`;

export const Title = styled.div`
  align-content: center;
  border-radius: 1rem 1rem 0 0;
  height: 3rem;
  text-align: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.background.template};
    border: solid 0.1rem ${theme.colors.text.black};
    color: ${theme.colors.text.black};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Content = styled.div`
  align-items: center;
  display: grid;
  justify-content: center;
`;

export const Image = styled.div<{ $inputColor?: string }>`
  align-items: center;
  border-radius: 5rem;
  display: flex;
  height: 10rem;
  justify-items: center;
  width: 10rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.background.template};
    border: solid 0.1rem ${theme.colors.text.black};
  `}
`;

export const SectionType = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const TagType = styled.div`
  border-radius: 2rem;
  padding: 0.25rem 1rem;

  ${({ theme }) => css`
    border: solid 0.1rem ${theme.colors.text.black};
  `}
`;

