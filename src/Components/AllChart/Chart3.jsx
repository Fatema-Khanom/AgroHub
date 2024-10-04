

// // import React, { PureComponent } from 'react';
// // import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // const data = [
// //   { name: 'Week 1', moisture: 70, growth: 240, fertilizer: 240 },
// //   { name: 'Week 2', moisture: 60, growth: 210, fertilizer: 220 },
// //   { name: 'Week 3', moisture: 75, growth: 300, fertilizer: 230 },
// //   { name: 'Week 4', moisture: 80, growth: 350, fertilizer: 240 },
// //   { name: 'Week 5', moisture: 65, growth: 270, fertilizer: 210 },
// //   { name: 'Week 6', moisture: 70, growth: 280, fertilizer: 220 },
// //   { name: 'Week 7', moisture: 72, growth: 290, fertilizer: 230 },
// // ];

// // export default class Chart3 extends PureComponent {
// //   render() {
// //     return (
// //       <div className="h-60 w-100">
// //         <h2 className="text-center text-xl font-bold mb-4">Soil Moisture vs. Crop Growth Analysis</h2>
// //         <ResponsiveContainer width="100%" height={400}>
// //           <AreaChart data={data}>
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="name" />
// //             <YAxis />
// //             <Tooltip 
// //               formatter={(value, name) => [`${value}%`, name]} // Displays percentage values in tooltip
// //               labelFormatter={(label) => `Week: ${label}`} // Custom label for the tooltip
// //             />
// //             <Legend verticalAlign="bottom" height={36} /> {/* Adds a legend to distinguish the data */}
// //             <Area type="monotone" dataKey="moisture" stackId="1" stroke="#8884d8" fill="#8884d8" name="Soil Moisture (%)" />
// //             <Area type="monotone" dataKey="growth" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Crop Growth (%)" />
// //             <Area type="monotone" dataKey="fertilizer" stackId="1" stroke="#ffc658" fill="#ffc658" name="Fertilizer Use (%)" />
// //           </AreaChart>
// //         </ResponsiveContainer>
// //       </div>
// //     );
// //   }
// // }

// // import React from 'react';
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // const data = [
// //   { month: 'January', cropHealth: 80, soilQuality: 75 },
// //   { month: 'February', cropHealth: 85, soilQuality: 80 },
// //   { month: 'March', cropHealth: 90, soilQuality: 82 },
// //   { month: 'April', cropHealth: 75, soilQuality: 78 },
// //   { month: 'May', cropHealth: 80, soilQuality: 70 },
// // ];

// // const CustomTooltip = ({ active, payload, label }) => {
// //   if (active && payload && payload.length) {
// //     return (
// //       <div className="bg-white p-2 rounded shadow">
// //         <p className="label font-bold">{`Month: ${label}`}</p>
// //         <p className="intro">{`Crop Health: ${payload[0].value}%`}</p>
// //         <p className="intro">{`Soil Quality: ${payload[1].value}%`}</p>
// //       </div>
// //     );
// //   }

// //   return null;
// // };

// // const Chart3 = () => (
// //   <div className="h-60 w-100">
// //     <h2 className="text-center text-xl font-bold mb-4">Crop Health Monitoring & Soil Reports</h2>
// //     <ResponsiveContainer width="100%" height={400}>
// //       <LineChart data={data}>
// //         <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />
// //         <XAxis dataKey="month" />
// //         <YAxis yAxisId="left" label={{ value: 'Crop Health (%)', angle: -90, position: 'insideLeft' }} />
// //         <YAxis yAxisId="right" orientation="right" label={{ value: 'Soil Quality (%)', angle: -90, position: 'insideRight' }} />
// //         <Tooltip content={<CustomTooltip />} />
// //         <Legend verticalAlign="top" align="center" />
// //         {/* Crop Health with dashed line */}
// //         <Line
// //           yAxisId="left"
// //           type="monotone"
// //           dataKey="cropHealth"
// //           stroke="#82ca9d"
// //           strokeWidth={3}
// //           dot={{ r: 6 }}
// //           strokeDasharray="5 5"  // Dashed line
// //           name="Crop Health (%)"
// //         />
// //         {/* Soil Quality with a smoother curve */}
// //         <Line
// //           yAxisId="right"
// //           type="basis"  // Smoother curve
// //           dataKey="soilQuality"
// //           stroke="#8884d8"
// //           strokeWidth={3}
// //           dot={{ r: 6 }}
// //           opacity={0.7}
// //           name="Soil Quality (%)"
// //         />
// //       </LineChart>
// //     </ResponsiveContainer>
// //   </div>
// // );

// // export default Chart3;

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { month: 'January', cropHealth: 80, soilQuality: 75 },
//   { month: 'February', cropHealth: 85, soilQuality: 80 },
//   { month: 'March', cropHealth: 90, soilQuality: 82 },
//   { month: 'April', cropHealth: 75, soilQuality: 78 },
//   { month: 'May', cropHealth: 80, soilQuality: 70 },
// ];

// const Chart3 = () => (
//   <div className="h-60 w-100">
//     <h2 className="text-center text- underline font-bold mb-4">Crop Health Monitoring & Soil Reports</h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis yAxisId="left" label={{ value: 'Crop Health Index (%)', angle: -90, position: 'insideLeft' }} />
//         <YAxis yAxisId="right" orientation="right" label={{ value: 'Soil Quality Index (%)', angle: -90, position: 'insideRight' }} />
//         <Tooltip />
//         <Legend />
//         <Line yAxisId="left" type="monotone" dataKey="cropHealth" stroke="#82ca9d" name="Crop Health Index (%)" />
//         <Line yAxisId="right" type="monotone" dataKey="soilQuality" stroke="#8884d8" name="Soil Quality Index (%)" />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default Chart3;


import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Crop Health', value: 80 },
  { name: 'Soil Quality', value: 75 },
  { name: 'Crop Health (Feb)', value: 85 },
  { name: 'Soil Quality (Feb)', value: 80 },
  { name: 'Crop Health (Mar)', value: 90 },
  { name: 'Soil Quality (Mar)', value: 82 },
  { name: 'Crop Health (Apr)', value: 75 },
  { name: 'Soil Quality (Apr)', value: 78 },
  { name: 'Crop Health (May)', value: 80 },
  { name: 'Soil Quality (May)', value: 70 },
];

const COLORS = ['#82ca9d', '#8884d8', '#ffc658', '#ff7300', '#ffbb28', '#00c49f', '#0088FE', '#FF8042'];

const Chart3 = () => (
  <div className="h-60 w-100">
    <h2 className="text-center text-underline text-xl font-bold mb-4 underline ">Crop Health and Soil Quality Distribution</h2>
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default Chart3;
