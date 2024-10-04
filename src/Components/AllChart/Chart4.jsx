

// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { year: '2018', temperature: 22, waterUsage: 50 },
//   { year: '2019', temperature: 24, waterUsage: 55 },
//   { year: '2020', temperature: 23, waterUsage: 60 },
//   { year: '2021', temperature: 25, waterUsage: 62 },
//   { year: '2022', temperature: 26, waterUsage: 70 },
// ];

// const Chart4 = () => (
//   <div className="h-60 w-100">
//     <h2 className="text-center text- underline font-bold mb-4">Resource Optimization & Historical Climate Trends</h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <AreaChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="year" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Area type="monotone" dataKey="temperature" stackId="1" stroke="#8884d8" fill="#8884d8" name="Temperature (°C)" />
//         <Area type="monotone" dataKey="waterUsage" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Water Usage (m³)" />
//       </AreaChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default Chart4;


import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2018', temperature: 22 },
  { name: '2019', temperature: 24 },
  { name: '2020', temperature: 23 },
  { name: '2021', temperature: 25 },
  { name: '2022', temperature: 26 },
];

// Color palette for each slice of the pie
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BD4'];

const Chart4 = () => (
  <div className="h-60 w-100">
    <h2 className="text-center text-xl font-bold mb-4 underline">Resource Optimization & Historical Climate Trends</h2>
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="temperature"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60} // Creates the donut effect
          outerRadius={100}
          fill="#8884d8"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} // Custom label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="top" align="right" layout="vertical" />
        {/* Black Circle in the Center */}
       
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default Chart4;
