import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

export interface SelectOption {
    label: string;
    value: string;
}
interface Props {
    value?: string;
    options: SelectOption[];
    size?: string
    onChange: (e:ChangeEvent<HTMLSelectElement>) => void;

}

const SelectWrapper = styled.div`
    position: relative;
`
const Select = styled.select`
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
    margin: 0;
    padding: 0.75rem 2.5rem 0.65rem 0.75rem;
    box-shadow: none;
    box-sizing: border-box;
    display: block;
    width: ${(props)=>props.size || '100%'};
    border: 1px solid #ddd;
    line-height: 1.06;
    cursor: pointer;
    & ::-ms-expand {
        display: none;
    }
`

const SelectBox = ({value, options, onChange, size}:Props) => {
    return (
        <SelectWrapper>
            <Select onChange={onChange}>
                {options.map(({value, label})=>(
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </Select>
        </SelectWrapper>
    )
}

export default SelectBox;