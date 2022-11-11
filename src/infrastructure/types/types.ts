export type Product = {
    id: string;
    section: string;
    name: string;
    description: string[];
    image: string;
    onsale: boolean;
    onsalePrice: number;
    price: number;
};

export type ProtoCart = {
    section: string;
    name: string;
    description: string[];
    image: string;
    onsale: boolean;
    onsalePrice: number;
    price: number;
};
