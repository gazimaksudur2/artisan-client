// import React from 'react';
import { useEffect, useState } from 'react';
import SubSection from './SubSection';

const FeaturedSection = () => {
    const [crafts, setCrafts] = useState(null);
    const [showCrafts, setShowCrafts] = useState([]);
    let check = [], id=0;

    useEffect(() => {
        fetch('http://localhost:5000/crafts/')
            .then(res => res.json())
            .then(data => {
                setCrafts(data);
            })
    }, []);

    useEffect(() => {
        const myCrafts = [];
        crafts && crafts.map(craft => {
            const category = craft.subcategory;
            if (!check.includes(category)&& (id&1)) {
                // console.log('pushed -->',craft.category);
                myCrafts.push(craft);
                check.push(category);
            }
            id = (id>10000?105:(parseInt(Math.random()*10)));
            // console.log(id);
        });
        setShowCrafts(myCrafts);
        console.log(showCrafts);
    }, [crafts])

    console.log(showCrafts);
    const info = {
        title: "Featured Enthusiastic Crafts",
        description: "Explore our featured section and immerse yourself in a curated selection of exquisite artworks, showcasing creativity in its purest form"
    }
    return (
        <div className=''>
            <SubSection info={info} />
            <div className='my-10 grid grid-cols-2 gap-8 justify-items-center'>
                {
                    showCrafts && showCrafts.map((craft, idx) =>
                        <div key={idx} className="flex flex-col rounded-lg bg-orange-400 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
                            <img
                                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
                                src={craft.url}
                                alt="" />
                            <div className="flex flex-col justify-start p-6">
                                <h5 className="mb-2 text-xl font-exo font-semibold text-gray-600">{craft.name}<span className='text-xs ml-4'>({craft.subcategory})</span></h5>
                                <p className="mb-4 text-base">
                                    {craft.brief}...
                                </p>
                                <p className="text-sm font-mplus text-surface/75 dark:text-neutral-300">
                                    Last updated at {craft.processing_time.slice(0,10)}, {craft.processing_time.slice(11,19)}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FeaturedSection;