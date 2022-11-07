import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import reducers from './combinReducer';

const store = configureStore(
    {
       reducer: reducers,
       
    }
);

export default store;