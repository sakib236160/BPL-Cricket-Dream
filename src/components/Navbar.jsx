import Logo from "../assets/logo.png"

// eslint-disable-next-line react/prop-types
const Navbar = ({coinBalance}) => {
    return (
        <div className="flex items-center bg-base-100 mt-6 justify-between sticky top-0 z-50">
            <div className="flex items-center">
                <div className="dropdown lg:hidden">
                <label tabIndex="0" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path opacity="0.25" d="M13.1914 3.47266C8.38672 5.16016 4.52734 8.86719 2.63672 13.5742C2.47266 13.4531 2.3125 13.3281 2.15625 13.1914C1.03516 11.8906 0.359375 10.1992 0.359375 8.35156C0.359375 4.25391 3.68359 0.929688 7.78125 0.929688C9.63281 0.929688 11.3242 1.60547 12.6211 2.72656C12.8281 2.96484 13.0156 3.21484 13.1914 3.47266Z" fill="white"/>
                </svg>
                </label>
                <ul
                    tabIndex="0"
                    className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                    <a>Home</a>
                    </li>
                    <li>
                    <a>Fixture</a>
                    </li>
                    <li>
                    <a>Teams</a>
                    </li>
                    <li>
                    <a>Schedules</a>
                    </li>
                </ul>
                </div>
                <img className="btn btn-ghost" src={Logo} alt="Cricket Logo" />
            </div>

            <div className="lg:hidden">
                <p className="text-xl">BPL CRICKET DREAM</p>
            </div>

            <div className="hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 text-xl text-gray-900 text-opacity-70">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Fixture</a>
                </li>
                <li>
                    <a>Teams</a>
                </li>
                <li>
                    <a>Schedules</a>
                </li>
                </ul>
                <button className="text-xl border rounded-xl border-gray-900 border-opacity-10 p-4 m-1">
                 {coinBalance} Coin
                <i className="fa-brands fa-bitcoin ml-3 text-yellow-500"></i>
                </button>
            </div>
        </div>
    );
};

export default Navbar;