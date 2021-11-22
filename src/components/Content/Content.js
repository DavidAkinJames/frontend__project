import React from 'react'
import styled from 'styled-components';
import {Sidebar} from '../Sidebar/Sidebar'
import { Categories } from '../Categories/Categories';


export const Content = () => {
    return (
        <Container>
            {/* here we are going to have the sidebar and categories and they will be styled together with   */}
            <Sidebar />
            <Categories />
        </Container>
    )
}



const Container = styled.div`
display: flex;
font-family: 'Mulish', sans-serif;
`