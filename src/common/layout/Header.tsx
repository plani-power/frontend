import { ROUTES } from 'constants/global';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const navMenus = [
    { name: ROUTES.main.name, url: ROUTES.main.url },
    { name: ROUTES.plans.name, url: ROUTES.plans.url },
];

const HeaderWrapper = styled.div`
    width: 100%;
    height: 41px;
    position: relative;
`
const HeaderBar = styled.header`
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    border-bottom: 1px solid #e5e5e5;
    button {
        display: block;
        margin-left: auto;
    }
`
const Draw = styled.div`
    position: relative;
    top: 41px;
    right: 0;
    width: 0px;
    height: calc( 100vh - 41px);
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
    width: 28px;
    height: 20px;
    padding: 0;
    background-color: inherit;
    cursor: pointer;
    overflow: hidden;
span {
    background-color: #333;
    display: block;
    width: 100%;
    height: 2px;
    transition: all .3s ease-in-out;
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
    const onClickHamberger = () => {
        setShowMenu(!showMenu);

    }

    return (
        <HeaderWrapper>
            <HeaderBar>
                <Button onClick={onClickHamberger}>
                {[...Array(3)].map((n, index) => <span className={showMenu ? 'active' : ''}></span>)}
                </Button>
            </HeaderBar>
            <Draw className={showMenu ? 'active' : ''}>
                <ul>
                    {navMenus.map((menu) => (
                        <Link to={menu.url} key={menu.url}>
                            <li>{menu.name}</li>
                        </Link>
                    ))}
                </ul>
            </Draw>
        </HeaderWrapper>
    );
};

export default Header;
