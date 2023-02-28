import React from 'react';
import '../../Home/HomeCards/HCard/HCard.css'
import { FaRegThumbsUp } from 'react-icons/fa';
const Animals = ({ animalsCard }) => {

    const { name, userName, like, cardImage, personImage } = animalsCard;
    return (
        <div className='mx-3 mt-5 border border-1 rounded-lg'>

            <div className='flex w-full h-72'>
                <img src={cardImage} className='w-full image-radius' alt="" />
            </div>
            <div className='grid grid-cols-2 my-3'>
                <div className='flex'>
                    <div className=' flex justify-start mx-3'>
                        <img src={personImage} className='' alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div >
                            <h6 className='name'>{name}</h6>
                            <p className='text-slate-500 username'>{userName}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end items-center mr-3 '>
                    <FaRegThumbsUp></FaRegThumbsUp>
                    <p className='ml-1'>{like}</p>

                </div>
            </div>

        </div>
    );
};

export default Animals;