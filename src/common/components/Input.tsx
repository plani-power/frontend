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
  label: string;
  type: "text" | "email" | "password";
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
  margin: 20px 0 6px;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  font-size: 1rem;
  line-height: 30px;
  border-radius: 3px;
  padding-left: 10px;
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
      <InputLabel>{label}</InputLabel>
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
