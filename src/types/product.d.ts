interface IProduct {
    id: number;
    title: string,
    price: number;
    special_price: number;
    image: string;
    stock: number;
    total_sold: number;
    discount: number;
    location: string;
    rating: number;
}

interface IProductDetail {
    id: number;
    title: string,
    price: number;
    special_price: number;
    description: string;
    image: string;
    stock: number;
    total_sold: number;
    discount: number;
    location: string;
    rating: number;
    color:[],
    size:[]
}