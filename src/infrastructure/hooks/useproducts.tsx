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
            .then((products) => dispatcher(action.loadActionCreator(products)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiProducts, dispatcher]);

    const handleAdd = (newProduct: ProtoCart) => {
        apiProducts
            .create(newProduct)
            .then((products: Product) =>
                dispatcher(action.addActionCreator(products))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const hanldeUpdate = (updateProduct: Product) => {
        apiProducts
            .update(updateProduct)
            .then((product: Product) =>
                dispatcher(action.updateActionCreator(product))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string) => {
        apiProducts
            .delete(id)
            .then(() => dispatcher(action.deleteActionCreator(id)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        products,
        handleAdd,
        hanldeUpdate,
        handleDelete,
    };
};
