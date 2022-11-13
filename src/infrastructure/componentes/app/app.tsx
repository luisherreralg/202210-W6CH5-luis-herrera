import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';
import './app.css';

export function App() {
    return (
        <>
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </>
    );
}
