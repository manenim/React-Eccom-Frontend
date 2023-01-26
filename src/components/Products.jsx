import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';
import { FidgetSpinner } from 'react-loader-spinner';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Center = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;





const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([])
  const [filteredproducts, setFilteredProducts] = useState([]);
 
  useEffect(() => {
    const getProducts = async () => {
      try {

        const res = await axios.get(cat ? 
          `https://ecom-api-ptqc.onrender.com/api/products?category=${cat}` 
        : "https://ecom-api-ptqc.onrender.com/api/products");
        setProducts(res.data)

        console.log(res.data)
        
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
    
  }, [cat])

  useEffect(() => {
      cat && 
        setFilteredProducts(products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [products, cat, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  
   if (products.length === 0) {
    return (
      <Center>
        <div>

          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#ddc9c9', '#008080', '#ddc9c9']}
            backgroundColor="#008080"
          />
          <p>Fetching Products...</p>
        </div>
      </Center>
    )
  }


  return (
    <Container>
        {cat ? filteredproducts.map(item => (
           <Product item = {item} key = {item._id} />
        )): 
        products.slice(0, 4).map(item => (
           <Product item = {item} key = {item._id} />
        ))
        }
    </Container>
  )
}

export default Products