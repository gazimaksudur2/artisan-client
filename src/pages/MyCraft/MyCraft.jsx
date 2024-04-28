import { useContext, useEffect, useState } from "react";
import MyCraftItem from "./MyCraftItem";
import MyCraftSection from "./MyCraftSection";
import { AuthContext } from "../../providers/AuthProvider";

const MyCraft = () => {
    const { user } = useContext(AuthContext);
    const [myCrafts, setMyCrafts] = useState(null);
    let showCrafts = [];

    useEffect(() => {
        fetch(`http://localhost:5000/crafts/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyCrafts(data);
                showCrafts.push(data);
            })
    }, [user])
    // console.log(`http://localhost:5000/crafts/email/${user?.email}`);

    const handleFilter = (val)=>{
        if(myCrafts){
            if(val === 'Yes'){
                showCrafts = myCrafts.filter(craft=>craft.customization==='Yes');
            }else if(val === 'No'){
                showCrafts = myCrafts.filter(craft=>craft.customization==='No');
            }
        }
    }

    const filteredCraft = <div className="my-10 w-full space-y-4 flex flex-col justify-center items-center">
        <h1 className="font-mplus text-xl font-semibold">Filter your Own Created crafts over customization property</h1>
        <details className="dropdown dropdown-right">
            <summary className="m-1 btn bg-orange-600 hover:bg-orange-400 text-white">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-orange-100 rounded-box w-16">
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
                myCrafts && filteredCraft
            }
            <div className="mb-10 grid grid-cols-3 w-[90%] mx-auto justify-items-center content-center gap-8">
                {
                    showCrafts && showCrafts.map(craft => <MyCraftItem key={craft._id} craft={craft} />)
                }
            </div>
        </div>
    );
};

export default MyCraft;