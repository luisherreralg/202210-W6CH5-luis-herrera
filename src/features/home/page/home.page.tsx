import { ProductList } from '../../../infrastructure/componentes/prduct.list/product.list';
import { useProducts } from '../../../infrastructure/hooks/useproducts';

function HomePage() {
    const { products } = useProducts();
    return (
        <div>
            <h1 className="text-5xl text-center p-5 shadow-md mb-6">On sale</h1>
            <ProductList
                products={products.filter((items) => {
                    return items.onsale;
                })}
            ></ProductList>
        </div>
    );
}

export default HomePage;
