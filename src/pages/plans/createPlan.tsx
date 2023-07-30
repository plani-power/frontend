import React, { useState, useEffect } from 'react';
import Input from '../../common/components/Input'
import Checkbox from 'common/components/Checkbox';
import Radio from 'common/components/Radio';
import styled from 'styled-components';
import DatePicker from 'common/components/DatePicker';

// style
const InputWrapper = styled.div`
height: 3rem;
display: flex;
flex-flow:row;
margin-bottom: 1rem;
gap:50px;
`;

const StyledSpan = styled.span`
font-weight: 400;
font-size: 14px;   
margin: 20px 0 6px; 
`

const StyledTextArea = styled.textarea`
width: 250px;
height: 200px;
resize: none;
display: block;
`

const CreatePlan = () => {
    const [planName, setPlanName] = useState<string>('');
    const [hashtag, setHashtag] = useState<string>('');
    const changePlanName = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setPlanName(e.target.value);
    }
    const changeHashtag = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setHashtag(e.target.value);
    }

    const [checkedItems, setCheckedItems] = useState<string[]>([])
    const [isChecked, setIsChecked] = useState<boolean>(false);


    const checkedItemHandler = (id:string, isChecked:boolean) => {
        if(isChecked){
            setCheckedItems((prev)=>[...prev, id]);
            return;
        }
        if(!isChecked && checkedItems.includes(id)){
            setCheckedItems(checkedItems.filter((item)=>item !== id));
            return;
        }
        return;
    };

    const checkHandler = (e:React.ChangeEvent<HTMLInputElement>, id:string)=>{
        setIsChecked(!isChecked);
        checkedItemHandler(id, e.target.checked);
    };

    const radioLabel = ['공개', '비공개'];
    const [isPublic, setIsPublic] = useState('공개');
    const [publicValue, renderPublicChecks] = Radio(
        radioLabel,
        'isPublic', 
        isPublic
      );

    useEffect(()=>{
        setIsPublic(publicValue === '공개' ? '공개' : '비공개');
    }, [isPublic, publicValue])

    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());

    const getStartDate = (start:Date) => {
        setStartDate(start);
    }

    const getEndDate = (end:Date) => {
        setEndDate(end);
    }

    const [textValue, setTextValue] = useState('');

    const [startTime, setStartTime] = useState<Date>(new Date());
    const [endTime, setEndTime] = useState<Date>(new Date());

    const getStartTime = (time:Date) => {
        setStartTime(time);
    }

    const getEndTime = (time:Date) => {
        setEndTime(time);
    }

    return (
        <div>
            <p>
                플랜 생성하기 페이지
            </p>
            <Input type='text' label='플랜명' value={planName} onChange={changePlanName} placeholder='플랜명을 입력하세요'/>
            <StyledSpan>시작일과 종료일</StyledSpan>
            <InputWrapper>
                <DatePicker date={startDate} getDate={(date)=>getStartDate(date)} type='date'></DatePicker>
                <DatePicker date={endDate} getDate={(date)=>getEndDate(date)} type='date'></DatePicker>
            </InputWrapper>
            <StyledSpan>모임타임</StyledSpan>
            <InputWrapper>
                <Checkbox id='online' onChange={(e)=>checkHandler(e, 'online')} checked={checkedItems.includes('online')} label='온라인'/>
                <Checkbox id='offline' onChange={(e)=>checkHandler(e, 'offline')} checked={checkedItems.includes('offline')} label='오프라인'/>
            </InputWrapper>
            <StyledSpan>모임 시간대</StyledSpan>
            <InputWrapper>
                <Checkbox id='allDay' onChange={(e)=>checkHandler(e, 'allDay')} checked={checkedItems.includes('allDay')} label='기본시간(all day)'/>
            </InputWrapper>
            <StyledSpan>시작시간과 종료시간</StyledSpan>
            <InputWrapper>
                <DatePicker date={startTime} getDate={(date)=>getStartTime(date)} type='time'></DatePicker>
                <DatePicker date={endTime} getDate={(date)=>getEndTime(date)} type='time'></DatePicker>
            </InputWrapper>
            <StyledSpan>공개여부</StyledSpan>
            <InputWrapper>
                {renderPublicChecks()}
            </InputWrapper>
            <StyledSpan>소개글</StyledSpan>
            <StyledTextArea name='introduction' cols={30} rows={5} placeholder='플랜 소개를 입력하세요' value={textValue} onChange={(e)=>{setTextValue(e.target.value)}} maxLength={500} />
            <Input type='text' label='해시태그' value={hashtag} onChange={changeHashtag} placeholder='해시태그를 입력하세요'/>
        </div>
    )
}

export default CreatePlan;