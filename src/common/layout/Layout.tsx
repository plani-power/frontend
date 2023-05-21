import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    max-width: 420px;
    min-height: 100vh;
    background-color: white;
    margin: 0 auto;
`

const Body = styled.div`
    width: 100%;    
    height: 100%;
    padding: 10px 20px;
`

const Layout = () => {

    return (
        <Wrapper>
            <Header />
            <Body>
                <Outlet />
            </Body>
            <Footer />
        </Wrapper>
    )
}

export default Layout;