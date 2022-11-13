import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Product } from '../../types/types';
import { ProductList } from './product.list';

describe('Given GifList component', () => {
    describe('When we render the component', () => {
        test('then it should display the Gifs List', () => {
            const mockGifList: Product[] = [
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
            render(
                <Router>
                    <ProductList products={mockGifList} />
                </Router>
            );
            const element = screen.getByAltText(/product/i);
            expect(element).toBeInTheDocument();
        });
    });
});
