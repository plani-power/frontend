import React, { useState } from "react";
import styled from "styled-components";

type useRadioBtnPropsType = [
  checkRadioValue: string,
  renderChecks: () => JSX.Element
];

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
`;

const StyledLi = styled.li`
  display: flex;
  list-style-type: none;
`;
const InputWrapper = styled.div`
  height: 3rem;
  display: flex;
  flex-flow: row;
  margin-bottom: 1rem;
  gap: 50px;
`;

const StyledSpan = styled.span`
  vertical-align: middle;
`;
// const Radio = ({radioButtonList,labelName,initialCheck}:useRadioProps):useRadioBtnPropsType => {
const Radio = (
  radioButtonList: string[], // 라디오버튼 목록
  labelName: string, // 라디오버튼그룹 name
  initialCheck: string // 초기값
): useRadioBtnPropsType => {
  const getDefaultRadioButtons = () =>
    radioButtonList.map((radioBtn: string) => ({
      name: radioBtn,
      checked: false,
    }));

  const radioButtons = getDefaultRadioButtons();

  const [checkRadioValue, setCheckRadioValue] = useState(initialCheck);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selected = radioButtons.find((check) => check.name === value);
    if (selected) setCheckRadioValue(selected.name);
  };

  const renderChecks = () => (
    <InputWrapper>
      {radioButtons.map((radioBtn: any, index: any) => (
        <InputLabel key={index} htmlFor={radioBtn.name}>
          <StyledLi key={index}>
            <StyledInput
              type="radio"
              name={labelName}
              id={radioBtn.name}
              value={radioBtn.name}
              checked={radioBtn.name === checkRadioValue}
              onChange={handleChange}
            />
            <StyledSpan>{radioBtn.name}</StyledSpan>
          </StyledLi>
        </InputLabel>
      ))}
    </InputWrapper>
  );
  return [checkRadioValue, renderChecks];
};

export default Radio;
