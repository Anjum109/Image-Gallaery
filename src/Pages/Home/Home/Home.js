import React from 'react';
import Header from '../Header/Header';
import HCard from '../HomeCards/HCard/HCard';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-[1140px] mx-auto mt-5'>
                <HCard></HCard>
            </div>
        </div>
    );
};

export default Home;