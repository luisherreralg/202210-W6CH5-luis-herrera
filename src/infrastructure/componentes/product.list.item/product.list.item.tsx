import { Link } from 'react-router-dom';
import { Product } from '../../types/types';

export function ProductListItem({ item }: { item: Product }) {
    return (
        <li>
            <Link
                to={`/Details/${item.id}`}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <img src={item.image} alt={`product ${item.name}`}></img>
            </Link>
        </li>
    );
}
