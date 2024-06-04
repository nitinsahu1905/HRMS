"use client"
import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      data: [8, 6, 10, 8, 4],
      backgroundColor: [
        '#264289',
        '#0683C6',
        '#C6C6F6',
        '#264289',
        '#FFA500',
      ],
      borderRadius: 20,
      borderSkipped: false,
      barPercentage: 0.5,
      categoryPercentage: 0.25,
    }]
  };

  const options = {
    scales: {
        x: {
            grid: {
              display: false, // This removes the vertical grid lines
            },
            ticks: {
                color: '#121f47', // Customize x-axis labels color
                font: {
                  size: 10, // Customize x-axis labels font size
                  weight:500,
                  
                }
              }
          },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 0.2)',
          borderDash: [15, 15],
        },
        ticks: {
            font: {
                size: 11, // Customize x-axis labels font size
              
                
              },
          stepSize: 2,
          padding:0,
          callback: function(value) {
            return value + ' hrs'; // Append 'hrs' to each y-axis label
          }
        },
       
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full   rounded-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
