import { Link, ScrollRestoration } from 'react-router-dom';
import Banner from './Banner';
import SubSection from './SubSection';
import CraftCategory from './CraftCategory';

const Home = () => {
    return (
        <div className='mb-10 h-full w-full flex flex-col justify-between items-center'>
            <ScrollRestoration/>
            <Banner/>
            <SubSection/>
            <CraftCategory/>
        </div>
    );
};

export default Home;