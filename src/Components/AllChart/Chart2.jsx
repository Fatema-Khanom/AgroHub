

// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { date: 'Day 1', cycloneAlert: 30, stormRisk: 40 },
//   { date: 'Day 2', cycloneAlert: 70, stormRisk: 50 },
//   { date: 'Day 3', cycloneAlert: 100, stormRisk: 70 },
//   { date: 'Day 4', cycloneAlert: 80, stormRisk: 65 },
//   { date: 'Day 5', cycloneAlert: 50, stormRisk: 45 },
// ];

// const Chart2 = () => (
//   <div className="h-60 w-100">
//     <h2 className="text-center text- underline font-bold mb-4">Severe Weather & Natural Disaster Prediction</h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <AreaChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Area type="monotone" dataKey="cycloneAlert" stackId="1" stroke="#8884d8" fill="#8884d8" name="Cyclone Alert (%)" />
//         <Area type="monotone" dataKey="stormRisk" stackId="1" stroke="#ffc658" fill="#ffc658" name="Storm Risk (%)" />
//       </AreaChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default Chart2;


import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data for the histogram
const data = [
  { date: 'Day 1', cycloneAlert: 30, stormRisk: 40 },
  { date: 'Day 2', cycloneAlert: 70, stormRisk: 50 },
  { date: 'Day 3', cycloneAlert: 100, stormRisk: 70 },
  { date: 'Day 4', cycloneAlert: 80, stormRisk: 65 },
  { date: 'Day 5', cycloneAlert: 50, stormRisk: 45 },
];

const Chart2 = () => (
  <div className="h-60 w-100">
    <h2 className="text-center text-xl underline font-bold mb-4">Severe Weather & Natural Disaster Histogram</h2>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} barCategoryGap={10}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Bars for Cyclone Alert and Storm Risk */}
        <Bar dataKey="cycloneAlert" fill="#8884d8" name="Cyclone Alert (%)" />
        <Bar dataKey="stormRisk" fill="#ffc658" name="Storm Risk (%)" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default Chart2;
