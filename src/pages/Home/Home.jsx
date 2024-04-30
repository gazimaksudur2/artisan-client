import { ScrollRestoration } from 'react-router-dom';
import Banner from './Banner';
import SubSection from './SubSection';
import CraftCategory from './CraftCategory';
import FeaturedSection from './FeaturedSection';

const Home = () => {
    const info = {
        title: "A Celebration of Creativity",
        description: "Step into Artisan Haven, where creativity knows no bounds. Immerse yourself in a vibrant world of artistic expression, where every stroke of the brush, every thread woven, and every sculpture crafted tells a unique story. Our gallery showcases the diverse talents of local and international artisans, offering a kaleidoscope of colors, textures, and forms that captivate the senses and ignite the imagination."
    }

    return (
        <div className='mb-10 h-full w-full flex flex-col justify-between items-center'>
            <ScrollRestoration/>
            <Banner/>
            <FeaturedSection/>
            <SubSection info={info}/>
            <CraftCategory/>
        </div>
    );
};

export default Home;