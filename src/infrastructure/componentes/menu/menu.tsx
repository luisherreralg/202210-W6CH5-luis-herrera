import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <ul className="flex p-3 gap-4 text-xl">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/gnomes">Gnomes</Link>
                </li>
                <li>
                    <Link to="/cones">Cones</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Menu;
