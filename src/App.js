// import logo from './logo.svg';
// import './App.css';

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Navigate, Route, Routes } from 'react-router-dom';
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser)
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      
      <Route path="/register" element= {user ? (
        <Navigate to="/" />
      ) : ( 
        <Register />
      ) } />
      <Route path="/login" element={user ? (
        <Navigate to="/" />
      ) : ( 
        <Login />
      ) } />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
  