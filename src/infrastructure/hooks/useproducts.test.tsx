import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import { ProductRepository } from '../services/product.repository';
import { appStore } from '../store/store';
import { Product, ProtoCart } from '../types/types';
import { useProducts } from './useproducts';

jest.mock('../services/product.repository');

const productMock: Product = {
    id: 'id',
    section: 'section',
    name: 'name',
    description: [],
    image: 'image',
    onsale: true,
    onsalePrice: 1,
    price: 1,
};

const newCartProduct: Product = {
    id: 'id',
    section: 'section',
    name: 'name',
    description: [],
    image: 'image',
    onsale: true,
    onsalePrice: 1,
    price: 1,
};

describe('Given the custom hook "useProducts', () => {
    let result: {
        current: {
            products: Product[];
            handleAdd: (newProduct: ProtoCart) => void;
            hanldeUpdate: (updateProduct: Product) => void;
            handleDelete: (id: string) => void;
        };
    };

    beforeEach(() => {
        ProductRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([productMock]);

        ProductRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(newCartProduct);

        ProductRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(newCartProduct);

        ProductRepository.prototype.delete = jest
            .fn()
            .mockResolvedValue(productMock);

        // const store = {}; // whatever you to do test your mock store today
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useProducts(), { wrapper }));
    });

    test('Then should return productMock', async () => {
        await waitFor(() => {
            expect(result.current.products).toEqual([productMock]);
        });
    });

    test('When we use the handleAdd, then it should return the "productMock" and been called', async () => {
        await waitFor(() => {
            result.current.handleAdd(newCartProduct);
            expect(result.current.products.at(-1)).toEqual(newCartProduct);
        });

        await waitFor(() => {
            expect(ProductRepository.prototype.create).toHaveBeenCalled();
        });
    });

    test('When we use handleUpdate then it should return the "newGif" object updated adn been called', async () => {
        await waitFor(() => {
            result.current.hanldeUpdate(newCartProduct);
            expect(result.current.products.at(-1)).toEqual(newCartProduct);
        });
        await waitFor(() => {
            expect(ProductRepository.prototype.update).toHaveBeenCalled();
        });
    });

    test('When we use handleEraser and the response is ok then it should return the same object and been called', async () => {
        await waitFor(() => {
            result.current.handleDelete(productMock.id);
            expect(result.current.products.at(-1)).toEqual(productMock);
        });
        await waitFor(() => {
            expect(ProductRepository.prototype.delete).toHaveBeenCalled();
        });
    });
});
