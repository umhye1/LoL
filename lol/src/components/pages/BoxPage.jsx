import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import header from '../../assets/main.png';
import box_no from '../../assets/notopen.gif'
import styled from 'styled-components';
import container from '../../assets/container.png';
import boxbox from '../../assets/boxbox.gif'

import bein1 from "../../assets/bein1.png";
import bein2 from "../../assets/bein2.png";
import bein3 from "../../assets/bein3.png";

import varus1 from "../../assets/varus_1350.png";
import varus2 from "../../assets/barus_950.png";
import varus3 from "../../assets/varus2_1350.png";
import varus4 from "../../assets/varus4.png";
import varus5 from "../../assets/varus5.png";


import ash1 from "../../assets/ash1.png";
import ash2 from "../../assets/ash2.png";
import ash3 from "../../assets/ash3.png";
import ash4 from "../../assets/ash4.png";

import izreal1 from "../../assets/izreal_1350.png";
import izreal2 from "../../assets/izreal2.png";

import zin1 from "../../assets/zin1.png";
import zin2 from "../../assets/zin2.png";

import kaisa1 from "../../assets/kaisa_1350.png";
import kaisa2 from "../../assets/kaisa2.png";
import kaisa3 from "../../assets/kaisa3.png";
import kaisa4 from "../../assets/kaisa4.png";

import rusian1 from "../../assets/rusian_1350.png";
import rusian2 from "../../assets/rusian2_1350.png";
import rusian3 from "../../assets/rusian3_1350.png";
import rusian4 from "../../assets/rusian4.png";
import rusian5 from "../../assets/rusian5.png";

import keitlin1 from "../../assets/keitlin1.png";
import keitlin2 from "../../assets/keitlin2.png";
import keitlin3 from "../../assets/keitlin3.png";

const StyledImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56vw;
    height: auto;
    z-index:3;
`;

const imageList = [
    varus1,
    varus2,
    varus3,
    varus4,     //암흑의 밤
    varus5,     //설원특공대
    bein1,
    bein2,
    bein3,      //빛의인도자 베인
    ash1,
    ash2,
    ash3,
    ash4,       //하이눈애쉬
    izreal1,
    izreal2,    //서릿빛 이즈리얼
    zin1,
    zin2,
    kaisa1,
    kaisa2,     //기동총격전사 카이사
    kaisa3,     //kda카이사
    kaisa4,     //ig카이사
    rusian1,
    rusian2,
    rusian3,
    rusian4,    //하이눈
    rusian5,    //프로젝트루시안
    keitlin1,    //극지저격수케이틀린
    keitlin2,   //펄스건 케이틀린
    keitlin3,   //수영장파티
];

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
const SkinContainer = styled.div`
    width: 70vw;
    height: 83vh;
    margin-top: 3vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #031722;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-color: #1e2328;
    z-index:3;

    &:hover {
        text-shadow: 0 0 5px #ffffff80;
        box-shadow: 0 0 8px 0 #ffffff50;
        // background: linear-gradient(to bottom, #1e2328, #433d2b);
        cursor: pointer;
        transition: 0.1s;
    }
`
const Note =styled.div`
    margin: 1vw;
    color: #cdbe91;
    href="https://fonts.googleapis.com/css?family=Marcellus+SC"
    font-family: 'Marcellus SC', serif;
    font-size: 13px;
    letter-spacing: 1px;
    padding: 5px 15px; 
`
const CloseButton = styled.button`
    margin: 0.5vw;
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
const ContentContainer= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
const SubTitle = styled.div`
    position: absolute;
    top: 13%;
    left: 0%;
    margin: 1vw;
    color: #cdbe91;
    font-family: 'Lol-Bold';
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

const BoxPage = () => {

    const [randomImage, setRandomImage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [isOpenLoading, setIsOpenLoding]=useState(false);

      
    useEffect(() => {
        if (isOpen) {
        setTimeout(() => {
            setIsOpen(false);
            setIsOpenLoding(false);
            selectRandomImage();
        }, 2470); //멈춤
        }
    }, [isOpen]);

    const selectRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * imageList.length);
      const selectedImage = imageList[randomIndex];
      setRandomImage(selectedImage);
    };

    const handleOpen = () =>{
        setIsOpen(true);
        setIsClose(true);
        setIsOpenLoding(true);
    }
    const handleClose =() =>{
        setIsOpen(false);
        setIsClose(false);
        setRandomImage("");
    }
return(
    <Container>
        <Header src={header} alt="header"/>
        
        <ButtonContainer>
            <Link to ="/">
                <SubTitle>돌아가기</SubTitle>
            </Link>
        </ButtonContainer>


        <ContentContainer>
            {!isClose &&
            <BoxContainer>
                {!isOpen&&
                <Box src={box_no} alt="box_open"/>}
        
                <ButtonContainer>
                    <OpenButton onClick={handleOpen}>열기</OpenButton>
                </ButtonContainer>
                
            </BoxContainer>}

            {isOpenLoading &&
            <BoxContainer>
                <Box2 src={boxbox}/>
            
                <ButtonContainer>
                    <OpenButton>열기</OpenButton>
                </ButtonContainer>
            </BoxContainer>}
            
            {isClose && randomImage && (
            <SkinContainer>
                <StyledImage src={randomImage}/>
                <Note>
                    혜원이가 쏩니다 !! ❤️<br/>
                    이건 내가 오빠한테 주는 선물이야ㅎㅎ
                    미안 귀찮아서 스킨을 많이 넣진 못했어 <br/>
                    오빠한테 선물로 보내줄게!!
                    항상 사랑하구 응원행 <br/>
                </Note>
                <CloseButton onClick={handleClose}>닫기</CloseButton>
            </SkinContainer>
            )}
        </ContentContainer>
    </Container>
)
}

export default BoxPage
