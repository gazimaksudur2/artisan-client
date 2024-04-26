import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
    const reg_here = "Don't have an Account?";

    const handleSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div className='min-h-screen relative bg-auth1 bg-cover bg-no-repeat backdrop-blur flex flex-row-reverse justify-evenly items-center'>
            <div className="absolute w-full -z-20 inset-0 bg-black opacity-50 min-h-full"></div>
            <div className='w-[45%] p-10 rounded-md backdrop-blur flex flex-col justify-center items-center text-right gap-4'>
                <h1 className="font-exo font-semibold text-4xl text-white w-full text-right">A Celebration of Creativity</h1>
                <p className="text-gray-300 text-lg">Our gallery showcases the diverse talents of local and international artisans, offering a kaleidoscope of colors, textures, and forms that captivate the senses and ignite the imagination. </p>
                <Link to={'/'} className="btn w-[40%] flex justify-center items-center"><IoArrowBackSharp size={20}/> <p>Go Back Home</p></Link>
            </div>
            <div className='w-[30%] py-8 bg-white rounded text-[#505050] flex flex-col justify-center items-center space-y-4 font-mplus'>
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className="flex justify-center items-center gap-2">
                        <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/2970/2970785.png" alt="logo" />
                        <h1 className="font-exo font-bold text-3xl">Artisan Haven</h1>
                    </div>
                    <p className="font-open text-xl font-semibold text-blue-600">Sign In Your Account</p>
                </div>
                <form onSubmit={handleSubmit} className='w-full py-4 px-10 space-y-6'>
                    <div className="space-y-3">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Username" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" value="password" />
                        </label>
                        <div className="flex flex-row justify-between items-center">
                            <div className="form-control">
                                <label className="label cursor-pointer flex-row-reverse gap-2">
                                    <span className="label-text">Remember me</span>
                                    <input type="checkbox" className="checkbox scale-90" />
                                </label>
                            </div>
                            <p className="hover:text-blue-600 hover:underline hover:cursor-pointer">Forget Your Password?</p>
                        </div>
                    </div>
                    <input className="btn w-full btn-primary text-lg font-semibold" type="submit" value={'Sign In'} />
                </form>
                <div className="divider px-6">Or Login With</div>
                <div className="space-y-3 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-3">
                        <button className="btn text-white flex justify-center items-center gap-2 bg-[#B23121]"><FaGoogle size={20} /> Google</button>
                        <button className="btn text-white flex justify-center items-center gap-2 bg-[#171515]"><FaGithub size={20} /> Github</button>
                        <button className="btn text-white flex justify-center items-center gap-2 bg-blue-600"><FaTwitter size={20} /> Twitter</button>
                    </div>
                    <p className="">{reg_here}<Link to={'/authenticate/register'} className="hover:text-blue-600 hover:underline hover:cursor-pointer">Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;