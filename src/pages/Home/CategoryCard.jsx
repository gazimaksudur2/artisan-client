const CategoryCard = () => {
    return (
        <div className='p-6 max-w-lg shadow-xl border-t-4 space-y-4 border-orange-600 rounded-lg flex flex-col justify-center items-end active:scale-95'>
            <div className='space-y-3 w-full text-start'>
                <h3 className='font-exo font-medium text-xl'>Category Name</h3>
                <p className='font-open'>Creative approach to quilting where artists use fabric as their medium to create unique, often non-traditional designs.</p>
            </div>
            <div className=''>
                <img className='w-16 py-3' src="https://cdn-icons-png.flaticon.com/512/2970/2970785.png" alt="logo" />
            </div>
        </div>
    );
};

export default CategoryCard;