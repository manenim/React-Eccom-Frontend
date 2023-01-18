import React, { useState } from 'react'
import styled from 'styled-components';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { sliderItems } from '../data';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background: coral; */
  position: relative;
  overflow: hidden;
  ${mobile({display: "none"})}
  ${tablet({display: "none"})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props)=> props.direction === "left" && "10px"};
  right: ${(props)=> props.direction === "right" && "10px"};
  margin: auto;
  z-index: 2;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;


  flex: 1;
`;
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
  
`;
const InfoContainer = styled.div`
    flex: 1;

`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    width: 80%;
  
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction ) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
    }
  return (
    <Container>
        <Arrow direction = "left" onClick={() => handleClick("left")}>
            <KeyboardArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => (
            <Slide  key = {item.id}  bg = {item.bg}>
                <ImgContainer>
                    <Image src = {item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>   
                    <a href = '/#cat'><Button>SHOP NOW</Button></a>
                </InfoContainer>
            </Slide>
            ))}
                
         
        </Wrapper>
        <Arrow direction = "right" onClick={() => handleClick("right")}>
            <KeyboardArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider