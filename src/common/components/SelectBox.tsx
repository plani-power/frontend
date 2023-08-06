import React, { ChangeEvent } from "react";
import styled from "styled-components";

export interface SelectOption {
  label: string;
  value: string;
}
interface Props {
  name: string;
  value?: string;
  options: SelectOption[];
  size?: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface StyledSelectProps {
  readonly sizeStyle: number;
}

const Select = styled.select<StyledSelectProps>`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
  appearance: none;
  border-radius: 4px;
  vertical-align: middle;
  font-size: inherit;
  color: inherit;
  box-sizing: content-box;
  margin: 8px 0px 8px 0px;
  padding: 0.75rem 2.5rem 0.65rem 0.75rem;
  box-shadow: none;
  box-sizing: border-box;
  display: block;
  width: ${(props) => `${props.sizeStyle}%`};
  border: 1px solid #ddd;
  line-height: 1.06;
  cursor: pointer;
  & ::-ms-expand {
    display: none;
  }
`;

const SelectBox = ({ value, options, onChange, size = 100, name }: Props) => {
  return (
    <Select onChange={onChange} sizeStyle={size} name={name}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;
