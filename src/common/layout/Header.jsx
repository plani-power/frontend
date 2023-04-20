import { ROUTES } from "constants/global";
import { Link, useNavigate } from "react-router-dom";

const navMenus = [
    { name: ROUTES.main.name, url: ROUTES.main.url },
    { name: ROUTES.plans.name, url: ROUTES.plans.url }
]

const Header = () => {
    return (
        <>
            <header>
                <span class="material-symbols-outlined">
                    menu
                </span>
            </header>
            <ul>
                {
                    navMenus.map((menu) => <Link to={menu.url} ><li>{menu.name}</li></Link>)
                }
            </ul>
        </>
    )
}

export default Header;