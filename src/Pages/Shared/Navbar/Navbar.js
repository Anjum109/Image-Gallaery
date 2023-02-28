import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            navigate("/search");
        }
    };


    return (
        <div className="navbar bg-base-100 p-5 mx-auto lg:max-w-[1440px]" >
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Explore</a>
                        </li>
                        <li>
                            <a>Collection</a>
                        </li>
                        <li>
                            <a>Community</a>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <i className="text-3xl">Image Gallery</i>
                </Link>
            </div>
            <div className="navbar-center">
                <div className="form-control wrapper">
                    <div className=" search-input">
                        {/* <i className="fa-solid fa-search"></i> */}

                        <input
                            type="search"
                            placeholder="Search images here"
                            className="input input-bordered input-search"
                            onKeyDown={handleKeyDown}
                        />



                    </div>
                </div>
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Explore</a>
                    </li>
                    <li>
                        <a>Collection</a>
                    </li>
                    <li>
                        <a>Community</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost normal-case text-xl">Dark Mode</a>
                <input type="checkbox" className="toggle" unchecked />
            </div>
        </div>
    );
};



export default Navbar;