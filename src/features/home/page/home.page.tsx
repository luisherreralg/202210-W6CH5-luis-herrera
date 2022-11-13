import { ProductList } from '../../../infrastructure/componentes/prduct.list/product.list';
import { useProducts } from '../../../infrastructure/hooks/useproducts';
import { filterSales } from '../../../infrastructure/utils/list.filters';

function HomePage() {
    const { products } = useProducts();
    return (
        <div>
            <h1 className="text-5xl text-center p-5 shadow-md mb-6">On sale</h1>
            <ProductList products={filterSales(products)}></ProductList>
        </div>
    );
}

export default HomePage;
