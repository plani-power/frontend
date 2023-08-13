import React, { forwardRef, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import styled, { createGlobalStyle } from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface DatePickerProps {
  name: string;
  date: Date;
  getDate: (name: string, date: Date) => void;
  type: string;
}

const TimePickerWrapper = createGlobalStyle`
  .react-datepicker__time-container {
      -moz-appearance: none;
      -webkit-appearance: none;
      -o-appearance: none;
      -ms-appearance: none;
      appearance: none;
      width:100%;
  }
  .react-datepicker-time__header{
    font-size: 1.2em;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    width:100%;
    font-size: 1.3em;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: var(--main-color);
    color: white;
    font-weightL bold;
    &:hover {
      background-color: var(--main-color);
    }
  }
`;

const DatePickerWrapperStyles = createGlobalStyle`
  .react-datepicker {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 0.8em;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(27, 37, 86, 0.16);
    overflow: hidden;
  }
  .react-datepicker__header {
    background-color : white;
    border-bottom: none;
    padding : 8px 0px 0px 0px;
  }
  .react-datepicker__day--selected {
    border-radius : 5em;
    background-color: var(--main-color)
  }
  .react-datepicker__day:hover {
    border-radius : 5em;
    background-color: var(--light-gray);
  }
  .react-datepicker__day--disabled:hover {
    background-color: transparent;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius : 5em;
    background-color: var(--light-gray);
  }
`;

const StyledInput = styled.input`
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
  border: 1px solid #ddd;
  line-height: 1.06;
  cursor: pointer;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: colors.$BG_COLOR;
  height: 100%;
  margin-top: 8px;
  padding: 0 12px;
  font-size: 1em;
  text-align: center;
`;

const ArrowWarpper = styled.div`
  display: inline-block;
  cursor: pointer;
`;
const YearMonthTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const CustomInput = forwardRef((props: any, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

const DatePicker = ({ date, getDate, type, name }: DatePickerProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const calendar = useRef<ReactDatePicker>(null);
  const inputRef = useRef(null);

  const openDatePicker = () => {
    if (calendar?.current) {
      calendar.current.setOpen(true);
    }
  };

  const onChange = (date: Date | null) => {
    if (date !== null) {
      setCurrentDate(date);
      getDate(name, date);
    }
  };

  if (type === "date") {
    return (
      <>
        <DatePickerWrapperStyles />
        <ReactDatePicker
          customInput={<CustomInput inputRef={inputRef} />}
          withPortal
          locale={ko}
          dateFormat="yyyy.MM.dd(eee)"
          selected={currentDate}
          minDate={new Date()}
          onChange={(date) => {
            onChange(date);
          }}
          useWeekdaysShort={true}
          ref={calendar}
          onInputClick={() => openDatePicker()}
          renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
            <div>
              <HeaderWrapper>
                <ArrowWarpper onClick={decreaseMonth}>
                  <FaAngleLeft />
                </ArrowWarpper>
                <YearMonthTitle>
                  {getYear(date)}년 {[getMonth(date) + 1]}월
                </YearMonthTitle>
                <ArrowWarpper onClick={increaseMonth}>
                  <FaAngleRight />
                </ArrowWarpper>
              </HeaderWrapper>
            </div>
          )}
        />
      </>
    );
  } else {
    return (
      <>
        <TimePickerWrapper />
        <ReactDatePicker
          withPortal
          customInput={<CustomInput inputRef={inputRef} />}
          selected={currentDate}
          onChange={(date) => onChange(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={5}
          timeCaption=""
          dateFormat="h:mm aa"
        />
      </>
    );
  }
};

export default DatePicker;
