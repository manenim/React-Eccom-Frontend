import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

const Container = styled.div`
  
`;

const Title = styled.h1`
  margin: 20px;
  margin-top: 0;
  text-transform: capitalize;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  
`;

const Icon = styled(MdOutlineKeyboardBackspace)`
  font-size: 40px;
  margin-left: 30px; 
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 0px;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.5s ease;
  &:hover{
    background-color: rgb(231, 231, 231, .5);
    scale: 1.1;
  }
`

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const navigate = useNavigate();

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    
  }

  const back = () => {
    navigate(-1)
  }
console.log(filters);
  return (
    <Container>

        <Navbar/>
        <Announcements/>
        <Icon onClick = {back}/>

        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name = "color" onChange = {handleFilter}>
                    <Option disabled>
                    Color
                    </Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>brown</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select name = "size" onChange = {handleFilter}>
                    <Option disabled>
                    Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value = "newest">Newest</Option>
                        <Option value = "asc">Price (asc)</Option>
                        <Option value = "desc">Price (desc)</Option>
                    </Select>
            </Filter>
        </FilterContainer>
        <Products cat = {cat} filters = {filters} sort = {sort}/>
        <NewsLetter/>
        <Footer />

    </Container>
  )
}

export default ProductList