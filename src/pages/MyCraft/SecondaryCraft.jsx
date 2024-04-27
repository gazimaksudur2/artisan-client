import { Link, Outlet } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

const SecondaryCraft = () => {
    return (
        <div className='w-[85%] mx-auto my-10 px-10 py-4 bg-yellow-50 rounded-xl'>
            <div className='my-10 text-[#331a15]'>
                <Link className='flex justify-start items-center gap-2 bg-yellow-200 max-w-[17rem] text-orange-800 rounded p-2' to={'/allcrafts'}>
                    <IoArrowBackSharp size={25} className='inline'/>
                    <h2 className='font-exo pb-1 font-semibold text-xl inline'>Back to Crafts Gallery</h2>
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default SecondaryCraft;