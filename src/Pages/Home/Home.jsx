import React from 'react';

import VideoBanner from '../../Components/Banner/Banner';
import Map from '../../Components/Map/Map';
import AllChart from '../../Components/AllChart/AllChart';
import InteractiveMap from '../../Components/Map/InteractiveMap';
import AgriChat from '../../Components/AgriChat/AgriChat';
import WeatherAndDiseaseDetection from '../../Components/WeatherAndDiseaseDetection/WeatherAndDiseaseDetection';
import { StickyNavbar } from '../../Components/Navbar/Navbar';
import { FooterWithSocialLinks } from '../../Components/Footer/Footer';
import AboutOurApp from '../../Components/AboutOurApp/AboutOurApp';
import MyMapComponent from '../../Components/SatelliteMap/SatelliteMap';

// import SearchMap from '../../Components/SearchMap/SearchMap';





const Home = () => {
    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <VideoBanner></VideoBanner>
           
           {/* <Quiz></Quiz> */}
            <WeatherAndDiseaseDetection></WeatherAndDiseaseDetection>
            {/* <SearchMap></SearchMap> */}
             <MyMapComponent></MyMapComponent>
            <AgriChat></AgriChat>
           
            {/* <Map></Map> */}
            
            <AllChart></AllChart>
            <AboutOurApp></AboutOurApp>
            <InteractiveMap></InteractiveMap>
            
            <FooterWithSocialLinks></FooterWithSocialLinks>
        </div>
    );
};

export default Home;