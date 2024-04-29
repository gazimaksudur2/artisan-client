import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftItem = ({ craft }) => {
    const location = useLocation();

    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/crafts/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted!!",
                                icon: "success"
                            });
                        }
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary Craft is safe :)",
                    icon: "error"
                });
            }
        });
    }


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