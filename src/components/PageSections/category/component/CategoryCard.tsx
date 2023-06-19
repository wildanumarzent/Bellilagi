import useCategeries from "@/store/categories";
import { useEffect } from "react";
const CategoryCard = () => {
    const {IMGCategories, getIMGCategories} = useCategeries();
    useEffect(() => {
        getIMGCategories();
    },[]);
    return (
        <div className="p-5">
            <span className="text-3xl">Kategori Pilihan</span>
            <div className="flex gap-3">
                {IMGCategories.map((category)=> 
                    <div className="flex space-x-5 mt-3">
                        <div className="card w-36">
                            <img src={category.image} className="w-32" alt="" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CategoryCard;