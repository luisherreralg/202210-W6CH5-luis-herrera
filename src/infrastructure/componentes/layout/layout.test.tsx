import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Layout } from './layout';

describe('Given the Layout component', () => {
    test('Should render the Layout component', () => {
        render(
            <Router>
                <Layout>
                    <div>Test</div>
                </Layout>
            </Router>
        );
        expect(screen.getByText(/Test/i)).toBeInTheDocument();
    });
});
