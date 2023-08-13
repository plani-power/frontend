import React, { ChangeEvent } from "react";
import styled from "styled-components";

export type InputValue = string | number | ReadonlyArray<string>;
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
export type InputPplaceholder = string;

export type InputProps = {
  name: string;
  value: string | number | ReadonlyArray<string>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  type: "text" | "email" | "password" | "number";
};

// style
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  display: block;
  margin: 6px 0px 0px 0px;
`;

const InputStyled = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: inherit;
  line-height: 1.06;
  margin: 8px 0px 8px 0px;
  padding: 0.75rem 0.75rem 0.65rem 0.75rem;

  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  /* Firefox  */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`;

const Input = ({
  label,
  value,
  onChange,
  type,
  placeholder,
  name,
}: InputProps) => {
  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <InputContainer>
        <InputStyled
          name={name}
          type={type ? type : "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </InputContainer>
    </InputWrapper>
  );
};

export default Input;
