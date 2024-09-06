import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts'; // ES6 import

const CanvasJSChart = CanvasJSReact.CanvasJSChart; // Destructure the chart

let dataPoints = [];

class Chart1 extends Component {
  render() {
    const options = {
      theme: "light2",
      title: {
        text: "Nifty 50 Index",
      },
      data: [
        {
          type: "line",
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#,##0.00",
          dataPoints: dataPoints,
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }

  componentDidMount() {
    const chart = this.chart;
    fetch("https://canvasjs.com/data/gallery/react/nifty-stock-price.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((point) => {
          dataPoints.push({
            x: new Date(point.x),
            y: point.y,
          });
        });
        chart.render();
      });
  }
}

export default Chart1;