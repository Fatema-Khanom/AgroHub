// // import React, { PureComponent } from 'react';
// // import {
// //   LineChart,
// //   Line,
// //   CartesianGrid,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ReferenceArea,
// //   ResponsiveContainer,
// // } from 'recharts';

// // const initialData = [
// //   { name: 1, cost: 4.11, impression: 100 },
// //   { name: 2, cost: 2.39, impression: 120 },
// //   { name: 3, cost: 1.37, impression: 150 },
// //   { name: 4, cost: 1.16, impression: 180 },
// //   { name: 5, cost: 2.29, impression: 200 },
// //   { name: 6, cost: 3, impression: 499 },
// //   { name: 7, cost: 0.53, impression: 50 },
// //   { name: 8, cost: 2.52, impression: 100 },
// //   { name: 9, cost: 1.79, impression: 200 },
// //   { name: 10, cost: 2.94, impression: 222 },
// //   { name: 11, cost: 4.3, impression: 210 },
// //   { name: 12, cost: 4.41, impression: 300 },
// //   { name: 13, cost: 2.1, impression: 50 },
// //   { name: 14, cost: 8, impression: 190 },
// //   { name: 15, cost: 0, impression: 300 },
// //   { name: 16, cost: 9, impression: 400 },
// //   { name: 17, cost: 3, impression: 200 },
// //   { name: 18, cost: 2, impression: 50 },
// //   { name: 19, cost: 3, impression: 100 },
// //   { name: 20, cost: 7, impression: 100 },
// // ];

// // const getAxisYDomain = (from, to, ref, offset) => {
// //   const refData = initialData.slice(from - 1, to);
// //   let [bottom, top] = [refData[0][ref], refData[0][ref]];
// //   refData.forEach((d) => {
// //     if (d[ref] > top) top = d[ref];
// //     if (d[ref] < bottom) bottom = d[ref];
// //   });

// //   return [(bottom | 0) - offset, (top | 0) + offset];
// // };

// // const initialState = {
// //   data: initialData,
// //   left: 'dataMin',
// //   right: 'dataMax',
// //   refAreaLeft: '',
// //   refAreaRight: '',
// //   top: 'dataMax+1',
// //   bottom: 'dataMin-1',
// //   top2: 'dataMax+20',
// //   bottom2: 'dataMin-20',
// //   animation: true,
// // };

// // export default class Chart2 extends PureComponent {
// //   static demoUrl = 'https://codesandbox.io/p/sandbox/highlight-zoom-line-chart-rrj8f4';

// //   constructor(props) {
// //     super(props);
// //     this.state = initialState;
// //   }

// //   zoom() {
// //     let { refAreaLeft, refAreaRight } = this.state;
// //     const { data } = this.state;

// //     if (refAreaLeft === refAreaRight || refAreaRight === '') {
// //       this.setState({
// //         refAreaLeft: '',
// //         refAreaRight: '',
// //       });
// //       return;
// //     }

// //     // Ensure refAreaLeft is less than refAreaRight
// //     if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

// //     // xAxis domain
// //     const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
// //     const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);

// //     this.setState({
// //       refAreaLeft: '',
// //       refAreaRight: '',
// //       left: refAreaLeft,
// //       right: refAreaRight,
// //       bottom,
// //       top,
// //       bottom2,
// //       top2,
// //     });
// //   }

// //   zoomOut() {
// //     const { data } = this.state;
// //     this.setState({
// //       data: data.slice(),
// //       refAreaLeft: '',
// //       refAreaRight: '',
// //       left: 'dataMin',
// //       right: 'dataMax',
// //       top: 'dataMax+1',
// //       bottom: 'dataMin',
// //       top2: 'dataMax+50',
// //       bottom2: 'dataMin+50',
// //     });
// //   }

// //   render() {
// //     const {
// //       data,
// //       left,
// //       right,
// //       refAreaLeft,
// //       refAreaRight,
// //       top,
// //       bottom,
// //       top2,
// //       bottom2
// //     } = this.state;

// //     return (
// //       <div className="highlight-bar-charts h-54">
// //         {/* Uncomment the following button if you want a zoom-out feature */}
// //         {/* <button type="button" className="btn update" onClick={this.zoomOut.bind(this)}>
// //           Zoom Out
// //         </button> */}

