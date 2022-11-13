import { ProductList } from '../../../infrastructure/componentes/prduct.list/product.list';
import { useProducts } from '../../../infrastructure/hooks/useproducts';

function HomePage() {
    const { products } = useProducts();
    return (
        <div>
            <h1>Home Page</h1>
            <ProductList products={products}></ProductList>
        </div>
    );
}

export default HomePage;
