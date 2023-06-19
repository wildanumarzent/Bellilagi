import useCategeries from "@/store/categories";
import { useEffect } from "react";

const ServiceCard = () => {
    const {categories, getCategories} = useCategeries();
    useEffect(() => {
        getCategories();
    },[]);
    return (
        <div className="p-5 flex gap-3">
            {categories.map((category) =>
                 <div className="border p-3 w-full rounded-full">
                    <div className="flex space-x-3">
                        <div>
                            <img src={category.image} className="w-[20px]" alt="" />
                        </div>
                        <span className="text-[14px]">{category.title}</span>
                    </div>
                </div>
            )}
           
        </div>

    );
}

export default ServiceCard;