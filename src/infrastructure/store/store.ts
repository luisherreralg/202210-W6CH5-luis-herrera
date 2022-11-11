import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../reducers/productReducer/productReducer';

export const appStore = configureStore({
    reducer: {
        products: productReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
