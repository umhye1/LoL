import React from 'react';
import styled from "styled-components";
import start from "../../assets/start.png";
import { Link } from "react-router-dom";

const Containter = styled.div`

`
const StyledStartPage = styled.div`
    background-image: url(${start});
    background-repeat: no-repeat;
    background-size: cover !important; 
    background-position: center;
    width: 100vw;
    height: 100vh;
`;

const ButtonContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #030910;
`
const StartButton = styled.button`
    position: absolute;
    bottom: 21%;
    left: 49%;
    href="https://fonts.googleapis.com/css?family=Marcellus+SC"

    font-family: 'Marcellus SC', serif;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 5px 15px; 
    background: #1e2328;
    color: #cdbe91;
    box-shadow: inset 0 0 2px #000000;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 2px;
  
    &:hover {
        text-shadow: 0 0 5px #ffffff80;
        box-shadow: 0 0 8px 0 #ffffff50;
        background: linear-gradient(to bottom, #1e2328, #433d2b);
        cursor: pointer;
        transition: 0.1s;
    }
  
    &:active {
        text-shadow: none;
        box-shadow: none;
        color: #cdbe9130;
    }
`

const StartPage = ()=>{
    return(
       <Containter>
            <StyledStartPage />
            
            <ButtonContainer>
                <Link to ="/mainPage">
                    <StartButton>시작</StartButton>
                </Link>
            </ButtonContainer>
        </Containter>
    )
}
export default StartPage;