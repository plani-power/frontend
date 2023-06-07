import React, {useRef, useState} from "react";
import ReactDatePicker from 'react-datepicker'
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import styled from "styled-components";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

const DatePicker = () => {
    const [currentDate, setCurrentDate] = useState<Date | null>(new Date());
    const calendar = useRef<ReactDatePicker>(null)
   
    // 취소버튼
    const cancelDatePicker = () => {
        // setCurrentDate(currentDate);
        if(calendar?.current){
            calendar.current.setOpen(false);
        }
        
    }

    const openDatePicker  = () => {
        if(calendar?.current){
            calendar.current.setOpen(true);
        }
        
    }

    // 선택버튼
    const closeDatePicker = () => {
        setCurrentDate(currentDate);
        if(calendar?.current){
            calendar.current.setOpen(false);
        }
    }

    const HeaderWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: colors.$BG_COLOR;
        height: 100%;
        margin-top: 8px;
        padding: 0 12px 0 24px;
    `
    const YearMonthTitle = styled.div`
        font-size: 1rem;
    `

    const StyledButton = styled.div`
        /* 공통 스타일 */
        display: inline-flex;
        outline: none;
        border: none;
        border-radius: 4px;
        color: black;
        font-weight: bold;
        cursor: pointer;
        padding-left: 1rem;
        padding-right: 1rem;
    `

    return (

        <ReactDatePicker
            withPortal
            locale={ko}
            dateFormat='yyyy.MM.dd(eee)'
            selected={currentDate}
            onChange={(date) => setCurrentDate(date)}
            // shouldCloseOnSelect={false}
            useWeekdaysShort={true}
            ref={calendar}
            onInputClick={() => openDatePicker()}
            renderCustomHeader={({    
                date,
                decreaseMonth,
                increaseMonth,
            })=>(
                <div>
                    <div>
                        <button onClick={cancelDatePicker}>X</button>
                    </div>
                    <HeaderWrapper>
                        
                        <div
                            // className="btn_month btn_month-prev"
                            onClick={decreaseMonth}
                        >
                            <FaAngleLeft />
                        </div>
                        <YearMonthTitle>
                            {getYear(date)}.{[getMonth(date)]}
                        </YearMonthTitle>
                            
                        <div
                            // className="btn_month btn_month-next"
                            onClick={increaseMonth}
                        >
                            <FaAngleRight />
                        </div>
                    </HeaderWrapper>
                </div>
            )}
            >
            
        </ReactDatePicker>

    )
}

export default DatePicker;