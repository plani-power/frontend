import { PlanApi } from "api/plan";
import Radio from "common/components/Radio";
import { PlanList, plan } from "pages/plans/PlanList";
import { useState } from "react";
import styled from "styled-components";

/* FIXME 더미데이터*/
const test = Array(23).fill(undefined).map((v, i) => {
	return {
		id: i,
		name: `테스트 플랜 ${i}번`,
		creator: `작성자${i}`,
		created: +new Date().getTimezoneOffset - i * 100,
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

const SortButton = styled.button`
	width: 80px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #ddd;
	border-radius: 4px;
	background-color: white;
	cursor: pointer;
	span {
		font-weight: normal;
	}
	.label {
		padding-left: 6px
	}
	.material-symbols-outlined {
		font-size: 20px;
		line-height: 20px;
		padding-top: 3px;
	}
`

const FilterBox = styled.div`
	width: 100%;
	min-height: 30px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 10px 0;

	.filter-palce {

	}
	.filter-status {

	}
`

const BottomSheet = styled.ul`
	width: 100%;
	max-width: 420px;
	height: 0px;
	position: fixed;
	bottom: 0;
	border: 1px solid #ddd;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
	transition: all 1s ease;
	background-color: white;
	padding: 0;
	margin-left: -20px;
	box-sizing: border-box;
	z-index: 9;
	&.active {
		height: 160px;
		padding: 20px 0;
	}
	li {
		display: flex;
		width: 100%;
		font-size: 16px;
		justify-content: center;
	}
	
	button {
		width: 80px;
		padding: 10px 4px 10px 10px;
		cursor: pointer;
		justify-content: center;
		background-color: inherit;
		font-size: 16px;
		text-align: right;
	}
	li:hover {
		background-color: var(--white);
	}
	span.material-symbols-outlined {
		display: flex;
		width: 22px;
		font-size: 22px;
		line-height: 38px;
		font-weight: bold;
		color: white;
	}
	button.selected {
		font-weight: bold;
	}
	button.selected + span.material-symbols-outlined {
		color: var(--main-color);
	}
`
const sortList = ['최신순', '이름순', '인기순']


const MainPage = () => {

	const [sortBy, setSortBy] = useState(sortList[0]);
	const [showBottomSheet, setShowBottomSheet] = useState(false);
	const radioLabel = ['전체', '온라인', '오프라인']
	const [place, placeFilter] = Radio(radioLabel, 'place', radioLabel[0]);
	
	
	const initList = async () => {
		const api = new PlanApi();
		/* TODO 정렬과 온오프 여부 필터를 파라미터로 넘기기 */
		const plans = api.getPlans({});
	}

	return <>
		<ListSummary>
			<p>
				총 <span>{test.length ?? 0}개</span> 플랜이 있어요
			</p>
			<SortButton onClick={() => setShowBottomSheet(!showBottomSheet)}>
				<span className="label">{sortBy}</span>
				<span className="material-symbols-outlined">
					expand_more
				</span>
			</SortButton>
		</ListSummary>
		<FilterBox>
			<div className="filter-place">
				{placeFilter()}
			</div>
			<div className="filter-status">

			</div>
		</FilterBox>
		<PlanList plans={test} sortBy={sortBy} place={place} />
		<BottomSheet className={showBottomSheet ? 'active' : ''}>
			{sortList.map((sort) => <li key={sort}>
				<button className={sortBy === sort ? 'selected' : ''} onClick={() => { setSortBy(sort) }}>
					{sort}
				</button>
				<span className="material-symbols-outlined" >
					done
				</span>
			</li>)}
		</BottomSheet>
	</>;
}

export default MainPage;