// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         product: [],
//         quantity: 0,
//         total: 0
//     },

//     reducers: {
//         addProduct: (state, action) => {
//             console.log(state)
//              state.quantity += 1;
//              state.product.push(action.payload);
//              state.total += action.payload.price * action.payload.quantity
//         }, 
//         removeProduct: (state, action) => {
//             state.quantity -= 1;
//             state.product = state.product.filter((product) => product.id !== action.payload.id);
//             state.total -= action.payload.price * action.payload.quantity
//             console.log("done")
//         }
//     }
// })

// export const {addProduct, removeProduct} = cartSlice.actions;

// export default cartSlice.reducer; 

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      state.quantity += state.products.length;
      console.log(state.products);
    },
    removeProduct: (state, action) => {
      let filteredProducts = state.products.filter(
        (product) => product._id !== action.payload._id
        );
        state.products = filteredProducts;
        state.quantity -= state.products.length;
      state.total -= action.payload.price * action.payload.quantity;
      console.log(action.payload);
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    }

  },
  
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;


export default cartSlice.reducer;