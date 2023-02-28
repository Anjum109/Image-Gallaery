import React from 'react';
import AnimalsPage from '../Animals/AnimalsPage/AnimalsPage';
import './Search.css'

const SearchPage = () => {
    return (
        <div className='max-w-[1140px] mx-auto'>
            <div className='flex m-5  '>
                <h1 className='animals font-bold'>Animals in the wild</h1>
            </div>
            <div className='grid grid-cols-8 gap-2'>
                <div>
                    <button className="border border-spacing-1 w-full px-4 py-2 rounded-md text-center text-lg">Elephants</button>
                </div>
                <div>
                    <button className="border border-spacing-1 w-full px-4 py-2 rounded-md text-center text-lg">Tigers</button>
                </div>
                <div>
                    <button className="border border-spacing-1 w-full px-4 py-2 rounded-md text-center text-lg">Birds</button>
                </div>
                <div>
                    <button className="border border-spacing-1 w-full px-4 py-2 rounded-md text-center text-lg">Mammals</button>
                </div>
                <div>
                    <button className="border border-spacing-1 w-full px-4 py-2 rounded-md text-center text-lg">Nature</button>
                </div>
                <div>
                    <button className="border border-spacing-1 w-full px-4 py-2 rounded-md text-center text-lg">Wallpaper</button>
                </div>
                <div>
                    <button className="border border-spacing-1 w-full px-4 py-2 rounded-md text-center text-lg">Brown</button>
                </div>
                <div>
                    <button className="border border-spacing-1 w-full px-4 py-2 rounded-md text-center text-lg">Background</button>
                </div>
            </div>
            <div className=''>
                <AnimalsPage></AnimalsPage>
            </div>
        </div>
    );
};

export default SearchPage;