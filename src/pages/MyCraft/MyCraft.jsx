import MyCraftItem from "./MyCraftItem";
import MyCraftSection from "./MyCraftSection";

const MyCraft = () => {
    return (
        <div>
            <MyCraftSection />
            <div className="mb-10 grid grid-cols-3 w-[90%] mx-auto justify-items-center content-center gap-8">
                <MyCraftItem />
                <MyCraftItem />
                <MyCraftItem />
                <MyCraftItem />
                <MyCraftItem />
                <MyCraftItem />
                <MyCraftItem />
                <MyCraftItem />
                <MyCraftItem />
                <MyCraftItem />
                <MyCraftItem />
            </div>
        </div>
    );
};

export default MyCraft;