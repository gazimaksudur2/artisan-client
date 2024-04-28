import { useContext, useEffect, useState } from "react";
import MyCraftItem from "./MyCraftItem";
import MyCraftSection from "./MyCraftSection";
import { AuthContext } from "../../providers/AuthProvider";

const MyCraft = () => {
    const { user } = useContext(AuthContext);
    const [myCrafts, setMyCrafts] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:5000/crafts/email/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setMyCrafts(data);
        })
    },[user])
    // console.log(`http://localhost:5000/crafts/email/${user?.email}`);

    return (
        <div>
            <MyCraftSection />
            <div className="mb-10 grid grid-cols-3 w-[90%] mx-auto justify-items-center content-center gap-8">
                {
                    myCrafts && myCrafts.map(craft => <MyCraftItem key={craft._id} craft={craft}/>)
                }
            </div>
        </div>
    );
};

export default MyCraft;