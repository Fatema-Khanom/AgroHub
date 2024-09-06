import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

class Chart4 extends React.Component {
  // Generate data points similar to your CanvasJS example
  generateDataPoints(noOfDps) {
    let xVal = 1;
    let yVal = 100;
    const data = [];
    for (let i = 0; i < noOfDps; i++) {
      yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
      data.push({ x: xVal, y: yVal });
      xVal++;
    }
    return data;
  }

  render() {
    // Generate data points
    const data = this.generateDataPoints(500);

    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <h1 className="text-center text-2xl font-bold mb-4">Stock Price of BMW - March 2018</h1>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="y"
              stroke="#8884d8"
              fillOpacity={0.3}
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart4;
