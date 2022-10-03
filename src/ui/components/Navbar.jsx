import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/login', {
            replace: true
        })
    }
    return (
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

                    <NavLink
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 flex self-end justify-self-end d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='text-xl text-white font-bold'>
                        Alan
                    </span>
                    <button onClick={handleLogout} className='w-[64px] h-full text-white font-bold bg-transparent border-0 rounded-sm'>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}