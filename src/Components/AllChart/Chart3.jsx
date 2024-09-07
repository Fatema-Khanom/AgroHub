// // import React, { PureComponent } from 'react';
// // import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// // const data = [
// //   {
// //     name: 'Page A',
// //     uv: 4000,
// //     pv: 2400,
// //     amt: 2400,
// //   },
// //   {
// //     name: 'Page B',
// //     uv: 3000,
// //     pv: 1398,
// //     amt: 2210,
// //   },
// //   {
// //     name: 'Page C',
// //     uv: 2000,
// //     pv: 9800,
// //     amt: 2290,
// //   },
// //   {
// //     name: 'Page D',
// //     uv: 2780,
// //     pv: 3908,
// //     amt: 2000,
// //   },
// //   {
// //     name: 'Page E',
// //     uv: 1890,
// //     pv: 4800,
// //     amt: 2181,
// //   },
// //   {
// //     name: 'Page F',
// //     uv: 2390,
// //     pv: 3800,
// //     amt: 2500,
// //   },
// //   {
// //     name: 'Page G',
// //     uv: 3490,
// //     pv: 4300,
// //     amt: 2100,
// //   },
// // ];

// // export default class Chart3 extends PureComponent {
// //   static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-area-chart-forked-5yjhcs';

// //   render() {
// //     return (
// //       <ResponsiveContainer width="100%" height="100%">
// //         <AreaChart
// //           width={600}
// //           height={400}
// //           data={data}
// //         //   margin={{
// //         //     top: 10,
// //         //     right: 30,
// //         //     left: 0,
// //         //     bottom: 0,
// //         //   }}
// //         >
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="name" />
// //           <YAxis />
// //           <Tooltip />
// //           <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
// //           <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
// //           <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
// //         </AreaChart>
// //       </ResponsiveContainer>
// //     );
// //   }
// // }
// import React, { PureComponent } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
// ];

// export default class Chart3 extends PureComponent {
//   render() {
//     return (
//       <div className="h-60 w-100">
//         <ResponsiveContainer width="100%" height={400}>
//           <AreaChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
//             <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
//             <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }
// }

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', moisture: 70, growth: 240, fertilizer: 240 },
  { name: 'Week 2', moisture: 60, growth: 210, fertilizer: 220 },
  { name: 'Week 3', moisture: 75, growth: 300, fertilizer: 230 },
  { name: 'Week 4', moisture: 80, growth: 350, fertilizer: 240 },
  { name: 'Week 5', moisture: 65, growth: 270, fertilizer: 210 },
  { name: 'Week 6', moisture: 70, growth: 280, fertilizer: 220 },
  { name: 'Week 7', moisture: 72, growth: 290, fertilizer: 230 },
];

export default class Chart3 extends PureComponent {
  render() {
    return (
      <div className="h-60 w-100">
        <h2 className="text-center text-xl font-bold mb-4">Soil Moisture vs. Crop Growth Analysis</h2>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              formatter={(value, name) => [`${value}%`, name]} // Displays percentage values in tooltip
              labelFormatter={(label) => `Week: ${label}`} // Custom label for the tooltip
            />
            <Legend verticalAlign="bottom" height={36} /> {/* Adds a legend to distinguish the data */}
            <Area type="monotone" dataKey="moisture" stackId="1" stroke="#8884d8" fill="#8884d8" name="Soil Moisture (%)" />
            <Area type="monotone" dataKey="growth" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Crop Growth (%)" />
            <Area type="monotone" dataKey="fertilizer" stackId="1" stroke="#ffc658" fill="#ffc658" name="Fertilizer Use (%)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
