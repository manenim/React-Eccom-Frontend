import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import { categories } from '../data';
import { mobile, tablet } from '../responsive';


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({padding: "0px", flexDirection: "column"})}
  ${tablet({padding: "0px", flexDirection: "column"})}

`;
console.log(categories);
const Categories = () => {
  return (
   <Container id = "cat">
      {categories.map(item => (<CategoryItem item = {item}  key = {item.id}  /> ))}
   </Container>
  )
}

export default Categories