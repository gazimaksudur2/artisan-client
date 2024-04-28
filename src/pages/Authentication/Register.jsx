import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom/dist";
import { Typewriter } from 'react-simple-typewriter'

const Register = () => {
    const reg_here = "Already have an Account?";
    const { createUser, updateprofile, googleLogin, githubLogin, twitterLogin } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const tractPrivate = (address) => {
        // console.log('navigating --> ',address, 'and location in state --> ', location?.state);
        navigate(address, {
            state: location?.state,
        });
    }

    const handleGoogle = () => {
        navigate('/loading');
        googleLogin()
            .then(res => {
                console.log(res.user);
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                navigate('/authenticate/register');
            })
    }

    const handleGithub = () => {
        navigate('/loading');
        githubLogin()
            .then(res => {
                console.log(res.user);
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                navigate('/authenticate/register');
            })
    }

    const handleTwitter = () => {
        navigate('/loading');
        twitterLogin()
            .then(res => {
                console.log(res.user);
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                navigate('/authenticate/register');
            })
    }


    const handleSubmit = e => {
        navigate('/loading');
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const url = form.get('url');

        let error = '';
        if (password.length < 6) {
            error = "password length should atleast 6 characters.";
        }
        else if (!/[A-Z]/.test(password)) {
            error = "password should contain atleast a capital letter";
        }
        else if (!/[a-z]/.test(password)) {
            error = "password should contain atleast a small letter";
        }
        // console.log("here error is : ", error);
        if (password.length < 6 || (!/[A-Z]/.test(password)) || (!/[a-z]/.test(password))) {
            Swal.fire({
                icon: "error",
                title: "Password Constraint Failed!!!",
                text: "Enter a strong password..",
                footer: error
            });
            navigate('/authenticate/register');
            return;
        }


        createUser(email, password)
            .then(res => {
                updateprofile(name, url);
                Swal.fire({
                    icon: "success",
                    title: "UserCreated Successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');
                console.log(res.user);
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "User Creation Failed!!!",
                    showConfirmButton: false,
                    timer: 3000,
                    footer: err.message,
                });
                console.log(err.message);
                navigate('/authenticate/register');
            })
    }
    return (
        <div className='min-h-screen relative bg-auth2 bg-cover bg-no-repeat backdrop-blur flex flex-row justify-evenly items-center'>
            <ScrollRestoration />
            <div className="absolute w-full -z-20 inset-0 bg-black opacity-50 min-h-full"></div>
            <div className='w-[45%] p-10 rounded-md backdrop-blur flex flex-col justify-center items-center text-left gap-4'>
                <h1 className="font-exo font-semibold text-4xl text-white w-full text-left">A Celebration of <span className="text-orange-500">
                    <Typewriter
                            words={['Creativity', 'imagination', 'Critical Thinking', 'Cognitive Ability', 'Emotion', 'Tactile Sensation!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></span></h1>
                <p className="text-gray-300 text-lg">Step into Artisan Haven, where creativity knows no bounds. Immerse yourself in a vibrant world of artistic expression, where every stroke of the brush, every thread woven, and every sculpture crafted tells a unique story.</p>
                <Link to={'/'} className="btn w-[40%] flex justify-center items-center"><IoArrowBackSharp size={20} /> <p>Go Back Home</p></Link>
            </div>
            <div className='w-[30%] py-8 bg-white rounded text-[#505050] flex flex-col justify-center items-center space-y-4 font-mplus'>
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className="flex justify-center items-center gap-2">
                        <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/2970/2970785.png" alt="logo" />
                        <h1 className="font-exo font-bold text-3xl">Artisan Haven</h1>
                    </div>
                    <p className="font-open text-xl font-semibold text-blue-600">Register Your Account</p>
                </div>
                <form onSubmit={handleSubmit} className='w-full py-4 px-10 space-y-6'>
                    <div className="space-y-3">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" name="name" placeholder="Name" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" name="url" placeholder="Photo URL" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" className="grow" name="email" placeholder="Email" required />
                        </label>
                        <label className="input input-bordered relative flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            {showPass ? <FaEyeSlash onClick={() => setShowPass(false)} className="absolute right-4" size={15} /> : <FaEye onClick={() => setShowPass(true)} className="absolute right-4" size={15} />}
                            <input type={`${showPass ? 'text' : 'password'}`} className="grow" name="password" placeholder="password" required />
                        </label>
                    </div>
                    <input className="btn w-full btn-primary text-lg font-semibold" type="submit" value={'Register'} />
                </form>
                <div className="divider px-6">Or Login With</div>
                <div className="space-y-3 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-3">
                        <button onClick={handleGoogle} className="btn text-white flex justify-center items-center gap-2 bg-[#B23121]"><FaGoogle size={20} /> Google</button>
                        <button onClick={handleGithub} className="btn text-white flex justify-center items-center gap-2 bg-[#171515]"><FaGithub size={20} /> Github</button>
                        <button onClick={handleTwitter} className="btn text-white flex justify-center items-center gap-2 bg-blue-600"><FaTwitter size={20} /> Twitter</button>
                    </div>
                    <p className="">{reg_here}<button onClick={() => tractPrivate('/authenticate')} className="hover:text-blue-600 hover:underline hover:cursor-pointer">Login here</button></p>
                </div>
            </div>
        </div>
    );
};

export default Register;