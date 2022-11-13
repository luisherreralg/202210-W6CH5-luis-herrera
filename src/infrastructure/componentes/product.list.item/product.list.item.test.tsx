import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { Product } from '../../types/types';
import { ProductListItem } from './product.list.item';

describe('When we render the ProductListItem', () => {
    beforeEach(() => {
        const mockProduct: Product = {
            id: 'id',
            section: 'section',
            name: 'name',
            description: [],
            image: 'image',
            onsale: true,
            onsalePrice: 10,
            price: 1,
        };
        render(
            <Router>
                <ProductListItem item={mockProduct} />
            </Router>
        );
    });
    test('then it should display the ProductListItem', () => {
        const element = screen.getByAltText(/product/i);
        expect(element).toBeInTheDocument();
    });

    test('When we click on the image, it should scroll to the top of the page', () => {
        window.scrollTo = jest.fn();
        const element = screen.getByAltText(/product/i);
        userEvent.click(element);
        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    test('When the product is on sale, it should display the onsale price', () => {
        const element = screen.getByText(/10€/i);
        expect(element).toBeInTheDocument();
    });

    test('When the product is not on sale, it should display the price', () => {
        const mockProduct: Product = {
            id: 'id',
            section: 'section',
            name: 'name',
            description: [],
            image: 'image',
            onsale: false,
            onsalePrice: 10,
            price: 20,
        };
        render(
            <Router>
                <ProductListItem item={mockProduct} />
            </Router>
        );
        const element = screen.getByText('20€');
        expect(element).toBeInTheDocument();
    });
});
