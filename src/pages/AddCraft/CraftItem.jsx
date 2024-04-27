import { Link } from "react-router-dom";

const CraftItem = () => {
    const id = '1';
    return (
        <div className="backdrop-blur-lg rounded-lg shadow-xl">
            <div className="card w-96 bg-white">
                <figure className="rounded-t-xl">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="" />
                </figure>
                <div className="card-body relative items-center text-start bg-gradient-to-bl from-orange-100 to-yellow-400 backdrop-blur rounded-b-xl">
                    <p className="absolute font-mplus font-medium text-lg bg-green-400 p-2 rounded-md -top-5 right-5">category</p>
                    <h2 className="card-title text-start w-full">Quilting</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions flex w-full justify-end ">
                        <Link to={`/secondary/view/${id}`}><button className="btn bg-orange-500 text-white hover:bg-orange-400">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItem;