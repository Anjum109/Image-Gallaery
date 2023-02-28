import React, { useEffect, useState } from 'react';
import HMapCards from '../HMapCards/HMapCards';

// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import Gallery from 'react-photo-gallery';

const HCard = () => {

    const [homeCards, setHomeCards] = useState([]);

    useEffect(() => {
        fetch('homeCards.json')
            .then(res => res.json())
            .then(data => setHomeCards(data))
    }, [])

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                homeCards?.slice(0, 18).map(mapCard => <HMapCards key={mapCard.id}
                    mapCard={mapCard}>

                </HMapCards>)
            }
        </div >


        // <div classNameName='mt-5'>
        //     <ResponsiveMasonry
        //         columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} classNameName='p-5'
        //     >
        //         <Masonry>
        //             {
        //                 homeCards?.slice(0, 18).map(mapCard => <HMapCards key={mapCard.id}
        //                     mapCard={mapCard}>

        //                 </HMapCards>)
        //             }
        //         </Masonry>
        //     </ResponsiveMasonry>

        // </div>



    );
};

export default HCard;