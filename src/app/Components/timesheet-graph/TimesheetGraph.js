"use client"
import { useEffect } from 'react';
import Chart from 'chart.js'; // Importing Chart.js auto bundle

const ChartComponent = () => {
  useEffect(() => {
    // Data and config
    const data = {
      labels: ['03-03-2024', '10-03-2024', '17-03-2024', '24-03-2024', '31-03-2024'],
      datasets: [{
        label: 'Draft',
        data: [9, 3, 13, 1, 5, 2],
        backgroundColor: '#7FC2E7',
        borderColor: '#7FC2E7',
        borderWidth: 1
      },
      {
        label: 'Submitted',
        data: [14, 18, 30, 7, 7],
        backgroundColor: '#0683c6',
        borderColor: '#0683c6',
        borderWidth: 1
      },
      {
        label: 'Approved',
        data: [2, 9, 13, 3, 9],
        backgroundColor: '#02A6FF',
        borderColor: '#02A6FF',
        borderWidth: 1
      },

      {
        label: 'Rejected',
        data: [7, 1, 2, 15, 12],
        backgroundColor: '#05496E',
        borderColor: '#05496E',
        borderWidth: 1
      }]
    };

    const config = {
      type: 'bar',
      data,
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Start Date ' // Label for X axis
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Number of timesheet' // Label for Y axis
            },
            ticks: {
              beginAtZero: true
            }
          }]
          // y: {
          //   beginAtZero: true
          // }
        }
      }
    };

    // Rendering the chart
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    // Cleanup function
    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="h-auto">
      <div className="w-auto">
        <div className="bg-white p-4">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
