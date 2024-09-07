// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'July', uv: 3490, pv: 4300, amt: 2100 }
// ];

// const Chart1 = () => (
// 	<div className="h-60 w-100">
// 		<ResponsiveContainer width="100%" height={400}>
//     <LineChart data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//       {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//     </LineChart>
//   </ResponsiveContainer>
//   </div>
// );

// export default Chart1;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Example data showing monthly Rainfall (in mm) and Crop Yield (in tons)
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

// const Chart1 = () => (
//   <div className="h-60 w-100">
//     <h2 className="text-center text-[18px] font-bold mb-4">
//       Rainfall vs. Crop Yield Analysis for Agricultural Planning
//     </h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis yAxisId="left" label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
//         <YAxis yAxisId="right" orientation="right" label={{ value: 'Crop Yield (tons)', angle: -90, position: 'insideRight' }} />
//         <Tooltip />
//         <Legend />
//         <Line yAxisId="left" type="monotone" dataKey="rainfall" stroke="#8884d8" name="Rainfall (mm)" />
//         <Line yAxisId="right" type="monotone" dataKey="yield" stroke="#82ca9d" name="Crop Yield (tons)" />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default Chart1;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Example data showing Rainfall (in mm), Temperature (in °C), and Crop Health Index (scale 0-100)
const data = [
  { month: 'January', rainfall: 120, temperature: 5, health: 70 },
  { month: 'February', rainfall: 80, temperature: 7, health: 65 },
  { month: 'March', rainfall: 200, temperature: 10, health: 75 },
  { month: 'April', rainfall: 150, temperature: 15, health: 80 },
  { month: 'May', rainfall: 100, temperature: 20, health: 85 },
  { month: 'June', rainfall: 300, temperature: 25, health: 90 },
  { month: 'July', rainfall: 350, temperature: 30, health: 95 },
  { month: 'August', rainfall: 400, temperature: 28, health: 90 },
  { month: 'September', rainfall: 250, temperature: 22, health: 80 },
  { month: 'October', rainfall: 200, temperature: 15, health: 75 },
  { month: 'November', rainfall: 120, temperature: 10, health: 70 },
  { month: 'December', rainfall: 90, temperature: 5, health: 65 },
];

const Chart2 = () => (
  <div className="h-60 w-100">
    <h2 className="text-center text-xl font-bold mb-4">
       Rainfall, Temperature, and Crop Health
    </h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Temperature (°C) & Crop Health', angle: -90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="rainfall" stroke="#8884d8" name="Rainfall (mm)" />
        <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#82ca9d" name="Temperature (°C)" />
        <Line yAxisId="right" type="monotone" dataKey="health" stroke="#ffc658" name="Crop Health Index" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Chart2;
