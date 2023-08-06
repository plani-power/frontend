import React, { useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface DatePickerProps {
  date: Date;
  getDate: (date: Date) => void;
  type: string;
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: colors.$BG_COLOR;
  height: 100%;
  margin-top: 8px;
  padding: 0 12px 0 24px;
`;
const YearMonthTitle = styled.div`
  font-size: 1rem;
`;

const StyledButton = styled.button`
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin: 5px 7px 0px 0px;
`;

const DatePicker = ({ date, getDate, type }: DatePickerProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const calendar = useRef<ReactDatePicker>(null);

  // 취소버튼
  const cancelDatePicker = () => {
    // setCurrentDate(currentDate);
    if (calendar?.current) {
      calendar.current.setOpen(false);
    }
  };

  const openDatePicker = () => {
    if (calendar?.current) {
      calendar.current.setOpen(true);
    }
  };

  const onChange = (date: Date | null) => {
    if (date !== null) {
      setCurrentDate(date);
      getDate(date);
    }
  };

  if (type === "date") {
    return (
      <ReactDatePicker
        withPortal
        locale={ko}
        dateFormat="yyyy.MM.dd(eee)"
        selected={currentDate}
        minDate={new Date()}
        onChange={(date) => {
          onChange(date);
        }}
        // shouldCloseOnSelect={false}
        useWeekdaysShort={true}
        ref={calendar}
        onInputClick={() => openDatePicker()}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div>
            <ButtonWrapper>
              <StyledButton onClick={cancelDatePicker}>X</StyledButton>
            </ButtonWrapper>
            <HeaderWrapper>
              <div onClick={decreaseMonth}>
                <FaAngleLeft />
              </div>
              <YearMonthTitle>
                {getYear(date)}.{[getMonth(date) + 1]}
              </YearMonthTitle>

              <div onClick={increaseMonth}>
                <FaAngleRight />
              </div>
            </HeaderWrapper>
          </div>
        )}
      ></ReactDatePicker>
    );
  } else {
    return (
      <ReactDatePicker
        selected={currentDate}
        onChange={(date) => onChange(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        timeCaption="시간"
        dateFormat="h:mm aa"
      />
    );
  }
};

export default DatePicker;
