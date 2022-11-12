import { ProductRepository } from './product.repository';

describe('Given ProductRepository Service', () => {
    describe('When we instantiate it', () => {
        let service: ProductRepository;
        beforeEach(() => {
            service = new ProductRepository();
        });
        test(`Then if I use service.getAll() 
            it should return a Promise of an Array of products`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });

        test(`Then if I use service.create()
                it should return a Promise of the crated product`, async () => {
            const mockProduct = {
                id: '1',
                section: 'section',
                name: 'name',
                description: [],
                image: 'image',
                onsale: true,
                onsalePrice: 1,
                price: 1,
            };

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            const result = await service.create(mockProduct);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockProduct);
        });
        test('Then if I use service.delete() it should return an undefined', async () => {
            const mockProduct = {
                id: '1',
                section: 'section',
                name: 'name',
                description: [],
                image: 'image',
                onsale: true,
                onsalePrice: 1,
                price: 1,
            };

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.delete(mockProduct.id);
            console.log(result);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });

        test('Then if I use service.update it should return', async () => {
            const mockProduct = {
                name: 'name',
            };

            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.update(mockProduct);
            console.log(result);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
});
