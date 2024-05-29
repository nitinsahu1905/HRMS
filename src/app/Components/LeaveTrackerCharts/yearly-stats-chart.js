import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    scales: {
      x: {
        grid: {
          display: false,  // Hides vertical grid lines
        },
      },
      y: {
        grid: {
          display: true,  // Shows horizontal grid lines
        },
      },
    },
  },
};


const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '',
      data: [1, 2, 4, 2, 3, 5, 0, 6, 0, 0, 0, 0],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      barThickness: 10,
      borderRadius: 10
    },
    
  ],
};

export default function YearlyStatsChart() {
  return (
    <div className="w-[70%] h-full box-border block">
      <Bar data={chartData} options={options}/>
    </div>
  );
}
