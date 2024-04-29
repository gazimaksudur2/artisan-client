import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const MyCraftItem = ({ craft, handleDelete }) => {
    const location = useLocation();

    return (
        <div className="backdrop-blur-lg rounded-lg shadow-xl">
            <div className="card w-96 bg-white">
                <figure className="rounded-t-xl">
                    <img src={craft.url} alt="Shoes" className="w-full h-56 object-cover" />
                </figure>
                <div className="card-body relative items-center text-start bg-gradient-to-bl from-orange-100 via-yellow-100 to-yellow-400 backdrop-blur rounded-b-xl">
                    <p className="absolute font-mplus font-medium text-lg bg-green-400 p-2 rounded-md -top-5 right-5">{craft.subcategory}</p>
                    <h2 className="card-title text-start w-full">{craft?.name}</h2>
                    <p>{craft?.brief.slice(0, 50) + "..."}</p>
                    <div className="card-actions w-full flex justify-end">
                        <Link state={location.pathname} to={`/secondary/update/${craft._id}`}><button className="btn bg-orange-500 text-white border-2 border-orange-700 hover:bg-orange-400"><CiEdit size={20}/></button></Link>
                        <Link state={location.pathname} to={`/secondary/view/${craft._id}`}><button className="btn bg-yellow-500 text-white border-2 border-orange-700 hover:bg-orange-400"><GrView size={20}/></button></Link>
                        <button onClick={() => handleDelete(craft._id)} className="btn bg-red-500 text-white border-2 border-red-700 hover:bg-orange-400"><MdDeleteOutline size={20}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftItem;