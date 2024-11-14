// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container" style={{width: "34rem"}}>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              title: {
                display: true,
                text: 'Year 2024',
                color: 'white'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Your Books',
                color: 'white'
              }
            }
          },
        }}
      />
    </div>
  );
}

export default LineChart;
