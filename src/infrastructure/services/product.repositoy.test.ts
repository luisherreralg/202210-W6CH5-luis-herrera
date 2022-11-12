import { ProductRepository } from './product.repository';

describe('Given ProductRepository Service', () => {
    describe('When we instantiate it without an specified url', () => {
        let service: ProductRepository;
        beforeEach(() => {
            service = new ProductRepository();
        });

        test('Then if i use service.error(), it should return an error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
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

        test('Then if i use service.getAll() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const expectedResult = await service.getAll();
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
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

        test('Then if i use service.create() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const expectedResult = await service.create({});
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
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

        test('Then if i use service.delete() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const expectedResult = await service.delete('');
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
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

        test('Then if i use service.update() and the response went wrong it shold throw an error', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: 'error',
            });

            const expectedResult = await service.update({});
            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(expectedResult).toBe(result.toString());
        });
    });

    describe('When we instantiate it with an specified url', () => {
        let service: ProductRepository;
        beforeEach(() => {
            service = new ProductRepository('test');
        });

        test('Then it should change the fetch url to the specified one', () => {
            expect(service.url).toBe('test');
        });
    });
});
