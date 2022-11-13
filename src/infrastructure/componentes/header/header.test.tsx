import { render, screen } from '@testing-library/react';
import Header from './header';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given the Header component', () => {
    test('Should render the Header component', () => {
        render(
            <Router>
                <Header></Header>
            </Router>
        );
        expect(screen.getByText(/Cones&Gnomes/i)).toBeInTheDocument();
    });
});
