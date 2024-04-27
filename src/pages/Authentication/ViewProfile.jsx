import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ViewProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="lg:backdrop:w-[45%]">
            <div className="flex justify-center items-center gap-3 mb-4">
                <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/12287/12287293.png" alt="logo" />
                <h2 className="font-exo font-semibold text-3xl text-[#1d2030]">Industria</h2>
            </div>
            <div className="w-full text-[#1d2030] font-ubuntu flex flex-col items-center gap-2">
                <img className="rounded-badge w-28" src={user.photoURL} alt="profile image" />
                <h2>{user.displayName}</h2>
                <h3>{user.email}</h3>
                <div className="w-full flex flex-col lg:flex-row gap-3 justify-between items-center">
                    <Link to={'/'}><button className="btn btn-primary">Go Back Home</button></Link>
                    <Link to={'/profile/update'}><button className="btn btn-secondary">Update Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;