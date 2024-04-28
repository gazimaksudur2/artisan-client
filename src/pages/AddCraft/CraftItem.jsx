import { Link, useLocation } from "react-router-dom";

const CraftItem = ({craft}) => {
    const location = useLocation();
    return (
        <div className="backdrop-blur-lg rounded-lg shadow-xl">
            <div className="card w-96 bg-white">
                <figure className="rounded-t-xl">
                    <img src={craft.url} alt="Shoes" className="w-full h-56 object-cover" />
                </figure>
                <div className="card-body relative items-center text-start bg-gradient-to-bl from-orange-100 to-yellow-400 backdrop-blur rounded-b-xl">
                    <p className="absolute font-mplus font-medium text-lg bg-green-400 p-2 rounded-md -top-5 right-5">{craft.subcategory}</p>
                    <h2 className="card-title text-start w-full">{craft?.name}</h2>
                    <p>{craft?.brief.slice(0,50)+"..."}</p>
                    <div className="card-actions flex w-full justify-end ">
                        <Link state={location.pathname} to={`/secondary/view/${craft._id}`}><button className="btn bg-orange-500 text-white hover:bg-orange-400">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItem;