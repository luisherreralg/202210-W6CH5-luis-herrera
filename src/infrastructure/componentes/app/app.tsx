import Header from '../header/header';
import { AppRoutes } from '../routes/app.routes';
import './app.css';

export function App() {
    return (
        <>
            <Header></Header>
            <AppRoutes></AppRoutes>
        </>
    );
}
