import { HashLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className=''>
            <HashLoader
                color="#d78437"
                cssOverride={{}}
                loading
                size={100}
            />
        </div>
    );
};

export default Spinner;