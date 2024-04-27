import { Link } from "react-router-dom";

const CraftSection = () => {
    return (
        <div className='px-[15%] mb-10 flex flex-col justify-center items-center text-center'>
            <div className="space-y-3 mb-10 flex flex-col justify-center items-center">
                <h2 className='text-3xl font-exo font-bold'>Artisan Haven: Where Creativity Flourishes</h2>
                <p className='font-open'>Welcome to Craftopia, where imagination knows no bounds and creativity thrives. Explore our curated collection of art and crafts from talented artisans around the world. From intricate embroidery and stunning paintings to exquisite ceramics and handcrafted jewelry, Craftopia is a haven for art lovers and craft enthusiasts alike. Immerse yourself in a world of color, texture, and innovation as you discover unique treasures and celebrate the beauty of handmade craftsmanship.</p>
            </div>
            <div className="space-y-3 flex flex-col justify-center items-center my-6">
                <h1 className="font-exo font-semibold text-2xl">Add your Personalized Textile Crafts here</h1>
                <Link to={'/secondary'}>
                    <button className="btn btn-outline scale-125 mt-4 border-orange-800 hover:border-orange-600 text-white bg-orange-600 hover:bg-orange-400 border-4">Add Crafts</button>
                </Link>
            </div>
        </div>
    );
};

export default CraftSection;