import React from 'react';

import VideoBanner from '../../Components/Banner/Banner';
import Map from '../../Components/Map/Map';
import AllChart from '../../Components/AllChart/AllChart';
import InteractiveMap from '../../Components/Map/InteractiveMap';
import WeatherAR from '../../Components/WeatherAR/WeatherAR';

const Home = () => {
    return (
        <div>
            <VideoBanner></VideoBanner>
            <Map></Map>
            <WeatherAR></WeatherAR>
            <AllChart></AllChart>
            <InteractiveMap></InteractiveMap>
        </div>
    );
};

export default Home;