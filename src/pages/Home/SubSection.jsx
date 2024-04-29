const SubSection = ({info}) => {
    return (
        <div className='px-[10%] space-y-4 mb-10 flex flex-col justify-center items-center text-center'>
            <h2 className='text-2xl font-exo font-bold'>{info.title}</h2>
            <p className='font-open'>{info.description}</p>
        </div>
    );
};

export default SubSection;