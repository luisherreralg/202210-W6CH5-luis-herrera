import { ProductList } from '../../../infrastructure/componentes/prduct.list/product.list';
import { useProducts } from '../../../infrastructure/hooks/useproducts';
import { filterGnomes } from '../../../infrastructure/utils/list.filters';

function GnomesPage() {
    const { products } = useProducts();
    return (
        <div>
            <h1 className="text-5xl text-center p-5 shadow-md mb-6">
                Gnomes Page
            </h1>
            <ProductList products={filterGnomes(products)}></ProductList>
        </div>
    );
}

export default GnomesPage;
