import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";

import header from '../../assets/main.png';
import container from '../../assets/container.png';
import styled from 'styled-components';
import icon1 from '../../assets/Pengu_Emote.png';
import icon2 from '../../assets/Bee_Happy_Emote.png';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${container});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    width: 100vw;
    height: 100vh;
`
const Title = styled.div`
    position: absolute;
    top: 7%;
    margin: 1vw;
    color: #cdbe91;
    font-family: 'Lol-Bold', sans-serif;
    font-size: 60px;
    letter-spacing: 1px;
    padding: 5px 15px; 

    &:hover {
        text-shadow: 0 0 5px #ffffff80;
        text-background: linear-gradient(to bottom, #1e2328, #433d2b);
        cursor: pointer;
        transition: 0.1s;
    }
`
const SubTitle = styled.div`
    position: absolute;
    top: 4%;
    left: 1%;
    margin: 1vw;
    color: #cdbe91;
    font-family: 'Lol-Bold', sans-serif;
    font-size: 15px;
    letter-spacing: 1px;
    padding: 5px 15px; 
    font-weight: bold;

    &:hover {
        text-shadow: 0 0 5px #ffffff80;
        text-background: linear-gradient(to bottom, #1e2328, #433d2b);
        cursor: pointer;
        transition: 0.1s;
    }
`
const Header = styled.img`
    width: 100vw;
    position: absolute;
    top: 0%;
`
const Box = styled.div`
    margin: 2vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width : 30vw;
    height : 60vh;
    background-color: #031722;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-color: #1e2328;
    border-width: 100px;
    &:hover {
        text-shadow: 0 0 5px #ffffff80;
        box-shadow: 0 0 8px 0 #ffffff50;
        // background: linear-gradient(to bottom, #1e2328, #433d2b);
        cursor: pointer;
        transition: 0.1s;
    }
`
const Icon1= styled.img`
    width: 20vw;
    margin-bottom: 3vw;
`
const ButtonContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #030910;
`
const Button = styled.button`
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

const MainPage =()=>{

    return(
        <Container>
            {/* <Header src={header} alt="header"/> */}
            <ButtonContainer>
                <Link to ="/">
                    <SubTitle>돌아가기</SubTitle>
                </Link>
            </ButtonContainer>

            <Title>This is for you</Title>

            <Box>
                <Icon1 src={icon2} alt="icon2"/>
                <ButtonContainer>
                    <Link to ="/note">
                        <Button>혜원이 편지 보기</Button>
                    </Link>
                </ButtonContainer>
            </Box>

            <Box>
                <Icon1 src={icon1} alt="icon1"/>
    
                <ButtonContainer>
                    <Link to ="/box">
                        <Button>명품 상자 열기</Button>
                    </Link>
                </ButtonContainer>
            </Box>
            
        </Container>
    )
}

export default MainPage;