// //         <ResponsiveContainer width="100%" height={400}>
// //           <LineChart
// //             data={data}
// //             onMouseDown={(e) => this.setState({ refAreaLeft: e.activeLabel })}
// //             onMouseMove={(e) => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
// //             onMouseUp={this.zoom.bind(this)}
// //           >
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis allowDataOverflow dataKey="name" domain={[left, right]} type="number" />
// //             <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" />
// //             <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2" />
// //             <Tooltip />
// //             <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
// //             <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

// //             {refAreaLeft && refAreaRight ? (
// //               <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
// //             ) : null}
// //           </LineChart>
// //         </ResponsiveContainer>
// //       </div>
// //     );
// //   }
// // }

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
//       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//     </LineChart>
//   </ResponsiveContainer>
//   </div>
// );

// export default Chart1;

// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Example data showing soil moisture levels (in %) and fertilizer use efficiency (in %)
// const data = [
//   { region: 'North', soilMoisture: 70, fertilizerEfficiency: 90 },
//   { region: 'South', soilMoisture: 50, fertilizerEfficiency: 60 },
//   { region: 'East', soilMoisture: 80, fertilizerEfficiency: 85 },
//   { region: 'West', soilMoisture: 60, fertilizerEfficiency: 75 },
//   { region: 'Central', soilMoisture: 55, fertilizerEfficiency: 65 },
// ];

// const Chart2 = () => (
//   <div className="h-60 w-100">
//     <h2 className="text-center text-[18px] font-bold mb-4">
//       Soil Moisture Levels vs. Fertilizer Use Efficiency Across Regions
//     </h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="region" />
//         <YAxis yAxisId="left" label={{ value: 'Soil Moisture (%)', angle: -90, position: 'insideLeft' }} />
//         <YAxis yAxisId="right" orientation="right" label={{ value: 'Fertilizer Efficiency (%)', angle: -90, position: 'insideRight' }} />
//         <Tooltip />
//         <Legend />
//         <Bar yAxisId="left" dataKey="soilMoisture" fill="#8884d8" name="Soil Moisture (%)" />
//         <Bar yAxisId="right" dataKey="fertilizerEfficiency" fill="#82ca9d" name="Fertilizer Efficiency (%)" />
//       </BarChart>
//     </ResponsiveContainer>
//   </div>
// );

// // export default Chart2;

// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
//     <h2 className="text-center text-[18px] font-bold mb-4">
//       Monthly Rainfall and Crop Yield Comparison
//     </h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <BarChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="rainfall" fill="#8884d8" name="Rainfall (mm)" />
//         <Bar dataKey="yield" fill="#82ca9d" name="Crop Yield (tons)" />
//       </BarChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default Chart2;



// import React from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
//     <h2 className="text-center text-[18px] font-bold mb-4">
//       Cumulative Impact of Rainfall on Crop Yield
//     </h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <AreaChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
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
  { month: 'January', rainfall: 120, yield: 3.5 },
  { month: 'February', rainfall: 80, yield: 2.8 },
  { month: 'March', rainfall: 200, yield: 4.2 },
  { month: 'April', rainfall: 150, yield: 3.7 },
  { month: 'May', rainfall: 100, yield: 3.0 },
  { month: 'June', rainfall: 300, yield: 4.5 },
  { month: 'July', rainfall: 350, yield: 4.8 },
  { month: 'August', rainfall: 400, yield: 5.1 },
  { month: 'September', rainfall: 250, yield: 4.0 },
  { month: 'October', rainfall: 200, yield: 3.9 },
  { month: 'November', rainfall: 120, yield: 3.4 },
  { month: 'December', rainfall: 90, yield: 2.7 },
];

const Chart2 = () => (
  <div className="h-60 w-100">
    <h2 className="text-center text-xl font-bold mb-4">
      Cumulative Impact of Rainfall on Crop Yield
    </h2>
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
        <Area type="monotone" dataKey="rainfall" stackId="1" stroke="#8884d8" fill="#8884d8" name="Rainfall (mm)" />
        <Area type="monotone" dataKey="yield" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Crop Yield (tons)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default Chart2;
