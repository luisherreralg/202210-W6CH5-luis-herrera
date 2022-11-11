import { createAction } from '@reduxjs/toolkit';
import { Product, ProtoCart } from '../types/types';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Product[]>(actionTypes.load);

export const addActionCreator = createAction<Product>(actionTypes.add);

export const updateActionCreator = createAction<Product>(actionTypes.update);

export const deleteActionCreator = createAction<Product['id']>(
    actionTypes.delete
);
