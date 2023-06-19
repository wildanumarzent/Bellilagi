import create from "zustand";

interface ProductState {
    products: IProduct[];
    loading: boolean;
    status?: 'SUCCESS' | 'FAILURE' | null;
    getProducts:() => void;
}

const useProducts = create <ProductState>((set) => ({
    products:[],
    loading:false,
    status:null,
    getProducts: () => {
        set(() => ({
            products:[
                {
                    id: 1,
                    title: 'Kemeja Lengan Panjang Pria Cottonology Hella Putih',
                    price: 125000,
                    special_price:335000,
                    image:'https://images.tokopedia.net/img/cache/300-square/product-1/2020/2/22/28566590/28566590_a600b715-ee8f-4fa9-9112-063c8fde33e6_680_680',
                    stock: 30,
                    total_sold: 95,
                    discount:16,
                    location:'Bandung',
                    rating: 4.5
                },
                {
                    id: 2,
                    title: 'Kemeja polos Casual Pria Lengan Pendek Bahan oxsfort BEST QUALITY',
                    price: 435000,
                    special_price:225000,
                    image:'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/8/582583e6-3ec5-4c75-9c9a-afbd285edd0f.jpg',
                    stock: 30,
                    total_sold: 75,
                    discount:16,
                    location:'Jakarta Selatan',
                    rating: 4.5
                },
                {
                    id: 3,
                    title: 'Kemeja Lengan Panjang Kasual Pria Katun White',
                    price: 99000,
                    special_price:61000,
                    image:'https://images.tokopedia.net/img/cache/200-square/product-1/2016/5/16/322088/322088_2e5863a1-14bd-48f0-9365-4482e87cafc9.jpg',
                    stock: 30,
                    total_sold: 65,
                    discount:50,
                    location:'Tangerang Selatan',
                    rating: 4.5
                },
                {
                    id: 4,
                    title: 'HEM ROYKEN KEMEJA PRIA LENGAN PENDEK COWO COWOK POLOS KASUAL SLIMFIT',
                    price: 559000,
                    special_price:56000,
                    image:'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/3/14/945955d5-4430-4c89-bd96-329562a2d0c8.jpg',
                    stock: 30,
                    total_sold: 65,
                    discount:76,
                    location:'Purwakarta',
                    rating: 4.8
                },
                {
                    id: 5,
                    title: 'Kemeja Lengan Panjang Pria Putih Polos Premium',
                    price: 559000,
                    special_price:75000,
                    image:'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/7/5/2e381365-8d34-49d7-8f97-492ff95d95e3.jpg',
                    stock: 30,
                    total_sold: 85,
                    discount:80,
                    location:'Jakarta Utara',
                    rating: 4.8
                },
                {
                    id: 6,
                    title: 'kemeja putih polos lengan panjang bahan katun motif reguler',
                    price: 579000,
                    special_price:90000,
                    image:'https://images.tokopedia.net/img/cache/200-square/product-1/2016/8/8/11285327/11285327_e6b10e3b-b6ed-46e2-b893-95ef9829724e.jpg',
                    stock: 30,
                    total_sold: 85,
                    discount:80,
                    location:'Jakarta Utara',
                    rating: 4.8
                },
            ],
            loading:false,
            status:null
        }))
    }
}));

export default useProducts;