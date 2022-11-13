import { Product } from '../../types/types';
import { ProductListItem } from '../product.list.item/product.list.item';

export function ProductList({ products }: { products: Product[] }) {
    return (
        <section>
            <ul className="flex flex-wrap gap-10 max-w-7xl justify-center mx-auto">
                {products.map((item: Product) => (
                    <ProductListItem key={item.id} item={item} />
                ))}
            </ul>
        </section>
    );
}
