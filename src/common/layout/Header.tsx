import { ROUTES } from 'constants/global';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const navMenus = [
    { name: ROUTES.main.name, url: ROUTES.main.url },
    { name: ROUTES.plans.name, url: ROUTES.plans.url },
];

const HeaderBar = styled.header`
    width: 100%;
    height: 41px;
    padding: 10px 20px;
    border-bottom: 1px solid #e5e5e5;
    button {
        display: block;
        margin-left: auto;
    }
`
const Draw = styled.div`
    width: 0px;
    height: 100vh;
    padding: 50px 0;
    opacity: 0;
    margin-top: -40px;
    margin-left: auto;
    z-index: 1;
    background-color: white;
    overflow: hidden;
    transition: all 1s ease;
    &.active {
        width: 300px;
        padding: 50px 20px;
        opacity: 1;
    }
`
const Button = styled.button`
z-index: 2;
display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    background-color: inherit;
span {
    background-color: #333;
    display: block;
    width: 100%;
    height: 2px;
    transition: all .2s;
    box-sizing: border-box;
    border-radius: 4px;
}
span:nth-of-type(2) {
    margin: 4px 0;
}
span:nth-of-type(1).active {
    -webkit-transform : translateY(3px) rotate(-45deg);
    transform : translateY(3px) rotate(-45deg);
  }
  span:nth-of-type(2).active {
    left : 200%;
    opacity : 0;
    -webkit-transform : translateY(3px);
    transform : translateY(3px);
    -webkit-animation : active-menu-bar .8s forwards;
    animation : active-menu-bar .8s forwards;
  }
  @-webkit-keyframes active-menu-bar {
    100% {
      height : 0;
    }
  }
  @keyframes active-menu-bar {
    100% {
      height : 0;
    }
  }
  span:nth-of-type(3).active {
    -webkit-transform : translateY(-3px) rotate(45deg);
    transform : translateY(-3px) rotate(45deg);
  }


`

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <HeaderBar>
                <Button onClick={() => { setShowMenu(!showMenu) }}>
                    {/* <span className='material-symbols-outlined '>menu</span> */}
                    <span className={showMenu ? '' : 'active'}></span>
                    <span className={showMenu ? '' : 'active'}></span>
                    <span className={showMenu ? '' : 'active'}></span>
                </Button>
            </HeaderBar>
            <Draw className={showMenu ? '' : 'active'}>
                <ul>
                    {navMenus.map((menu) => (
                        <Link to={menu.url}>
                            <li>{menu.name}</li>
                        </Link>
                    ))}
                </ul>
            </Draw>
        </>
    );
};

export default Header;
