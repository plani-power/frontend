import React from "react";
import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
    width: 49%;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
    width: 100%;
  `,
};

const COLOR = {
  yellow: css`
    --button-bg-color: var(--main-color);
    --button-hover-bg-color: #bfa92a;
  `,
  grey: css`
    --button-bg-color: var(--light-gray);
    --button-hover-bg-color: #b5b5b5;
  `,
};

interface StyledButtonProps {
  readonly sizeStyle: "sm" | "md" | "lg";
  readonly colorStyle: "yellow" | "grey";
}

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color: "yellow" | "grey";
  disabled?: boolean;
  size: "sm" | "md" | "lg";
}

// style
const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => SIZES[props.sizeStyle]}
  ${(props) => COLOR[props.colorStyle]}

  margin: 8px 0px 8px 0px;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--black);
  background: var(--button-bg-color, var(--main-color));

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #bfa92a);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #4d4d4);
  }
`;

const Button = ({ onClick, children, color, disabled, size }: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={size}
      colorStyle={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
