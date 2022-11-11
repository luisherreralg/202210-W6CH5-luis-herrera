import { Product } from '../../types/types';
import { actionTypes } from './action.types';
import { productReducer } from './productReducer';

describe('Given the productReducer component', () => {
    const productMock: Product = {
        id: '1',
        section: 'section',
        name: 'name',
        description: ['description'],
        image: 'image',
        onsale: true,
        onsalePrice: 1,
        price: 1,
    };

    let action: { type: string; payload: unknown };
    let state: Product[];

    describe('When it receives a load action', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [productMock],
            };
            state = [];
        });

        test('Then it should return the payload', () => {
            const result = productReducer(state, action);

            expect(result).toEqual([productMock]);
        });
    });

    describe('When it receives an add action', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: productMock,
            };
            state = [];
        });

        test('Then it should return the payload', () => {
            const result = productReducer(state, action);

            expect(result).toEqual([productMock]);
        });
    });

    describe('When it receives an update action', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: productMock,
            };
            state = [productMock];
        });

        test('Then it should return the payload', () => {
            const result = productReducer(state, action);

            expect(result).toEqual([productMock]);
        });
    });

    describe('When it receives a update action and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...productMock, id: '2', title: 'Update task' },
            };
            state = [productMock];
        });

        test('Then the returned state should be the original state', () => {
            const result = productReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe('When it receives a delete action', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: productMock.id,
            };
            state = [productMock];
        });

        test('Then it should return the payload', () => {
            const result = productReducer(state, action);

            expect(result).toEqual([]);
        });
    });

    describe('When it receives an unknown action', () => {
        beforeEach(() => {
            action = {
                type: 'unknown',
                payload: productMock,
            };
            state = [productMock];
        });

        test('Then it should return the state', () => {
            const result = productReducer(state, action);

            expect(result).toEqual([productMock]);
        });
    });
});
