import Select, { SelectOption } from "common/components/Select";
import { PlanList, plan } from "pages/plans/PlanList";
import { useState } from "react";
import styled from "styled-components";

/* FIXME 더미데이터*/
const test = Array(50).fill(undefined).map((v, i) => {
	return {
		id: i,
		name: `테스트 플랜 ${i}번`,
		creator: `작성자${i}`,
		created: new Date().getTimezoneOffset,
		hashtag: '갓생,영어공부,취준',
		memberCount: Math.floor(Math.random() * 10),
		status: Math.floor(Math.random() * 2)
	}
})

const ListSummary = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	margin-bottom: 10px;
  	span {
    	font-weight: bold;
  	}
`

const options: SelectOption[] = [{title: '최신순', value: 'date', selected: true}]
const MainPage = () => {

	return <>
		<ListSummary>
			<p>
				총 <span>{test.length ?? 0}개</span> 플랜이 있어요
			</p>
			{/* <Select props={options} /> */}
		</ListSummary>
		<PlanList plans={test} />
	</>;
}

export default MainPage;