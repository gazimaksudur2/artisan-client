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
        <div className="h-full w-full">
            <form
                className="h-full lg:w-[50%] mx-auto flex flex-col justify-center items-center card-body"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="font-ubuntu font-semibold text-xl text-[#1d2030]">
                    Update your Profile
                </h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
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
                        <span className="label-text">Email</span>
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
                        <span className="label-text">Photo URL</span>
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
                            <button className="label-text-alt link link-hover">Go Back Home</button>                            
                        </Link>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;