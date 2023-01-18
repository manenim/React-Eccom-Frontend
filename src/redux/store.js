// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'


// import cartReducer from './cartRedux'
// import userReducer from './userSlice'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   user: userReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)


// export const store = configureStore({
//   reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
  
// })

// export let persistor = persistStore(store)


import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from "./cartRedux";
import userReducer from "./userSlice";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: persistedReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

// const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);



