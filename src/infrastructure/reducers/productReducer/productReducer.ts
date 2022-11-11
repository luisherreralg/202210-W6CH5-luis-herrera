import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../../types/types';
import * as action from './action.creators';

const initialState: Product[] = [];

export const productReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        action.loadActionCreator,
        (_state, action) => action.payload
    );

    builder.addCase(action.addActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(action.updateActionCreator, (state, action) =>
        state.map((product) =>
            product.id === action.payload.id ? action.payload : product
        )
    );

    builder.addCase(action.deleteActionCreator, (state, action) =>
        state.filter((product) => product.id !== action.payload)
    );

    builder.addDefaultCase((state) => state);
});
