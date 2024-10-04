import React from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';

const AllChart = () => {
    return (
        <div className="px-4 md:px-10 lg:px-24 lg:-ml-4 py-16 mb-20 " id="chart">
             <header className=" pb-10 py-  ">
          <h1 className="text-2xl underlin text-cente text-green-900 font-bold">Data Visualization</h1>
        </header>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-60 pb-28'>
                <Chart3></Chart3>
                <Chart1></Chart1>
                
            <Chart2></Chart2>
            
            <Chart4></Chart4>
        </div>
        </div>
    );
};

export default AllChart;