import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const { user, setUser, logOut } = useContext(AuthContext);
    // const [theme, setTheme] = useState('light')
    let theme = 'light';
    // const user = null;

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res);
                setUser(null);
            })
    }

    const handleTheme = e => {
        // value="synthwave"
        const value = e.target.checked;
        // console.log(value, new Date());
        if (value) {
            // setTheme('dim');
            theme = 'dark';
        } else {
            // setTheme('light');
            theme = 'light';
        }
        const doc = document.querySelector('html');
        doc.setAttribute('data-theme', theme);
    }
    const navLinks = (
        <>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>Home</NavLink></li>
            <li><NavLink to={'/allcrafts'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>All Crafts</NavLink></li>
            <li><NavLink to={'/mycrafts'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>MY Crafts</NavLink></li>
            <li><NavLink to={'/exhibition'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-700  py-2 font-semibold font-open' : ''}>Exhibition</NavLink></li>
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
                            content={`${user?.displayName}`}
                            place={place}
                        />
                    </label>
                </div>
                <div className="z-10 drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-3">
                        <li className='mt-3 w-full rounded-full flex justify-center items-center'>
                            <img className='overflow-hidden rounded-full max-w-28' id="my-tooltip-anchor" alt="UserProfile" src={`${user?.photoURL}`} />
                        </li>
                        <li className='text-lg mb-3 flex justify-center items-center'>{user?.displayName}</li>
                        <li className='rounded-md flex flex-col justify-center items-center'>
                            <h2 className='text-lg font-mplus font-medium active:bg-none'>Choose Your Theme</h2>
                            <label className="flex cursor-pointer gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                <input onClick={handleTheme} type="checkbox" className="toggle theme-controller" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </label>
                        </li>
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
            <div className="navbar-start pl-3 flex gap-4">
                <div className="dropdown">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                        <div tabIndex={0} htmlFor="my-drawer" role="button" className="btn btn-ghost lg:hidden drawer-content">
                            <label htmlFor="my-drawer" className="btn drawer-button"><svg xmlns="http://www.w3.org/2000/svg" className="drawer-button h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                        </div>
                        <div className="z-10 drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-40 min-h-full bg-base-200 text-base-content">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
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