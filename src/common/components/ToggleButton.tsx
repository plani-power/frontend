import React, { useState } from "react";
import styled from "styled-components";

type useToggleBtnPropsType = {
    value: string,
    checked: boolean,
    renderToggle: () => JSX.Element
}

const ToggleBtn = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
    span.toggle-label {
        text-sizeL 14px;
        color: var(--black);
    }
    input[type='checkbox'] {
        display: none;
    }
    input[type='checkbox'] + label {
        display: flex;
        width: 60px;
        height: 100%;
        align-items: center;
        padding: 4px;
        border-radius: 30px;
        background-color: var(--light-gray);
    }
    input[type='checkbox']:checked + label {
        background-color: var(--main-color);
    }
    input[type='checkbox'] + label .circle {
        width: 24px;
        height: 24px;
        border-radius: 50px;
        background-color: white;
        margin-left: auto;
        transition: all 1s ease;
        
    }
    input[type='checkbox']:checked + label .circle {
        transform: translate(-28px)
    }
`

const ToggleButton = (value: string, labelName: string, checked: boolean = true): useToggleBtnPropsType => {
    
    const id = `check-${value}`;

    const [checkedBtn, setCheckedBtn] = useState(checked)
    const handleOnCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }
    const renderToggle = () => (
        <>
            <ToggleBtn>
                <span className="toggle-label">{labelName}</span>
                <input type="checkbox" id={id} value={value} onChange={handleOnCheck}/>
                <label htmlFor={id}>
                    <span className='circle'/>
                </label>
            </ToggleBtn>
        </>
    )
    return {value, checked: checkedBtn, renderToggle}
};

export default ToggleButton;