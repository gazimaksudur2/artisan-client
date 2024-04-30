const Contributor = ({ contributor }) => {
    return (
        <div>
            <div
                className="block max-w-[18rem] rounded-lg bg-orange-300 text-gray-600 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src={contributor.bgurl}
                        alt="" />
                </div>
                <div className="relative px-6 py-10 text-center space-y-2">
                    <img
                        src={contributor.imageurl}
                        className="w-20 left-[35%] -top-[25%] absolute rounded-full"
                        alt="Avatar" />
                    <h3 className="font-exo text-xl font-semibold text-gray-800">{contributor.name}</h3>
                    <p className="text-gray-500">
                        {'" '+contributor.talk+' "'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contributor;