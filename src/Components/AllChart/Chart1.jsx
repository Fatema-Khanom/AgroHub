

// // import React from 'react';
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // // Example data showing Rainfall (in mm), Temperature (in °C), and Crop Health Index (scale 0-100)
// // const data = [
// //   { month: 'January', rainfall: 120, temperature: 5, health: 70 },
// //   { month: 'February', rainfall: 80, temperature: 7, health: 65 },
// //   { month: 'March', rainfall: 200, temperature: 10, health: 75 },
// //   { month: 'April', rainfall: 150, temperature: 15, health: 80 },
// //   { month: 'May', rainfall: 100, temperature: 20, health: 85 },
// //   { month: 'June', rainfall: 300, temperature: 25, health: 90 },
// //   { month: 'July', rainfall: 350, temperature: 30, health: 95 },
// //   { month: 'August', rainfall: 400, temperature: 28, health: 90 },
// //   { month: 'September', rainfall: 250, temperature: 22, health: 80 },
// //   { month: 'October', rainfall: 200, temperature: 15, health: 75 },
// //   { month: 'November', rainfall: 120, temperature: 10, health: 70 },
// //   { month: 'December', rainfall: 90, temperature: 5, health: 65 },
// // ];

// // const Chart1 = () => (
// //   <div className="h-60 w-100">
// //     <h2 className="text-center text-xl font-bold mb-4">
// //        Rainfall, Temperature, and Crop Health
// //     </h2>
// //     <ResponsiveContainer width="100%" height={400}>
// //       <LineChart data={data}>
// //         <CartesianGrid strokeDasharray="3 3" />
// //         <XAxis dataKey="month" />
// //         <YAxis yAxisId="left" label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
// //         <YAxis yAxisId="right" orientation="right" label={{ value: 'Temperature (°C) & Crop Health', angle: -90, position: 'insideRight' }} />
// //         <Tooltip />
// //         <Legend />
// //         <Line yAxisId="left" type="monotone" dataKey="rainfall" stroke="#8884d8" name="Rainfall (mm)" />
// //         <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#82ca9d" name="Temperature (°C)" />
// //         <Line yAxisId="right" type="monotone" dataKey="health" stroke="#ffc658" name="Crop Health Index" />
// //       </LineChart>
// //     </ResponsiveContainer>
// //   </div>
// // );

// // export default Chart1;


// // import React from 'react';
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // const data = [
// //   { day: 'Day 1', rainfall: 20, soilMoisture: 60 },
// //   { day: 'Day 2', rainfall: 35, soilMoisture: 65 },
// //   { day: 'Day 3', rainfall: 50, soilMoisture: 70 },
// //   { day: 'Day 4', rainfall: 10, soilMoisture: 50 },
// //   { day: 'Day 5', rainfall: 0, soilMoisture: 45 },
// //   { day: 'Day 6', rainfall: 15, soilMoisture: 55 },
// // ];

// // const Chart1 = () => (
// //   <div className="h-60 w-100">
// //     <h2 className="text-center text-xl font-bold mb-4">Real-Time Water Conditions & Rainfall</h2>
// //     <ResponsiveContainer width="100%" height={400}>
// //       <LineChart data={data}>
// //         <CartesianGrid strokeDasharray="3 3" />
// //         <XAxis dataKey="day" />
// //         <YAxis yAxisId="left" label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
// //         <YAxis yAxisId="right" orientation="right" label={{ value: 'Soil Moisture (%)', angle: -90, position: 'insideRight' }} />
// //         <Tooltip />
// //         <Legend />
// //         <Line yAxisId="left" type="monotone" dataKey="rainfall" stroke="#8884d8" name="Rainfall (mm)" />
// //         <Line yAxisId="right" type="monotone" dataKey="soilMoisture" stroke="#82ca9d" name="Soil Moisture (%)" />
// //       </LineChart>
// //     </ResponsiveContainer>
// //   </div>
// // );

// // export default Chart1;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { day: 'Day 1', rainfall: 20, soilMoisture: 60 },
//   { day: 'Day 2', rainfall: 35, soilMoisture: 65 },
//   { day: 'Day 3', rainfall: 50, soilMoisture: 70 },
//   { day: 'Day 4', rainfall: 10, soilMoisture: 50 },
//   { day: 'Day 5', rainfall: 0, soilMoisture: 45 },
//   { day: 'Day 6', rainfall: 15, soilMoisture: 55 },
// ];

// const Chart1 = () => (
//   <div className="h-60 w-100">
//     <h2 className="text-center text-  underline font-bold mb-4">Real-Time Water Conditions & Rainfall</h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="day" />
//         <YAxis yAxisId="left" label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
//         <YAxis yAxisId="right" orientation="right" label={{ value: 'Soil Moisture (%)', angle: -90, position: 'insideRight' }} />
//         <Tooltip />
//         <Legend />
//         {/* Updated line colors */}
//         <Line yAxisId="left" type="monotone" dataKey="rainfall" stroke="#0a9cfb" name="Rainfall (mm)" /> {/* Changed to orange */}
//         <Line yAxisId="right" type="monotone" dataKey="soilMoisture" stroke="#387908" name="Soil Moisture (%)" /> {/* Changed to green */}
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default Chart1;


import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Day 1', rainfall: 20, soilMoisture: 60 },
  { day: 'Day 2', rainfall: 35, soilMoisture: 65 },
  { day: 'Day 3', rainfall: 50, soilMoisture: 70 },
  { day: 'Day 4', rainfall: 10, soilMoisture: 50 },
  { day: 'Day 5', rainfall: 0, soilMoisture: 45 },
  { day: 'Day 6', rainfall: 15, soilMoisture: 55 },
];

const Chart1 = () => (
  <div className="h-60 w-100">
    <h2 className="text-center text-xl underline font-bold mb-4">Real-Time Water Conditions & Rainfall</h2>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Soil Moisture (%)', angle: -90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        {/* Bars instead of lines */}
        <Bar yAxisId="left" dataKey="rainfall" fill="#0a9cfb" name="Rainfall (mm)" /> {/* Blue for rainfall */}
        <Bar yAxisId="right" dataKey="soilMoisture" fill="#387908" name="Soil Moisture (%)" /> {/* Green for soil moisture */}
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default Chart1;
