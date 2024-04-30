import SubSection from '../Home/SubSection';
import Gallery from './Gallery';

const Exhibition = () => {
    const info = {
        title: "Exhibit Our Enchanting Arts and Crafts Gallery",
        description: "Step into a realm of boundless creativity and inspiration at our Arts and Crafts Gallery. Immerse yourself in a vibrant tapestry of artistic expressions, from intricate handcrafted wonders to captivating masterpieces. Discover the beauty of artisanal craftsmanship and unleash your imagination in every brushstroke and stitch. With an eclectic array of paintings, sculptures, textiles, and more, our gallery invites you to embark on a sensory journey through the wonders of human creativity. Whether you're a seasoned art connoisseur or an avid admirer of craftsmanship, our gallery promises an unforgettable experience that celebrates the transformative power of art."
    }
    return (
        <div className='my-10'>
            <SubSection info={info}/>
            <Gallery/>
        </div>
    );
};

export default Exhibition;