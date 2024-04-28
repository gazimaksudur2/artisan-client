import { Outlet, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

const SecondaryCraft = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navigateBack = ()=>{
        navigate(location?.state?location.state:'/allcrafts');
    }
    return (
        <div className='w-[85%] mx-auto my-10 px-10 py-4 bg-yellow-50 rounded-xl'>
            <ScrollRestoration/>
            <div className='my-10 text-[#331a15]'>
                <div onClick={navigateBack} className='flex justify-start items-center gap-2 bg-yellow-200 max-w-[9rem] hover:cursor-pointer text-orange-800 rounded p-2'>
                    <IoArrowBackSharp size={25} className='inline'/>
                    <h2 className='font-exo pb-1 font-semibold text-xl inline'>Go Back</h2>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default SecondaryCraft;