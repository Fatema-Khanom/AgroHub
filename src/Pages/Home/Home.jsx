import React from 'react';

import VideoBanner from '../../Components/Banner/Banner';
import Map from '../../Components/Map/Map';
import AllChart from '../../Components/AllChart/AllChart';
import InteractiveMap from '../../Components/Map/InteractiveMap';
import AgriChat from '../../Components/AgriChat/AgriChat';





const Home = () => {
    return (
        <div>
            <VideoBanner></VideoBanner>
            <AgriChat></AgriChat>
           
            <Map></Map>

            <AllChart></AllChart>
            <InteractiveMap></InteractiveMap>
        </div>
    );
};

export default Home;