import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    // cosnt loc = '/';
    return (
        <Link to={`secondary/category/${category.name}`} state={category}>
            <div className='p-6 max-w-lg shadow-xl border-t-4 space-y-4 border-orange-600 rounded-lg flex flex-col justify-center items-end active:scale-95'>
                <div className='space-y-3 w-full text-start'>
                    <h3 className='font-exo font-semibold text-xl'>{category.name}</h3>
                    <p className='font-open'>{category.description.slice(0, 70) + "..."}</p>
                </div>
                <div className=''>
                    <img className='w-16 py-3' src={category.url} alt="logo" />
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;