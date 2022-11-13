import { Link } from 'react-router-dom';
import { Product } from '../../types/types';

export function ProductListItem({ item }: { item: Product }) {
    return (
        <li className="bg-slate-200 p-4 rounded-md shadow-md">
            <Link
                to={`/details/${item.id}`}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <div className="bg-white rounded-md">
                    <img
                        src={item.image}
                        alt={`product ${item.name}`}
                        className="w-80 h-80 object-scale-down"
                    ></img>
                </div>
                <div className=" flex flex-col bg-slate-200 gap-2 p-2 rounded-md">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-base font-bold text-right">
                        {item.price}€
                    </p>
                </div>
            </Link>
        </li>
    );
}
