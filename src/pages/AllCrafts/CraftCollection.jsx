import { useLoaderData } from 'react-router-dom';
import CraftItem from '../AddCraft/CraftItem';

const CraftCollection = () => {
    const allCrafts = useLoaderData();

    // console.log(allCrafts);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-10'>
            {
                allCrafts.map(craft => <CraftItem key={craft._id} craft={craft}/>)
            }
        </div>
    );
};

export default CraftCollection;