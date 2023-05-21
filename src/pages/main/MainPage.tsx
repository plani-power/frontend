import { PlanList, plan } from "pages/plans/PlanList";
import { useState } from "react";

/* FIXME 더미데이터*/
const test = Array(50).fill(undefined).map((v, i)=>{
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

const MainPage = () => {

	return <>
		<PlanList plans={test} />
	</>;
}

export default MainPage;