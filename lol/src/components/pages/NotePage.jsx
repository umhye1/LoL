import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";

import header from '../../assets/main.png';
import container from '../../assets/container.png';
import styled from 'styled-components';

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
const NoteContainer = styled.div`
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
const Text = styled.div`
    margin: 1vw;
    color: #cdbe91;
    font-family: 'Lol-Regular', sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    line-height: 1.5;
    padding: 5px 15px; 

    &:hover {
        text-shadow: 0 0 5px #ffffff80;
        text-background: linear-gradient(to bottom, #1e2328, #433d2b);
        cursor: pointer;
        transition: 0.1s;
    }
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
const SubTitle = styled.div`
    position: absolute;
    top: 12%;
    right: 14%;
    margin: 1vw;
    color: #cdbe91;
    font-family: 'Lol-Bold', sans-serif;
    font-size: 15px;
    letter-spacing: 1px;
    padding: 5px 15px; 

    &:hover {
        text-shadow: 0 0 5px #ffffff80;
        text-background: linear-gradient(to bottom, #1e2328, #433d2b);
        cursor: pointer;
        transition: 0.1s;
    }
`
const NotePage =()=>{

    return(
        <Container>
            <Header src/>

            <NoteContainer>
                <ButtonContainer>
                    <Link to ="/mainPage">
                        <SubTitle>X</SubTitle>
                    </Link>
                </ButtonContainer>

                <Text>
                    To. siyoung
                    <br/>
                    <br/>
                    안녕 오빠? 지금은 새벽 3시 22분이야<br/>
                    프론트,,, 이렇게 꾸미는 것만 잔뜩하면 재밌는 것 같아 디자이너가 된 기분이랄까.. <br/>
                    공부 하기가 싫어서 정처기 자격증도 때려치고,,, 원래는 오늘 김영한 강의 들으려고 했는데 <br/>
                    인스타 릴스에 '공대여친이 남자친구 상자깡 해주기'이런게 뜨더라구<br/>
                    그래서 또 때려치고 이거 만들어봤엉ㅋㅋ 좀 자세히보면 구리긴 한데, 나름 뿌듯해!!<br/>
                    그나저나 우리가 벌써 400일이 넘었넹!! 그래서 이건 최근에 400일 이었기두 하고~<br/>
                    겸사겸사이긴 하지만 꼭 스킨 사주고 싶어!!! ㅎㅎ 그러니 부담 갖지 말구 요구해줭 <br/>
                    <br/>
                    요즘 내가 많이 징징대구, 무기력하다고 많이 말했잖아? 그래서 그런지 최근의 모습을 돌아보니까 오빠한테 내가 좀 소홀했던 것 같아..<br/>
                    오빤 별로 신경 안 썼으려나;;<br/>
                    신입사원이다 보니까 회사에서 받는 스트레스도 상당할 것 같은데, 나한테 잘 얘기 안하지ㅜㅜ?<br/>
                    2024년에는 그럴 때마다 오빠가 나한테 기댈 수 있는 사람이 됐으면 좋겠어!<br/>
                    더 징징거려도 된다는 말이야 ㅎㅎ<br/>
                    하하 올해는 나도 오빠한테 긍정적인 마인드를 본받아서 활력 넘치는 삶을 살아보도록 노력할겡ㅎㅎ<br/>
                    <br/>
                    대학교라는 울타리를 벗어나 사회로 내딛는 첫 걸음에 내가 동행할 수 있어서 기뿌다!<br/>
                    회사에서 받은 스트레스는 나랑 만나면서 다 풀고 즐겁게 놀장❤️<br/>
                    항상 고맙고 사랑해❤️<br/>
                    <br/>
                    <br/>
                    From. hyewon
                
                </Text>
            </NoteContainer>
        </Container>
    )
}
export default NotePage;
