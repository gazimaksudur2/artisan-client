import CategoryCard from "./CategoryCard";

const CraftCategory = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <div className="pb-10 flex justify-center items-center gap-3">
                <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="star" />
                <h2 className="font-mplus text-2xl font-semibold">View by Category Clicking on the Cards</h2>
            </div>
            <div className="grid grid-cols-2 gap-10">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    );
};

export default CraftCategory;