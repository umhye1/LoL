import React from 'react';
import styled from "styled-components";

import background from '../../assets/container.png';
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import { Transition } from 'react-transition-group';

const Containter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    width: 100vw;
    height: 100vh;
`

const Logo = styled.img`
    position: absolute;
    top:5%;
    width: 30vw;
    height: auto;
    z-index:1;
`

const Logo2 = styled.img`
    position: absolute;
    top: 33%;
    width: 23vw;
    height: auto;
    z-index:1;
    
`
const ButtonContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #030910;
`
const StartButton = styled.button`
    position: absolute;
    bottom: 18%;
    left: 48.5%;
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
        <Background src={background}>
            <Containter>
                <Logo src={logo}/>
                <Logo2 src={logo1}/>
                    
                <ButtonContainer>
                    <Link to ="/mainPage">
                        <StartButton>시작</StartButton>
                    </Link>
                </ButtonContainer>
            </Containter>
        </Background>
    )
}
export default StartPage;