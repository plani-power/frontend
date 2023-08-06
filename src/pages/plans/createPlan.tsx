import React, { useState, useEffect, ChangeEvent } from "react";
import Input from "../../common/components/Input";
import Checkbox from "common/components/Checkbox";
import Radio from "common/components/Radio";
import styled from "styled-components";
import DatePicker from "common/components/DatePicker";
import SelectBox, { SelectOption } from "common/components/SelectBox";
import Button from "common/components/Button";

export interface PlanInputs {
  //   plan_id: string;
  plan_name: string;
  create_name: string;
  onoff_type: string;
  hashtag: string;
  is_public: boolean;
  status: string; // 대기중/모집중/진행중
  default_time: string;
  start_date: string; // DATE_TIME
  end_date: string; // DATE_TIME
  max_member_num?: number; // -1:제한없음
  gender: string; // null:제한x f:여성만 m:남성만
  birth_year: string;
  plan_pwd: string;
}
// style
const InputWrapper = styled.div`
  height: 3rem;
  display: flex;
  flex-flow: row;
  margin-bottom: 1rem;
  gap: 50px;
`;

const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin: 20px 0 6px;
`;

const StyledTextArea = styled.textarea`
  width: 250px;
  height: 200px;
  resize: none;
  display: block;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreatePlan = () => {
  const [planInput, setPlanInputs] = useState<PlanInputs>({
    plan_name: "",
    create_name: "",
    onoff_type: "",
    hashtag: "",
    is_public: true,
    status: "", // 대기중/모집중/진행중
    start_date: "", // DATE_TIME
    end_date: "", // DATE_TIME
    birth_year: "",
    default_time: "",
    gender: "",
    plan_pwd: "",
    max_member_num: -1,
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleChangeInput");
    console.log(e.target.name);
    console.log(e.target.value);
    setPlanInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkedItemHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems((prev) => [...prev, id]);
      return;
    }
    if (!isChecked && checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
      return;
    }
    return;
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setIsChecked(!isChecked);
    checkedItemHandler(id, e.target.checked);
  };

  const radioLabel = ["공개", "비공개"];
  const [isPublic, setIsPublic] = useState("공개");
  const [publicValue, renderPublicChecks] = Radio(
    radioLabel,
    "isPublic",
    isPublic
  );

  useEffect(() => {
    setIsPublic(publicValue === "공개" ? "공개" : "비공개");
  }, [isPublic, publicValue]);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const getStartDate = (start: Date) => {
    setStartDate(start);
  };

  const getEndDate = (end: Date) => {
    setEndDate(end);
  };

  const [textValue, setTextValue] = useState("");

  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());

  const getStartTime = (time: Date) => {
    setStartTime(time);
  };

  const getEndTime = (time: Date) => {
    setEndTime(time);
  };

  const sidoList = [
    "강원특별자치도",
    "경기도",
    "경상북도",
    "경상남도",
    "광주광역시",
    "대구광역시",
    "대전광역시",
    "서울특별시",
  ];
  const options: SelectOption[] = [
    { label: "선택", value: "" },
    ...sidoList.map((sido) => ({ label: sido, value: sido })),
  ];
  const [sido, setSido] = useState("");
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSido(event.target.value);
  };

  const keywordList = ["공부", "취준", "운동", "보드게임"];
  const keywordOptions: SelectOption[] = [
    { label: "선택", value: "" },
    ...keywordList.map((keyword) => ({ label: keyword, value: keyword })),
  ];
  const [keyword, setKeyword] = useState("");
  const onChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
    setKeyword(event.target.value);
  };

  const buttonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("버튼 클릭");
  };

  return (
    <div>
      <p>플랜 생성하기 페이지</p>
      <Input
        name="plan_name"
        type="text"
        label="플랜명"
        value={planInput.plan_name}
        onChange={handleChangeInput}
        placeholder="플랜명을 입력하세요"
      />
      <StyledSpan>시작일과 종료일</StyledSpan>
      <InputWrapper>
        <DatePicker
          date={startDate}
          getDate={(date) => getStartDate(date)}
          type="date"
        ></DatePicker>
        <DatePicker
          date={endDate}
          getDate={(date) => getEndDate(date)}
          type="date"
        ></DatePicker>
      </InputWrapper>
      <StyledSpan>모임타임</StyledSpan>
      <InputWrapper>
        <Checkbox
          id="online"
          onChange={(e) => checkHandler(e, "online")}
          checked={checkedItems.includes("online")}
          label="온라인"
        />
        <Checkbox
          id="offline"
          onChange={(e) => checkHandler(e, "offline")}
          checked={checkedItems.includes("offline")}
          label="오프라인"
        />
      </InputWrapper>
      <StyledSpan>모임 시간대</StyledSpan>
      <InputWrapper>
        <Checkbox
          id="allDay"
          onChange={(e) => checkHandler(e, "allDay")}
          checked={checkedItems.includes("allDay")}
          label="기본시간(all day)"
        />
      </InputWrapper>
      <StyledSpan>시작시간과 종료시간</StyledSpan>
      <InputWrapper>
        <DatePicker
          date={startTime}
          getDate={(date) => getStartTime(date)}
          type="time"
        ></DatePicker>
        <DatePicker
          date={endTime}
          getDate={(date) => getEndTime(date)}
          type="time"
        ></DatePicker>
      </InputWrapper>
      <StyledSpan>공개여부</StyledSpan>
      <InputWrapper>{renderPublicChecks()}</InputWrapper>
      <Input
        name="plan_pwd"
        type="text"
        label="비밀번호"
        value={planInput.plan_pwd}
        onChange={handleChangeInput}
        placeholder="비밀번호를 입력하세요"
      />
      <StyledSpan>소개글</StyledSpan>
      <StyledTextArea
        name="introduction"
        cols={30}
        rows={5}
        placeholder="플랜 소개를 입력하세요"
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
        maxLength={500}
      />
      <Input
        name="hashtag"
        type="text"
        label="해시태그"
        value={planInput.hashtag}
        onChange={handleChangeInput}
        placeholder="해시태그를 입력하세요"
      />
      <StyledSpan>모임지역</StyledSpan>
      <ButtonWrapper>
        <SelectBox
          size={49}
          options={options}
          value={sido}
          onChange={(e) => onChange(e)}
        ></SelectBox>
        <SelectBox
          size={49}
          options={options}
          value={sido}
          onChange={(e) => onChange(e)}
        ></SelectBox>
      </ButtonWrapper>
      <StyledSpan>모임타입</StyledSpan>
      <SelectBox
        options={keywordOptions}
        value={keyword}
        onChange={(e) => onChangeType(e)}
      ></SelectBox>
      <ButtonWrapper>
        <Button
          color="grey"
          size="md"
          disabled={false}
          onClick={(e) => buttonClick(e)}
        >
          취소
        </Button>
        <Button
          color="yellow"
          size="md"
          disabled={false}
          onClick={(e) => buttonClick(e)}
        >
          생성
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default CreatePlan;
