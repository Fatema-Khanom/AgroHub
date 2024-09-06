import React from 'react';
// import Banner from '../../Components/Banner/Banner';
//import Chart1 from '../../Components/Charts/Chart1';
import Charts from '../../Components/Charts/Charts';
import VideoBanner from '../../Components/Banner/Banner';
import Map from '../../Components/Map/Map';

const Home = () => {
    return (
        <div>
            <VideoBanner></VideoBanner>
            {/* <Banner></Banner> */}
            
            <Charts></Charts>
            <Map></Map>
        </div>
    );
};

export default Home;