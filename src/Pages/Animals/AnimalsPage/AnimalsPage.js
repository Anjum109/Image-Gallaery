import React, { useEffect, useState } from 'react';
import Animals from '../Animals/Animals';


const AnimalsPage = () => {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('animals.json')
            .then(res => res.json())
            .then(data => setAnimals(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
                animals?.slice(0, 18).map(animalsCard => <Animals key={animalsCard.id}
                    animalsCard={animalsCard}>

                </Animals>)
            }



        </div>
    );
};

export default AnimalsPage;