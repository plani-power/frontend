import { ROUTES } from "constants/global";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const navMenus = [
    { name: ROUTES.main.name, url: ROUTES.main.url },
    { name: ROUTES.plans.name, url: ROUTES.plans.url },
];

const HeaderBar = styled.header`
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    border-bottom: 1px solid #E5E5E5;
    button {
        display: block;
        margin-left: auto;
    }
`
const Draw = styled.ul`
    width: 400px;
    height: 100vh;
    margin-top: -40px;
    z-index: 1;
    position: 
`
const Header = () => {
    return (
        <>
            <HeaderBar>
                <button>
                    <span className="material-symbols-outlined ">menu</span>
                </button>
            </HeaderBar>
            <ul>
                {navMenus.map((menu) => (
                    <Link to={menu.url}>
                        <li>{menu.name}</li>
                    </Link>
                ))}
            </ul>
        </>
    );
};

export default Header;
