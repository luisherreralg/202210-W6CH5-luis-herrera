import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Product } from '../../types/types';
import { ProductListItem } from './product.list.item';

describe('When we render the ProductListItem', () => {
    test('then it should display the ProductListItem', () => {
        const mockProduct: Product = {
            id: 'id',
            section: 'section',
            name: 'name',
            description: [],
            image: 'image',
            onsale: true,
            onsalePrice: 1,
            price: 1,
        };
        render(
            <Router>
                <ProductListItem item={mockProduct} />
            </Router>
        );
        const element = screen.getByAltText(/product/i);
        expect(element).toBeInTheDocument();
    });
});
