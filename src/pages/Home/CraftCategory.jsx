import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CraftCategory = () => {
    const [category, setCategory] = useState(null);

    useEffect(()=>{
        fetch('roughData.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setCategory(data);
        })
    },[]);

    return (
        <div className="w-[95%] md:w-[85%] flex flex-col justify-center items-center space-y-4">
            <div className="pb-10 flex justify-center items-center gap-3">
                <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="star" />
                <h2 className="font-mplus text-2xl font-semibold">View by Category Clicking on the Cards</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    category && category.map(cate=>(<CategoryCard key={cate.id} category={cate}/>))
                }
            </div>
        </div>
    );
};

export default CraftCategory;