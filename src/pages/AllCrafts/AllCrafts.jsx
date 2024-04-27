import CraftCollection from './CraftCollection';
import CraftSection from './CraftSection';

const AllCrafts = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <CraftSection/>
            <CraftCollection/>
        </div>
    );
};

export default AllCrafts;