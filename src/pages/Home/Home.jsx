import { Link } from 'react-router-dom';
import Banner from './Banner';
import SubSection from './SubSection';

const Home = () => {
    return (
        <div className='h-full w-full flex flex-col justify-between items-center'>
            <Banner/>
            <SubSection/>
            <Link to={'/authenticate'}><button className='btn'>login</button></Link>
        </div>
    );
};

export default Home;