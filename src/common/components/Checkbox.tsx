import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

// style
const StyledInput = styled.input`
    display: flex;
    appearance: none;
    width 1.5rem;
    height: 1.5rem;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;
    cursor: pointer;

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: blue;
    }
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  user-selct: none;
  margin-right: 4.5rem;
`;

const StyledSpan = styled.span`
  vertical-align: middle;
  margin-left: 0.4rem;
`;

const Checkbox = ({ id, checked, onChange, label }: CheckboxProps) => {
  return (
    <InputLabel htmlFor={id}>
      <StyledInput
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <StyledSpan>{label}</StyledSpan>
    </InputLabel>
  );
};

export default Checkbox;
