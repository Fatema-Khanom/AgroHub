
// import React from 'react';
// import {
//   AreaChart,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Area,
//   ResponsiveContainer,
//   Legend
// } from 'recharts';

// // Example data showing cumulative rainfall and temperature
// const data = [
//   { month: 'January', cumulativeRainfall: 120, cumulativeTemperature: 10 },
//   { month: 'February', cumulativeRainfall: 200, cumulativeTemperature: 22 },
//   { month: 'March', cumulativeRainfall: 400, cumulativeTemperature: 37 },
//   { month: 'April', cumulativeRainfall: 550, cumulativeTemperature: 55 },
//   { month: 'May', cumulativeRainfall: 650, cumulativeTemperature: 75 },
//   { month: 'June', cumulativeRainfall: 950, cumulativeTemperature: 100 },
//   { month: 'July', cumulativeRainfall: 1300, cumulativeTemperature: 130 },
//   { month: 'August', cumulativeRainfall: 1700, cumulativeTemperature: 165 },
//   { month: 'September', cumulativeRainfall: 1950, cumulativeTemperature: 200 },
//   { month: 'October', cumulativeRainfall: 2100, cumulativeTemperature: 230 },
//   { month: 'November', cumulativeRainfall: 2250, cumulativeTemperature: 260 },
//   { month: 'December', cumulativeRainfall: 2400, cumulativeTemperature: 290 },
// ];

// const Chart4 = () => (
//   <div style={{ width: '100%', height: '400px' }}>
//     <h2 className="text-center text-xl font-bold mb-4">
//       Cumulative Rainfall & Temperature
//     </h2>
//     <ResponsiveContainer width="100%" height="100%">
//       <AreaChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Legend verticalAlign="bottom" height={36} />
//         <Area
//           type="monotone"
//           dataKey="cumulativeRainfall"
//           stroke="#82ca9d"
//           fillOpacity={0.3}
//           fill="#82ca9d"
//           name="Cumulative Rainfall (mm)"
//         />
//         <Area
//           type="monotone"
//           dataKey="cumulativeTemperature"
//           stroke="#8884d8"
//           fillOpacity={0.3}
//           fill="#8884d8"
//           name="Cumulative Temperature (°C)"
//         />
//       </AreaChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default Chart4;

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2018', temperature: 22, waterUsage: 50 },
  { year: '2019', temperature: 24, waterUsage: 55 },
  { year: '2020', temperature: 23, waterUsage: 60 },
  { year: '2021', temperature: 25, waterUsage: 62 },
  { year: '2022', temperature: 26, waterUsage: 70 },
];

const Chart4 = () => (
  <div className="h-60 w-100">
    <h2 className="text-center text- underline font-bold mb-4">Resource Optimization & Historical Climate Trends</h2>
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="temperature" stackId="1" stroke="#8884d8" fill="#8884d8" name="Temperature (°C)" />
        <Area type="monotone" dataKey="waterUsage" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Water Usage (m³)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default Chart4;
