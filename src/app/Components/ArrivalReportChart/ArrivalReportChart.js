"use client";
import React, { useEffect } from "react";
// import {Doughnut} from 'chart.js'
import Chart from "chart.js/auto";
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.legend.display = false;

const ArrivalReportChart = () => {
    const arrivalData = {
        labels: ["Before 10:30","Absence", "After 10:30" ],
        datasets: [
          {
            data: [9, 2, 4],
            backgroundColor:[
                '#0683C6',                
                '#F97373',
                '#BFE9FF'
                
            ],
            radius: '80%'
  
          },
        ],
      };

      const options = {

      };

      const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, plugins){
            const {ctx, arrivalData} = chart;

            console.log(arrivalData)

            ctx.save();
            ctx.font = "bolder 32px sans-serif ";
            ctx.fillStyle = "#808080";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(15,chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
        }

      };

//   useEffect(() => {
//     const arrivalData = {
//       labels: ["Before 10:30", "After 10:30", "Absence"],
//       datasets: [
//         {
//           data: [12, 5, 2],

//         },
//       ],
//     };

//     const config = {
//       type: "doughnut",
//       data: arrivalData,
//       options: {
//         maintainAspectRatio: false,
//         plugins:{
//             legend: false
            
//         }
//       }
//     };

//     // Rendering the chart
//     const myChart = new Chart(document.getElementById("myChart"), config);

//     // Cleanup function
//     return () => {
//       myChart.destroy();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  return (
    <>
      {/* <canvas id="myChart" ></canvas> */}
      <div className="w-[200px] h-[200px] ">
      <Doughnut data={arrivalData} options={options} plugins={[textCenter]} />

      </div>
      <div className="flex flex-wrap gap-y-[20px] px-[35px] w-full ">
        {/* One Label */}
        <div className="flex flex-col  pl-[10px] w-1/2 border-l-[4px] border-[#BFE9FF] ">
            <div className="text-[24px] font-medium text-dark-blue  ">4</div>
            <div className="text-[14px] font-medium text-grey-color  ">After 10:30</div>
        </div>
        
        {/* Label Two */}
        <div className="flex flex-col  pl-[10px] w-1/2 border-l-[4px] border-[#F97373] ">
            <div className="text-[24px] font-medium text-dark-blue  ">2</div>
            <div className="text-[14px] font-medium text-grey-color  ">Absence</div>
        </div>
        
        {/* Label Third */}
        <div className="flex flex-col  pl-[10px] w-1/2 border-l-[4px] border-[#0683C6] ">
            <div className="text-[24px] font-medium text-dark-blue  ">9</div>
            <div className="text-[14px] font-medium text-grey-color  ">Before 10:30</div>
        </div>
        
      </div>
    </>
  );
};

export default ArrivalReportChart;
