import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    // const user = null;

    const navLinks = (
        <>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>Home</NavLink></li>
            <li><NavLink to={'/allcrafts'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>All Crafts</NavLink></li>
            <li><NavLink to={'/mycrafts'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>MY Crafts</NavLink></li>
            <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>About</NavLink></li>
        </>
    );
    const navEnd = (
        <>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-30 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a className='btn btn-outline'>Logout</a></li>
                </ul>
            </div>
        </>
    );
    const login = (
        <Link to={'/authenticate'}>
            <button className='btn btn-accent'>Login</button>
        </Link>
    );

    return (
        <div className="w-[95%] mx-auto my-2 shadow navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className='btn btn-ghost flex justify-center items-center'>
                    <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/2970/2970785.png" alt="logo img" />
                    <p className="text-xl font-mplus">Artisan Haven</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-10">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?navEnd:login
                }
            </div>
        </div>
    );
};

export default Navbar;