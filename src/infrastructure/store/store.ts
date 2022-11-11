import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../reducer/productReducer';

export const appStore = configureStore({
    reducer: {
        products: productReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
