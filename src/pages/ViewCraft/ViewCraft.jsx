import { useLoaderData } from 'react-router-dom';
import { Rating } from "primereact/rating";

const ViewCraft = () => {
    const craft = useLoaderData();
    // console.log(craft.user_url);

    return (
        <div className="my-10 md:w-[80%] mx-auto bg-gradient-to-br to-orange-300 via-yellow-200 from-yellow-300 px-1 md:px-3 py-10 md:py-16 rounded-2xl flex flex-col justify-center items-center md:gap-[10%]">
            <label className='md:w-[60%] w-[90%]'>
                <img className="w-full rounded-md" src={craft.url} alt="Cups" />
            </label>
            <h2 className='font-exo text-xl md:text-2xl font-semibold text-[#331a15] my-5'>{craft.name}</h2>
            <div className="md:w-[90%] w-[95%] mx-auto">
                <div className='px-4 md:px-0 flex flex-col md:flex-row justify-between items-start md:items-center'>
                    <div className="p-3 md:w-[40%] flex flex-col gap-3">
                        <h2 className='border-4 p-2 border-red-300 rounded-lg md:border-none md:p-0 font-exo font-medium text-lg'>Provider Info</h2>
                        <div className='flex justify-start items-center gap-10 md:gap-4'>
                            <label>
                                <img className="w-16 h-16 rounded-full" src={craft.user_url} alt="no Image" />
                            </label>
                            <div className='font-mplus space-y-1'>
                                <h3 className='font-medium'>{craft.provider}</h3>
                                <h4 className='text-sm'>{craft?.provider_email!==null?craft.provider_email:"Email Not Provided"}</h4>
                                <h4 className='text-xs font-light'>Processed At: {craft.processing_time.slice(0,10)}, {craft.processing_time.slice(11,19)}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-[40%] flex flex-col gap-3">
                        <h2 className='border-4 p-2 border-red-300 rounded-lg md:border-none md:p-0 font-exo font-medium text-lg'>Category Info</h2>
                        <div className='flex flex-col justify-start items-start gap-4'>
                            <div className='font-mplus space-y-1'>
                                <h3 className='font-medium flex gap-3'>Type: <span className='font-exo font-normal'>Textile Crafts</span></h3>
                                <h3 className='font-medium flex gap-3'>SubcategoryType: <span className='font-exo font-normal'>{craft.subcategory}</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 md:p-3 w-full flex flex-col gap-1">
                    <h2 className='font-exo font-medium text-lg'>Craft Description</h2>
                    <p className='text-sm'>{craft.brief}</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className="p-3 w-full flex flex-col justify-center items-center gap-1">
                        <h2 className='font-exo font-medium text-lg'>Price: <span className='text-red-400 text-2xl'>${craft.price}</span> only</h2>
                        <h4 className="text-[#1b1a1aad] font-open font-semibold text-sm">{craft.stock}</h4>
                    </div>
                    <div className="p-3 w-full flex flex-col items-center gap-1">
                        <div className='flex justify-center items-center gap-3'>
                            <p>Consumer Satisfaction Level:</p>
                            <div className="text-red-400 flex flex-col items-center justify-center">
                                <h5 className="text-amber-700 font-exo">{craft.rating}</h5>
                                <Rating value={craft?.rating} cancel={false} />
                            </div>
                        </div>
                        <p className='text-lg font-medium'>{craft.customization == 'No' ? 'Non Customizable Craft' : 'Customizable Craft'}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewCraft;