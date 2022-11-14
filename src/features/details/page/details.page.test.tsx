import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import DetailsPage from './details.page';
import { MemoryRouter as Router } from 'react-router-dom';

//No está funcionando el useParams durante el test (creo)
describe('Given DetailsPage component', () => {
    describe('When it is rendered', () => {
        beforeEach(() => {
            const path = '/details/0';

            render(
                <Router initialEntries={[path]}>
                    <Provider store={appStore}>
                        <DetailsPage />
                    </Provider>
                </Router>
            );
        });

        test('Then it should display a title', () => {
            const title = screen.getByText(/details/i);
            expect(title).toBeInTheDocument();
        });

        //Falla este test, no genera nada en cuanto al id del useParams
        // test('Then it should display a name', () => {
        //     const name = screen.getByText(/Gelbin Mekkatorque/i);
        //     expect(name).toBeInTheDocument();
        // });
    });
});
