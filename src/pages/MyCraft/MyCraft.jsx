import { useContext, useEffect, useState } from "react";
import MyCraftItem from "./MyCraftItem";
import MyCraftSection from "./MyCraftSection";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyCraft = () => {
    const { user } = useContext(AuthContext);
    const [myCrafts, setMyCrafts] = useState(null);
    const [showCrafts, setShowCrafts] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/crafts/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyCrafts(data);
                setShowCrafts(data);
            })
    }, [user])
    // console.log(`http://localhost:5000/crafts/email/${user?.email}`);

    const handleFilter = (val)=>{
        if(val!=='all'){
            setShowCrafts(myCrafts.filter(craft=>craft.customization==val));
        }else{
            setShowCrafts(myCrafts);
        }
        // console.log(showCrafts);
    }

    const handleDeleteCraft = (id) => {
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
                        setMyCrafts(myCrafts.filter(craft=>craft._id!=id));
                        setShowCrafts(showCrafts.filter(craft=>craft._id!=id));
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

    // console.log(myCrafts);

    const filteredCraft = <div className="my-10 w-full space-y-4 flex flex-col justify-center items-center">
        <h1 className="font-mplus text-xl font-semibold">Filter your Own Created crafts over customization property</h1>
        <details className="dropdown dropdown-right">
            <summary className="m-1 px-10 btn bg-orange-600 hover:bg-orange-400 text-white">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-orange-100 rounded-box">
                <li><p onClick={()=>handleFilter('all')}>All</p></li>
                <li><p onClick={()=>handleFilter('Yes')}>Yes</p></li>
                <li><p onClick={()=>handleFilter('No')}>No</p></li>
            </ul>
        </details>
    </div>

    return (
        <div>
            <MyCraftSection />
            {
                filteredCraft
            }
            <div className="mb-10 grid grid-cols-3 w-[90%] mx-auto justify-items-center content-center gap-8">
                {
                    myCrafts && showCrafts.map(craft => <MyCraftItem handleDelete={handleDeleteCraft} key={craft._id} craft={craft} />)
                }
            </div>
        </div>
    );
};

export default MyCraft;