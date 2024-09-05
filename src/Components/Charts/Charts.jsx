import React from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';

const Charts = () => {
    return (
        <div className="px-20 py-20">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <Chart1></Chart1>
            <Chart2></Chart2>
            <Chart3></Chart3>
            <Chart4></Chart4>
        </div>
        </div>
    );
};

export default Charts;