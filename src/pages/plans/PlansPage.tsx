import { ROUTES } from "constants/global";
import { Link } from "react-router-dom";

const PlansPage = () => {

    return (
        <div>
            <p>
                플랜 목록 페이지입니다
            </p>
            <button><Link to={ROUTES.plans.create.url}>플랜 생성하기</Link></button>
        </div>
    )
}

export default PlansPage;