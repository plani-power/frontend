import { Link } from "react-router-dom";

const PlansPage = () => {

    return (
        <div>
            <p>
                플랜 목록 페이지입니다
            </p>
            <button><Link to='/plans/CreatePlan'>플랜 생성하기</Link></button>
        </div>
    )
}

export default PlansPage;