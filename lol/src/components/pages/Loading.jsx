import React,{useState, useEffect} from 'react'
import styled,{ keyframes } from 'styled-components';
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import background from '../../assets/container.png';
import loading from '../../assets/loading.gif';


const Containter = styled.div`
    background: black;
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
`

const Background = styled.div`
    display: flex;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    width: 100vw;
    height: 100vh;
`
const Logo1 = styled.img`
    position: absolute;
    top: 30%;
    left: 42.5%;
    display: flex;
    width: 17vw;
    height: auto;
    z-index:2;
`
const Title1 = styled.div`
    position: absolute;
    bottom: 33%;
    left: 46%;
    margin: 1vw;
    color: #d5c383;
    font-family: 'Lol-Bold';
    font-size: 25px;
    letter-spacing: 1px;
    padding: 5px 15px; 
    font-weight: bold;
    text-background: linear-gradient(to bottom, #1e2328, #433d2b);
    cursor: pointer;
    z-index:2;
`
const Title2 = styled.div`
    position: absolute;
    bottom: 33%;
    left: 43%;
    margin: 1vw;
    color: #d5c383;
    font-family: 'Lol-Bold';
    font-size: 23px;
    letter-spacing: 1px;
    padding: 5px 15px; 
    font-weight: bold;
    // text-shadow: 0 0 5px #ffffff80;
    text-background: linear-gradient(to bottom, #1e2328, #433d2b);
    cursor: pointer;
    z-index:2;
`
const Circle1 = styled.div`
    position: absolute;
    bottom: 12%;
    left: 28.6%;
    border-radius: 50%;
    color: #d5c383;
    opacity: 0.6;
    border-color: transparent d5c383 #E6C27C; /* 투명 투명 그라데이션을 위한 선의 색상 설정 */
    border-image-slice: 1;
    border: 3px solid;
    margin: 0 auto;
    width: 630px;
    height: 630px;
    animation: shimmer 2s infinite;
`

const Line1 = styled.div`
    position: absolute;
    bottom: 50%;
    left: 0.6%;
    color: #d5c383;
    border-color: transparent d5c383 #E6C27C; /* 투명 투명 그라데이션을 위한 선의 색상 설정 */
    border-image-slice: 1;
    border: 1.2px solid;
    opacity: 0.5;
    margin: 0 auto;
    width: 401px;
`
const Line2 = styled.div`
    position: absolute;
    bottom: 50%;
    right: -0.5%;
    color: #d5c383;
    border: 1.2px solid;
    opacity: 0.5;
    margin: 0 auto;
    width: 397px;
`
const Shimmer = keyframes`
    0% {
        background-position: -1000px;
    }
    100% {
        background-position: 1000px;
    }
`;

const LoadingImg = styled.img`
    width: 7vw;
    height: auto;
    position: absolute;
    bottom: 22%;
    left: 47%;
`

const Loading=()=>{
    

    const [isStart, setIsStart] = useState(false);

    useEffect(() => {
        if (!isStart) {
        setTimeout(() => {
            setIsStart(true);
        }, 3000); //멈춤
        }
    }, [isStart]);


    return(
        <Background src={background}>
            <Containter/>
            <Circle1/>
            <Line1/>
            <Line2/>
            <Logo1 src={logo1}/>
            {!isStart &&
            <Title1>로딩 중</Title1>
            }
            {isStart &&
            <Link to="/mainPage">
                <Title2>메인 페이지로 이동</Title2>
            </Link>
            }

            <LoadingImg src={loading}/>
        </Background>    
    )
}

export default Loading;
