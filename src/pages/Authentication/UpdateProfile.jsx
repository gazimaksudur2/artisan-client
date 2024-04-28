import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateProfile = () => {

    const {
        register,
        handleSubmit,
    } = useForm();
    const navigate = useNavigate();
    const { user, setUser, updateprofile } = useContext(AuthContext);


    const onSubmit = (data) => {
        // console.log(data);
        // user.displayName = data.name;
        // user.photoURL = data.url;
        setUser(user)
        updateprofile(data.name, data.url);
        Swal.fire({
            icon: "success",
            title: "UserCreated Successfully!!",
            showConfirmButton: false,
            timer: 1500
          });
        navigate('/');
    }

    return (
        <div className="h-screen w-full relative bg-update bg-cover bg-no-repeat backdrop-blur-3xl">
            <div className="absolute -z-30 inset-0 bg-black opacity-50"></div>
            <form
                className="h-full lg:w-[50%] mx-auto flex flex-col justify-center items-center card-body text-white"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="font-mplus font-semibold text-3xl text-orange-500">
                    Update your Profile
                </h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-orange-300 text-lg font-medium">Name</span>
                    </label>
                    <input
                        type="text"
                        defaultValue ={user.displayName}
                        {...register("name")}
                        className="input input-bordered text-[#1d2030]"
                        required
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-orange-300 text-lg font-medium">Email</span>
                    </label>
                    <input
                        type="email"
                        defaultValue={user.email}
                        readOnly
                        {...register("email")}
                        className="input input-bordered text-[#1d2030]"
                        required
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-orange-300 text-lg font-medium">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={user.photoURL}
                        {...register("url")}
                        className="input input-bordered text-[#1d2030]"
                        required
                    />
                </div>
                <div className="form-control w-full mt-4">
                    <button className="btn btn-primary">Confirm Update</button>
                    <label className="label w-full flex justify-center">
                        <Link to={"/"}>
                            <button className="label-text-alt link link-hover text-lg text-red-600">Go Back Home</button>                            
                        </Link>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;