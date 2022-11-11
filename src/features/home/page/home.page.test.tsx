import { render, screen } from '@testing-library/react';
import HomePage from './home.page';

describe('Given HomePage component', () => {
    describe('When it is rendered', () => {
        test('Then it should display a title', () => {
            render(<HomePage />);
            const title = screen.getByText(/Home Page/i);
            expect(title).toBeInTheDocument();
        });
    });
});
