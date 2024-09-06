import React from 'react';

import VideoBanner from '../../Components/Banner/Banner';
import Map from '../../Components/Map/Map';

const Home = () => {
    return (
        <div>
            <VideoBanner></VideoBanner>
            {/* <Banner></Banner> */}
            
            
            <Map></Map>
        </div>
    );
};

export default Home;