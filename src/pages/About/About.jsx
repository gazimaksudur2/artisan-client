import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import SubSection from '../Home/SubSection';
import Contributor from './Contributor';

const About = () => {
    const contributors = useLoaderData();
    const info = {
        title: "Our Community Contributors",
        description: "Like many other small local businesses, we care about our community. The Gallery is a small business with a social conscience. In addition to selling the work of many independent artists, makers, designers, small businesses and selected fair trade suppliers, we also choose to further contribute positively to our local community, where appropriate creative opportunities arise. We sell Dingwall grown lavender products to fund further planting for pollinators, and support the work of Befrienders Highland."
    }
    // console.log(contributors);
    return (
        <div className='flex flex-col justify-center items-center'>
            <ScrollRestoration/>
            <SubSection info={info}/>
            <div className='md:w-[80%] w-[95%] mx-auto mb-10 space-y-4 md:gap-16 md:grid grid-cols-1 md:grid-cols-3 justify-items-center my-6'>
                {
                    contributors.map((contributor, idx)=><Contributor contributor={contributor} key={idx}/>)
                }
            </div>
        </div>
    );
};

export default About;