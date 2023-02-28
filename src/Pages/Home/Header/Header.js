import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className="hero h-[500px]" id="background-image" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content grid grid-cols-1">
                <div><p className='text-sm banner-p '>
                    Search high resolution Images, categories, wallpapers
                </p></div>
                <div className=" search">
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="Search high resolution Images, categories, wallpapers" className="input text-black input-bordered w-full input-search-banner" />

                </div>
            </div>
        </div>
    );
};

export default Header;