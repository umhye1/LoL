import React,{useState, useEffect} from 'react'
import header from '../../assets/main.png';
import box_open from '../../assets/open.gif'
import box_no from '../../assets/notopen.gif'
import styled from 'styled-components';
import container from '../../assets/container.png';
import boxbox from '../../assets/boxbox.gif'

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
const Header = styled.img`
    width: 100vw;
    position: absolute;
    top: 0%;
`

const BoxContainer = styled.div`
    margin-top: 3vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width : 35vw;
    height : 70vh;
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
const Box = styled.img`
    display: flex;
    justify-content: center;
    width: 28vw;
    height: auto;
    z-index: 2;
`;
const BoxOpen = styled.img`
    position: absolute;
    top: 30%;
    width: 20%;
    left: 20%;
    height: auto;
    border-radius: 10px;
`;

const Box2 = styled.img`
    display: flex;
    justify-content: center;
    width: 28vw;
    height: auto;
    z-index: 2;  
`;

const ButtonContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #030910;
`
const OpenButton = styled.button`
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


const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    useEffect(() => {
        if (isOpen) {
        setTimeout(() => {
            setIsOpen(false);
        }, 2470); //멈춤
        }
    }, [isOpen]);

    const handleOpen = () =>{
        setIsOpen(true);
    }
return(
    <Container>
        <Header src={header} alt="header"/>
        <BoxContainer>
            {!isOpen&&
            <Box src={box_no} alt="box_open"/>}
            {isOpen&&
            // {/* <BoxOpen src={box_open}/>
            <Box2 src={boxbox}/>}

        <ButtonContainer>
            <OpenButton onClick={handleOpen}>열기</OpenButton>
        </ButtonContainer>
        </BoxContainer>
    </Container>
)
}

export default MainPage
