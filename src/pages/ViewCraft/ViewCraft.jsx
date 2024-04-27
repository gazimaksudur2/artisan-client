import { useLoaderData } from 'react-router-dom';

const ViewCraft = () => {
    // const craft = useLoaderData();
    const craft = {
        id: '1',
        url: 'https://img.freepik.com/premium-photo/plant-hanging-from-rope-with-plant-hanging-from-it_1020495-371428.jpg?w=740',
        name: 'PatchWork Quilting',
        subcatagory: 'Quilting',
        description: 'Technique involving sewing together smaller pieces of fabric to form a larger design.',
        price: 60000,
        rating: 4.8,
        processing_time: '20,December,2022',
        customization: 'yes',
        stock_status: 'available',
        provided_by: 'Gazi Ahmadullah',
        provider_email: 'ahmadullah42@gmail.com',
    }

    const mappedArray = Object.entries(craft).map(([key, value]) => {
        return { key, value }; // Manipulate value or key as needed
      });

    //   console.log(mappedArray.slice(3,11));

    return (
        <div className="my-10 w-[80%] mx-auto bg-gradient-to-br to-orange-300 from-yellow-300 px-3 py-16 rounded-2xl flex flex-col justify-center items-center gap-[10%]">
            <label className='w-[40%]'>
                <img className="w-full" src={craft.url} alt="Cups" />
            </label>
            <div className="space-y-3 text-center">
                <h2 className='font-exo text-2xl font-semibold text-[#331a15] my-5'>{craft.name}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='flex justify-between items-center'>
                                <th>Property</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mappedArray.slice(3,12).map((item,idx)=>(<tr className='hover flex justify-between items-center' key={idx}>
                                    <td>{item.key}</td>
                                    <td>{item.value}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
                <h4 className="font-open font-semibold text-sm">Subcategory: <span className="text-[#1b1a1a] font-normal">{craft.subcatagory}</span></h4>
                <h4 className="font-open font-semibold text-sm">Price: <span className="text-[#1b1a1a] font-normal">{craft.price}</span></h4>
                <h4 className="font-open font-semibold text-sm">Rating: <span className="text-[#1b1a1a] font-normal"> {craft.rating}</span></h4>
                <h4 className="font-open font-semibold text-sm">Customization: <span className="text-[#1b1a1a] font-normal">{craft.customization}</span></h4>
                <h4 className="font-open font-semibold text-sm">Stock status: <span className="text-[#1b1a1a] font-normal">{craft.stock_status}</span></h4>
                <h4 className="font-open font-semibold text-sm">Processing Time: <span className="text-[#1b1a1a] font-normal">{craft.processing_time}</span></h4>
                <h4 className="font-open font-semibold text-sm">Provided By: <span className="text-[#1b1a1a] font-normal">{craft.provided_by}</span></h4>
                <h4 className="font-open font-semibold text-sm">Provider Email: <span className="text-[#1b1a1a] font-normal">{craft.provider_email}</span></h4>
            </div>
        </div>
    );
};

export default ViewCraft;