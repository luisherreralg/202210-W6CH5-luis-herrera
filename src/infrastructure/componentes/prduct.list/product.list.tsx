import { Product } from '../../types/types';

export function ProductList({ products }: { products: Product[] }) {
    return (
        <section>
            <ul>
                {products.map((item: Product) => (
                    // <GifItem key={item.id} item={item}></GifItem>
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </section>
    );
}
