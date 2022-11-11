import { render, screen } from '@testing-library/react';
import ConesPage from './cones.page';

describe('Given the ConesPage component', () => {
    describe('When it is rendered', () => {
        it('Should display a heading', () => {
            render(<ConesPage />);
            const heading = screen.getByRole('heading');
            expect(heading).toBeInTheDocument();
        });
    });
});
