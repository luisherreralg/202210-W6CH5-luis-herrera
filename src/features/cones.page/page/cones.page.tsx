import { ProductList } from '../../../infrastructure/componentes/prduct.list/product.list';
import { useProducts } from '../../../infrastructure/hooks/useproducts';
import { filterCones } from '../../../infrastructure/utils/list.filters';

function ConesPage() {
    const { products } = useProducts();

    return (
        <div>
            <h1 className="text-5xl text-center p-5 shadow-md mb-6">
                Cones Page
            </h1>
            <ProductList products={filterCones(products)}></ProductList>
        </div>
    );
}

export default ConesPage;
