import { configureStore } from '@reduxjs/toolkit';
import { shopReducer } from './reducer';

const store = configureStore({
    reducer: shopReducer
})

export default store;
