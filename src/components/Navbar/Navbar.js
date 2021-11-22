import React from 'react';
import styled from 'styled-components';

// import './Navbar.css';
export const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo src="/images/Logo.svg"  />
           <NavbarText>Overview</NavbarText>
        </NavbarContainer>
    )};

 

const NavbarContainer = styled.nav`
display: flex;
background-color: #e5e5e5;
padding-left: 10px;
font-family: 'Mulish', sans-serif;
`

const NavbarText = styled.div`
padding: 20px;
font-size: 20px;
padding-bottom: 5px;
color: #a79191;
}
`


const Logo = styled.img`
padding-top: 10px;
width: 90px;
`


