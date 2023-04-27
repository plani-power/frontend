import axios from "axios";

const MainPage = () => {

	const test = async()=> {
		const res = axios.get('https://9490-14-7-11-24.ngrok-free.app/plans')
	}


	return <>
		<button onClick={test}>누르거랑</button>
	</>;
}

export default MainPage;