import React from 'react';
import styled from 'styled-components';
import container from '../assets/container.png';
import logo1 from "../assets/logo1.png";


const Container = styled.div`
    position: absolute;
    top: 0%;  
    display: flex;
    jusity-content: center;  
    width: 100vw;
    height: 13vh;
    background-image: url(${container});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    border-top: 2px solid;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
`
const Logo = styled.img`
    display: flex;
    z-index:2;
    padding: 1.5vw 0vw;
    margin-left: 2vw;
`
const StartButton = styled.button`
    display: flex;
    align-items: center;
    font-family: 'Lol-Bold';
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 0.2vw 1.8vw;
    margin: 2.5vw 0vw;
    color: white;
    background-color: #031722;
    border-image: linear-gradient(to bottom, #3CB0C1, #3170AF);
    border-image-slice: 1;
    border-color: #1e2328;
    border-width: 0.15vw;
    box-shadow: inset 0 0 2px #000000;
    &:hover {
        text-shadow: 0 0 5px #ffffff80;
        box-shadow: 0 0 8px 0 #ffffff50;

        cursor: pointer;
        transition: 0.1s;
    }
    &:active {
        text-shadow: none;
        box-shadow: none;
        color: #cdbe9130;
    }
`

const Header =()=>{
    return(
        <Container>
            <Logo src={logo1}/>
            <StartButton>게임 시작</StartButton>
        </Container>
    )
}
export default Header 
