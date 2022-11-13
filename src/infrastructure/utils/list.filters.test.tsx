import { filterCones, filterGnomes, filterSales } from './list.filters';

describe('Given the filterGnomes function', () => {
    describe('When it is invoked', () => {
        const mockedProduct = [
            {
                id: 'id',
                section: 'section',
                name: 'name',
                description: [],
                image: 'image',
                onsale: true,
                onsalePrice: 1,
                price: 1,
            },
        ];

        test('Then it should return an empty array when there is no section=Gnomes', () => {
            const result = filterGnomes(mockedProduct);
            expect(result).toEqual([]);
        });

        test('Then it should return an array with the product when there is a section=Gnomes', () => {
            mockedProduct[0].section = 'Gnomes';
            const result = filterGnomes(mockedProduct);
            expect(result).toEqual(mockedProduct);
        });
    });
});

describe('Given the filterCones function', () => {
    describe('When it is invoked', () => {
        const mockedProduct = [
            {
                id: 'id',
                section: 'section',
                name: 'name',
                description: [],
                image: 'image',
                onsale: true,
                onsalePrice: 1,
                price: 1,
            },
        ];

        test('Then it should return an empty array when there is no section=Gnomes', () => {
            const result = filterCones(mockedProduct);
            expect(result).toEqual([]);
        });

        test('Then it should return an array with the product when there is a section=Gnomes', () => {
            mockedProduct[0].section = 'Cones';
            const result = filterCones(mockedProduct);
            expect(result).toEqual(mockedProduct);
        });
    });
});

describe('Given the filterSales function', () => {
    describe('When it is invoked', () => {
        const mockedProduct = [
            {
                id: 'id',
                section: 'section',
                name: 'name',
                description: [],
                image: 'image',
                onsale: false,
                onsalePrice: 1,
                price: 1,
            },
        ];

        test('Then it should return an empty array when there is no onsale=true', () => {
            const result = filterSales(mockedProduct);
            expect(result).toEqual([]);
        });

        test('Then it should return an array with the product when there is a onsale=true', () => {
            mockedProduct[0].onsale = true;
            const result = filterSales(mockedProduct);
            expect(result).toEqual(mockedProduct);
        });
    });
});
