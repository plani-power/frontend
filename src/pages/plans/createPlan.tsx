import React, { useState, useEffect } from "react";
import Input from "../../common/components/Input";
import Checkbox from "common/components/Checkbox";
import Radio from "common/components/Radio";
import styled from "styled-components";
import DatePicker from "common/components/DatePicker";
import SelectBox, { SelectOption } from "common/components/SelectBox";
import Button from "common/components/Button";
import Bottomsheet from "common/components/BottomSheet";

export interface PlanInputs {
  //   plan_id: string;
  plan_name: string;
  create_name: string;
  onoff_type: string;
  hashtag: string;
  is_public: boolean;
  default_time: string;
  start_date: Date; // DATE_TIME
  end_date: Date; // DATE_TIME
  max_member_num: number; // -1:제한없음
  gender: string; // null:제한x f:여성만 m:남성만
  birth_year: string;
  plan_pwd: string;
  // 임시
  sido: string;
  gugun: string;
  keyword: string;
  start_time: Date; // 시작시간
  end_time: Date; // 종료시간
  introduction: string; // 소개글
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
  width: 100%;
  height: 200px;
  resize: none;
  display: block;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

//
const StyledConditionEntry = styled.div`
  width: 420px;
  padding: 2.2rem 2rem 1.8rem 2rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
`;

const CreatePlan = () => {
  const [planInput, setPlanInputs] = useState<PlanInputs>({
    plan_name: "",
    create_name: "",
    onoff_type: "", // 'online' 'offline' 'onoff'
    hashtag: "",
    is_public: true,
    start_date: new Date(), // DATE_TIME
    end_date: new Date(), // DATE_TIME
    birth_year: "",
    default_time: "",
    gender: "",
    plan_pwd: "",
    max_member_num: 0,
    sido: "",
    gugun: "",
    keyword: "",
    start_time: new Date(),
    end_time: new Date(),
    introduction: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    checkedItemHandler(e.target.id, e.target.checked);
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

  const handleChangeDate = (name: string, date: Date) => {
    setPlanInputs((prevState) => {
      return { ...prevState, [name]: date };
    });
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPlanInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
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

  const keywordList = ["공부", "취준", "운동", "보드게임"];
  const keywordOptions: SelectOption[] = [
    { label: "선택", value: "" },
    ...keywordList.map((keyword) => ({ label: keyword, value: keyword })),
  ];

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlanInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const buttonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("버튼 클릭");
    console.log(planInput);
    setIsModalOpen(true);
  };

  // modal bottom sheet 관련
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isModalOpen]);

  const [gender, setGender] = useState("여성");
  const [genderValue, renderGenderChecks] = Radio(
    ["여성", "남성"],
    "gender",
    gender
  );

  useEffect(() => {
    setGender(genderValue === "여성" ? "여성" : "남성");
  }, [gender, genderValue]);

  const setConditionEntry = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("입장 조건 설정 클릭");
    setIsModalOpen(false);
  };
  return (
    <>
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
          name="start_date"
          date={planInput.start_date}
          getDate={(name, date) => handleChangeDate(name, date)}
          type="date"
        ></DatePicker>
        <DatePicker
          name="end_date"
          date={planInput.end_date}
          getDate={(name, date) => handleChangeDate(name, date)}
          type="date"
        ></DatePicker>
      </InputWrapper>
      <StyledSpan>모임타임</StyledSpan>
      <InputWrapper>
        <Checkbox
          id="online"
          onChange={(e) => checkHandler(e)}
          checked={checkedItems.includes("online")}
          label="온라인"
        />
        <Checkbox
          id="offline"
          onChange={(e) => checkHandler(e)}
          checked={checkedItems.includes("offline")}
          label="오프라인"
        />
      </InputWrapper>
      <StyledSpan>모임 시간대</StyledSpan>
      <InputWrapper>
        <Checkbox
          id="allDay"
          onChange={(e) => checkHandler(e)}
          checked={checkedItems.includes("allDay")}
          label="기본시간(all day)"
        />
      </InputWrapper>
      <StyledSpan>시작시간과 종료시간</StyledSpan>
      <InputWrapper>
        <DatePicker
          name="start_time"
          date={planInput.start_time}
          getDate={(name, date) => handleChangeDate(name, date)}
          type="time"
        ></DatePicker>
        <DatePicker
          name="end_time"
          date={planInput.end_time}
          getDate={(name, date) => handleChangeDate(name, date)}
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
      <Input
        name="max_member_num"
        type="number"
        label="최대인원수"
        value={planInput.max_member_num}
        onChange={handleChangeInput}
        placeholder="최대 인원 수를 입력하세요"
      />
      <StyledSpan>소개글</StyledSpan>
      <StyledTextArea
        name="introduction"
        cols={30}
        rows={5}
        placeholder="플랜 소개를 입력하세요"
        value={planInput.introduction}
        onChange={handleChangeText}
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
          name="sido"
          size={49}
          options={options}
          value={planInput.sido}
          onChange={(e) => handleChangeSelect(e)}
        ></SelectBox>
        <SelectBox
          name="gugun"
          size={49}
          options={options}
          value={planInput.gugun}
          onChange={(e) => handleChangeSelect(e)}
        ></SelectBox>
      </ButtonWrapper>
      <StyledSpan>모임키워드</StyledSpan>
      <SelectBox
        name="keyword"
        options={keywordOptions}
        value={planInput.keyword}
        onChange={(e) => handleChangeSelect(e)}
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
      {isModalOpen && (
        <Bottomsheet
          title="입장 조건 설정"
          closeModal={() => setIsModalOpen(false)}
        >
          <StyledConditionEntry>
            <div>성별</div>
            {renderGenderChecks()}
            <div>출생연도</div>
            <Input
              name="birth_year"
              type="number"
              value={planInput.birth_year}
              onChange={handleChangeInput}
              placeholder="출생연도를 입력하세요"
            />
            <ButtonWrapper>
              <Button
                color="yellow"
                size="lg"
                disabled={false}
                onClick={(e) => setConditionEntry(e)}
              >
                확인
              </Button>
            </ButtonWrapper>
          </StyledConditionEntry>
        </Bottomsheet>
      )}
    </>
  );
};

export default CreatePlan;
