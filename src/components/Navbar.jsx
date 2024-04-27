import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const { user, setUser, logOut } = useContext(AuthContext);
    // const user = null;

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res);
                setUser(null);
            })
    }

    const navLinks = (
        <>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>Home</NavLink></li>
            <li><NavLink to={'/allcrafts'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>All Crafts</NavLink></li>
            <li><NavLink to={'/mycrafts'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>MY Crafts</NavLink></li>
            <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>About</NavLink></li>
        </>
    );
    const place = 'bottom-end';

    const drawer = (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content btn btn-ghost btn-circle avatar">
                    <label htmlFor="my-drawer-4" className="drawer-button w-10 rounded-full overflow-hidden">
                        <img className='overflow-hidden' id="my-tooltip-anchor" alt="Tailwind CSS Navbar component" src={`${user?.photoURL}`} />
                        <Tooltip
                            key={place}
                            anchorSelect="#my-tooltip-anchor"
                            content={`${user?.displayName}!`}
                            place={place}
                        />
                    </label>
                </div>
                <div className="z-10 drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-3">
                        <li className='mt-3 w-full rounded-full flex justify-center items-center'>
                            <img className='overflow-hidden rounded-full w-26' id="my-tooltip-anchor" alt="UserProfile" src={`${user?.photoURL}`} />
                        </li>
                        <li className='text-lg mb-3 flex justify-center items-center'>{user?.displayName}</li>
                        <li className='bg-orange-200 rounded-md hover:bg-orange-100'>
                            <Link to={'/updateProfile'}>
                                Update Profile
                            </Link>
                        </li>
                        <li className='bg-orange-200 rounded-md hover:bg-orange-100'>
                            <Link to={'/viewProfile'}>
                                View Profile
                            </Link>
                        </li>
                        <li className='rounded-md hover:bg-orange-100'><button onClick={handleLogout} className='btn btn-outline text-white font-exo text-lg bg-orange-600 hover:bg-orange-400'>Logout</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
    const navEnd = (
        <>
            <div className="dropdown dropdown-end">
                {drawer}
            </div>
        </>
    );

    const login = (
        <Link to={'/authenticate'}>
            <button className='btn btn-accent'>Login</button>
        </Link>
    );
    return (
        <div className="w-[95%] mx-auto my-4 shadow navbar bg-orange-50">
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
                <div className='flex justify-center items-center gap-3'>
                    {
                        user ? navEnd : login
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;