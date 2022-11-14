import { useParams } from 'react-router-dom';
import { useProducts } from '../../../infrastructure/hooks/useproducts';

function DetailsPage() {
    const { id } = useParams();
    const { products } = useProducts();
    const product = products.find((product) => product.id === id);

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-5xl text-center p-5 shadow-md mb-6">
                    Details
                </h1>
                <div className="bg-slate-200 flex lg:flex-row  flex-col justify-center  gap-20 mx-auto p-10">
                    <div className="">
                        <h2 className="text-5xl p-4">{product?.name}</h2>
                        <div className="bg-white rounded-md p-10">
                            <img
                                src={product?.image}
                                alt=""
                                className="w-80 h-80 object-scale-down"
                            />
                            {product?.onsale ? (
                                <>
                                    <h2 className="text-base  text-right line-through">
                                        {product.price}€
                                    </h2>
                                    <h2 className="font-bold text-right text-red-400 text-2xl">
                                        {product.onsalePrice}€
                                    </h2>
                                </>
                            ) : (
                                <p className="font-bold text-right text-2xl">
                                    {product?.price}€
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="max-w-lg my-auto">
                        <h3 className="text-2xl">Detalles:</h3>
                        <ul className="my-auto">
                            {product?.description.map((item) => (
                                <li className="list-disc text-lg" key={id}>
                                    <p className="break-words p-2">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsPage;
