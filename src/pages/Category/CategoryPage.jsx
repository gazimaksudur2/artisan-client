import SubSection from '../Home/SubSection';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

const CategoryPage = () => {
    const location = useLocation();
    const category = location?.state || {};
    const crafts = useLoaderData();

    // console.log(crafts);

    return (
        <div>
            <SubSection info={category} />
            <h2 className='text-center font-exo font-semibold text-2xl p-3 border-4 border-orange-400 rounded-lg'>Subcategory : {category.name}</h2>
            <div className="overflow-x-auto md:w-[90%] mx-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Provider</th>
                            <th className='hidden md:inline-block'>Provider Email</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th className='hidden md:inline-block'>Customization</th>
                            <th className='hidden md:inline-block'>Stock Status</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 2 */}
                        {
                            crafts.map((craft) => (<>
                                <tr className="hover" key={craft._id}>
                                    <th className='text-sm font-normal font-exo'>{craft.name}</th>
                                    <th className='text-sm font-normal font-exo'>{craft.provider}</th>
                                    <th className='text-sm font-normal font-exo hidden md:inline-block'>{craft?.provider_email?craft.provider_email:'not provided'}</th>
                                    <th className='text-sm font-normal font-exo'>{craft.rating}</th>
                                    <th className='text-sm font-normal font-exo'>{craft.price}</th>
                                    <th className='text-sm font-normal font-exo hidden md:inline-block'>{craft.customization}</th>
                                    <th className='text-sm font-normal font-exo hidden md:inline-block'>{craft.stock}</th>
                                    <th><Link to={`/secondary/view/${craft._id}`} state={location.pathname} className='font-normal font-mplus text-blue-700 underline'>view details</Link></th>
                                </tr>
                            </>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryPage;