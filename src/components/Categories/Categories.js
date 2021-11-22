import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';


 export const Categories = () => {
    return (
        <Container>
           <Header>
               <h2>
                   Categories
               </h2>

               <h3>
                   Last Edit:05:50PM:31/12/2020
               </h3>
          </Header>
         <Logo src="/images/Photography.svg" alt="" /> 
     
        </Container>
       
    )
}



const Container = styled.div`
margin: 10px;
`

const Logo = styled.img``
const Header = styled.div`
display: flex;
`