import React from 'react'
import {SidebarData} from './SidebarData'
import styled from 'styled-components';
// import './Sidebar.css'

export const Sidebar = () =>  {
    return (
        <SidebarContainer>
            <SidebarList>
                {  SidebarData.map((val, key) => {
                        return <SidebarListRow id={window.location.pathname === val.link ? "active" : ""}  key={key} onClick={() => {window.location.pathname = val.link}}>
                         <SidebarIcon>{val.icon}</SidebarIcon>
                         <SidebarTitle>{val.title}</SidebarTitle>
                        </SidebarListRow>
                    })
                }
            </SidebarList>
        </SidebarContainer>
    )
};


const SidebarContainer = styled.div`
height: 100%;
width: 255px;
background-color: #2f4050;
`

const SidebarList = styled.ul`
height: auto;
width: 100%;
padding: 0;
`

const SidebarListRow = styled.li`
width: 100%;
height: 60px;
list-style-type: none;
margin: 0;
font-size: 16px;
display: flex;
flex-direction: row;
color: white;
justify-content: center;
align-items: center;
font-family: 'Mulish', sans-serif;

&:hover{
    cursor: pointer;
   background-color: #293846;
}
`


const SidebarIcon = styled.div`
flex: 30%;
display: grid;
place-items: center;
`

const SidebarTitle = styled.div`
flex: 70%;
`


