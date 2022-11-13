import { Product } from '../types/types';

export function filterGnomes(products: Product[]) {
    return products.filter((items) => {
        return items.section === 'Gnomes';
    });
}

export function filterCones(products: Product[]) {
    return products.filter((items) => {
        return items.section === 'Cones';
    });
}

export function filterSales(products: Product[]) {
    return products.filter((items) => {
        return items.onsale === true;
    });
}
