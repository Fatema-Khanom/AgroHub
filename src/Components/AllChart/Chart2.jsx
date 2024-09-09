
// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { month: 'January', rainfall: 120, yield: 3.5 },
//   { month: 'February', rainfall: 80, yield: 2.8 },
//   { month: 'March', rainfall: 200, yield: 4.2 },
//   { month: 'April', rainfall: 150, yield: 3.7 },
//   { month: 'May', rainfall: 100, yield: 3.0 },
//   { month: 'June', rainfall: 300, yield: 4.5 },
//   { month: 'July', rainfall: 350, yield: 4.8 },
//   { month: 'August', rainfall: 400, yield: 5.1 },
//   { month: 'September', rainfall: 250, yield: 4.0 },
//   { month: 'October', rainfall: 200, yield: 3.9 },
//   { month: 'November', rainfall: 120, yield: 3.4 },
//   { month: 'December', rainfall: 90, yield: 2.7 },
// ];

// const Chart2 = () => (
//   <div className="h-60 w-100">
//     <h2 className="text-center text-xl font-bold mb-4">
//       Cumulative Impact of Rainfall on Crop Yield
//     </h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <AreaChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Legend verticalAlign="bottom" height={36} />
//         <Area type="monotone" dataKey="rainfall" stackId="1" stroke="#8884d8" fill="#8884d8" name="Rainfall (mm)" />
//         <Area type="monotone" dataKey="yield" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Crop Yield (tons)" />
//       </AreaChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default Chart2;

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Day 1', cycloneAlert: 30, stormRisk: 40 },
  { date: 'Day 2', cycloneAlert: 70, stormRisk: 50 },
  { date: 'Day 3', cycloneAlert: 100, stormRisk: 70 },
  { date: 'Day 4', cycloneAlert: 80, stormRisk: 65 },
  { date: 'Day 5', cycloneAlert: 50, stormRisk: 45 },
];

const Chart2 = () => (
  <div className="h-60 w-100">
    <h2 className="text-center text- underline font-bold mb-4">Severe Weather & Natural Disaster Prediction</h2>
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="cycloneAlert" stackId="1" stroke="#8884d8" fill="#8884d8" name="Cyclone Alert (%)" />
        <Area type="monotone" dataKey="stormRisk" stackId="1" stroke="#ffc658" fill="#ffc658" name="Storm Risk (%)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default Chart2;
