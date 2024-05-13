"use client"
import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'; // Importing Chart.js auto bundle

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
        maintainAspectRatio : false,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once on mount


  const [screenWidth, setScreenWidth] = useState(null);
  const [heightG, setHeightG] = useState(screenWidth/4)

  useEffect(() => {
    // Ensure window object is available
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      // Add event listener to listen for window resize
      window.addEventListener('resize', handleResize);

      // Set initial screen width
      setScreenWidth(window.innerWidth);

      // Clean up event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
    console.log(screenWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="h-auto ">
      <div className="w-auto">
        
        <div className="bg-white lg:p-4 p-2 lg:h-[372px] md:h-auto lg:w-auto h-[300px] ">
          
          
          {/* <canvas id="myChart" style={`${screenWidth<500? {height: "284px"}  : {height:"auto"}}`} ></canvas> */}
          <canvas id="myChart"  height={ 284 } ></canvas>

        </div> 
      </div>
    </div>
  );
};

export default ChartComponent;

// style={screenWidth > 500 ? { height: "300px"} : { height: "284px" }}
