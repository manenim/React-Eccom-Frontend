import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
// import { ListItem } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
// import { addProduct } from '../redux/cartRedux';
import { useState } from 'react';
import { useEffect } from 'react';
import { publicRequest } from '../requestMethods';


const Info = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0, .2);
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s ease;
  cursor: pointer;
`;


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
    background-color: #f5fbfd;
  align-items: center;
  position: relative;

  &:hover ${Info}{
    opacity: 1
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;


const Image = styled.img`
  height: 85%;
  z-index: 2;

`;
const Icon = styled.div`
    
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all .5s ease;

  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({item}) => {

  
  
  const [product, setProduct] = useState({})

  // const products = use

  useEffect(() => {
    const getProduct = async () => {
     try {
       const res = await publicRequest.get("/products/find/"+item._id); 
       setProduct(res.data);
 
     } catch (error) {
       console.log(error)
     }
    }
     getProduct();
   }, [item._id, item.id, product])

  const handleClick = async () => {
    // dispatch(addProduct({...products, item.quantity, item.color, item.size }))

   
     
  }
  return (
        <Link to = {`/product/${item._id}`}>
          <Container>
              <Circle />
              <Image src = {item.img} />
              <Info>

                      <Icon><ShoppingCartOutlined onClick = {handleClick}/></Icon>
                      <Link to = {`/product/${item._id}`}>
                      <Icon><SearchOutlined /></Icon>
                      </Link>
                      <Icon>< FavoriteBorderIcon/></Icon>
              </Info>
          </Container>
        </Link>
  )
}

export default Product