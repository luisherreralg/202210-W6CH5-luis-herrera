import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../reducers/productReducer/action.creators';
import { ProductRepository } from '../services/product.repository';
import { rootState } from '../store/store';
import { Product, ProtoCart } from '../types/types';

export const useProducts = () => {
    const products = useSelector((state: rootState) => state.products);
    const dispatcher = useDispatch();
    const apiProducts = useMemo(() => new ProductRepository(), []);

    useEffect(() => {
        apiProducts
            .getAll()
            .then((products) => dispatcher(action.loadActionCreator(products)));
    }, [apiProducts, dispatcher]);

    const handleAdd = (newProduct: ProtoCart) => {
        apiProducts
            .create(newProduct)
            .then((products: Product) =>
                dispatcher(action.addActionCreator(products))
            );
    };

    const hanldeUpdate = (updateProduct: Product) => {
        apiProducts
            .update(updateProduct)
            .then((product: Product) =>
                dispatcher(action.updateActionCreator(product))
            );
    };

    const handleDelete = (id: string) => {
        apiProducts
            .delete(id)
            .then(() => dispatcher(action.deleteActionCreator(id)));
    };

    return {
        products,
        handleAdd,
        hanldeUpdate,
        handleDelete,
    };
};
