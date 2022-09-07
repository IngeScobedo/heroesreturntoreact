<<<<<<< HEAD
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';
=======
import { Link, NavLink, useNavigate } from 'react-router-dom';
>>>>>>> Routes and pages with basic styles


export const Navbar = () => {

    const navigate = useNavigate()
<<<<<<< HEAD
    const { state, logout } = useContext(AuthContext)

    let username = state.user?.name

    const handleLogout = () => {
        logout()
=======
    const handleLogout = () => {
>>>>>>> Routes and pages with basic styles
        navigate('/login', {
            replace: true
        })
    }
    return (
<<<<<<< HEAD
        <nav className="w-screen h-[100px] bg-black flex items-center gap-3 px-5">

            <Link
                className="text-xl text-white font-bold"
                to="/"
            >
                HeroesApp
            </Link>

            <div className="w-auto h-full flex items-center gap-2">

                <NavLink
                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/marvel"
                >
                    Marvel
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/dc"
                >
                    DC
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/search"
                >
                    Search
                </NavLink>
            </div>

            <div className="navbar-collapse w-full flex justify-end">
                <ul className="w-full h-full flex justify-end gap-6 items-center">
                    <span className='text-xl text-white font-bold'>
                        {username}
                    </span>
                    <button onClick={handleLogout} className='h-full text-white font-bold bg-salmon rounded-md px-3'>
=======
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 flex self-end justify-self-end d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='text-xl text-white font-bold'>
                        Alan
                    </span>
                    <button onClick={handleLogout} className='w-[64px] h-full text-white font-bold bg-transparent border-0 rounded-sm'>
>>>>>>> Routes and pages with basic styles
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}