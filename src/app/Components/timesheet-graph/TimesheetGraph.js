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
        backgroundColor: '#17BECF',
        borderColor: '#17BECF',
        borderWidth: 1
      },
      {
        label: 'Submitted',
        data: [14, 18, 30, 4, 5],
        backgroundColor: '#15ABBA',
        borderColor: '#15ABBA',
        borderWidth: 1
      },
      {
        label: 'Approved',
        data: [2, 9, 13, 3, 6],
        backgroundColor: '#1298A6',
        borderColor: '#1298A6',
        borderWidth: 1
      },
      {
        label: 'Rejected',
        data: [7, 1, 2, 9, 5],
        backgroundColor: '#108591',
        borderColor: '#108591',
        borderWidth: 1
      }]
    };

    const config = {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
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
