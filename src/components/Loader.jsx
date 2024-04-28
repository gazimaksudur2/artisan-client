import Spinner from './Spinner';

const Loader = () => {
    return (
        <div className='flex min-h-screen w-full bg-orange-100 justify-center items-center'>
            <Spinner/>
        </div>
    );
};

export default Loader;