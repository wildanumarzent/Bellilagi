import create from "zustand";

interface ICategoryState {
    categories: ICategory[];
    IMGCategories: IMGCategory[];
    loading: boolean;
    status: 'SUCCESS' | 'FAILURE' | null;
    getCategories:() => void;
    getIMGCategories:() => void;
}

const useCategeries = create<ICategoryState>((set) => ({
    categories:[],
    IMGCategories:[],
    loading: false,
    status:null,
    getCategories:()=> {
        set(() => ({
            categories: [
                {
                    image:'https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png',
                    title: 'Kategori'
                },
                 {
                    image:'https://images.tokopedia.net/img/cache/100-square/iEWsxH/2023/4/27/4b81a081-0f97-4b9d-9ee1-8be5c938b14d.png',
                    title: 'Handphone & Tablet'
                 },
                 {
                    image:'https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png',
                    title: 'Top-Up & Tagihan'
                 },
                 {
                    image:'https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5af3e8e-bc2e-48b4-8d00-6d49ec8f4d50.png',
                    title: 'Travel & Entertainment'
                 },


            ],
            loading: false,
            status:null,
        }))
       
    },
    getIMGCategories:() => {
        set(() => ({
            IMGCategories:[
                {
                    image:'https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp'
                },
                {
                    image:'https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg.webp'
                },
                {
                    image:'https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg.webp'
                },
                {
                    image:'https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp'
                },
            ]
        }));
    }
}));

export default useCategeries;