import { Product } from '../types/types';
import { Repository } from './repository';

export class ProductRepository implements Repository<Product> {
    url: string;
    constructor(url = '') {
        this.url = url ? url : (process.env.REACT_APP_URL_PRODUCTS as string);
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAll(): Promise<Array<Product>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    create(product: Partial<Product>): Promise<Product> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    delete(id: string): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }

    update(partialProduct: Partial<Product>): Promise<Product> {
        return fetch(`${this.url}/${partialProduct.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialProduct),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }
}
