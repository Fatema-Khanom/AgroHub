import React from 'react';

import VideoBanner from '../../Components/Banner/Banner';
import Map from '../../Components/Map/Map';
// import AllChart from '../../Components/AllChart/AllChart';

const Home = () => {
    return (
        <div>
            <VideoBanner></VideoBanner>
            {/* <Banner></Banner> */}
            {/* <AllChart></AllChart> */}
            
            <Map></Map>
        </div>
    );
};

export default Home;