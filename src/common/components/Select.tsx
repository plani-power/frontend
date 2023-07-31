import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { InputValue } from './Input';

export type SelectValue = InputValue;
export type SelectChangeEvent = ChangeEvent<HTMLInputElement>;

export type SelectOption = {
    title: string,
    value: string,
    selected: boolean
}
export type SelectProps = {
    value: SelectValue;
    onChange : SelectChangeEvent;
    placeholder ?: string;
    label: string;
    optoins: SelectOption[]
}


const Select  = ({label, value, onChange, placeholder, optoins}:SelectProps)=> {
    return (
        <select>
            {optoins.map((option) => <option key={option.value} value={option.value} selected={option.selected}>{option.title}</option>)}
        </select>
    )
}


export default Select;