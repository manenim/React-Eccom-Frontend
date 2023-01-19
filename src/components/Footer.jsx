import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({textAlign: "center"})}
`
const Logo = styled.h1`
    
`

const Desc = styled.p`
    margin: 20px 0; 
`
const SocialContainer = styled.div`
    display: flex;
    ${mobile({justifyContent: "center"})}

`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`



const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
    ${tablet({display: "none"})}

`
const Title = styled.h3`
  margin-bottom: 30px;

`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;  
  margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8", justifyContent: "center"})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHOPnOW.</Logo>
            <Desc>
            SHOPnOW caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in 1983, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.            </Desc>
            <SocialContainer>
                <SocialIcon color='3b5999'><Facebook /></SocialIcon>
                <SocialIcon color='e4405f'><Instagram /></SocialIcon>
                <SocialIcon color='55acee'><Twitter /></SocialIcon>
                <SocialIcon color='e60023'><Pinterest /></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style = {{marginRight: 10}}/> 622 Dixie path, South Tobichester 98336</ContactItem>
            <ContactItem><Phone style = {{marginRight: 10}}/> +1 234 56 78</ContactItem>
            <ContactItem><MailOutline style = {{marginRight: 10}}/> contact@mani.dev</ContactItem>
            <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer