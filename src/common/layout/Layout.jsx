import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

const Body = styled.div`
    width: 100%;
    max-width: 420px;
    height: 100vh;
    background-color: white;
    margin: 0 auto;
`

const Layout = () => {

    return (
        <Body>
            <Header />
            <Outlet />
            <Footer />
        </Body>
    )
}

export default Layout;