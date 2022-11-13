import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Menu from './menu';

describe('Given the Menu component', () => {
    test('Should render the Menu component', () => {
        render(
            <Router>
                <Menu></Menu>
            </Router>
        );
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Gnomes/i)).toBeInTheDocument();
        expect(screen.getByText(/Cones/i)).toBeInTheDocument();
    });
});
