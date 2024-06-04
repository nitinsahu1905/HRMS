"use client";
import React, { useEffect } from "react";
// import Chart from "chart.js/auto";
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { BsBorderWidth } from "react-icons/bs";

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.legend.display = false;
// Chart.defaults.plugins.borderJoinStyle = "round";


const ArrivalReportChart = () => {

    const arrivalData=[10,20,5,5];
    const data = {
        labels: ["Meeting", "Project","Learning","General" ],
        datasets: [
          {
            data: arrivalData,
            backgroundColor:[
                '#CFEBFF',                
                '#C6C6F6',
                '#00ACD1',
                '#121F47'
                
            ],
            radius: '100%',
            cutout: 58,
            // borderRadius: {
            //     innerEnd:20,
            //     outerEnd:20,
            // },
            // borderWidth:0,
            // borderJoinStyle: 'round', // General border radius for rounded corners
            // borderSkipped: 'end',
  
          },
        ],
      };

      

      const options = {
         cutout: '58%',
      };
      

      const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, plugins){
            const {ctx, data} = chart;

            

            ctx.save();
            ctx.font = "bolder 32px sans-serif ";
            ctx.fillStyle = "#808080";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            console.log();
            ctx.fillText(`${data.datasets[0].data.reduce((acc,cur)=>{
                return acc+cur;
            },0
            )}`,chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
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
    <div className="w-full flex flex-col gap-2" >
<div className="flex flex-row w-full ">
    <div className="flex flex-col  gap-[30px] w-[50%]">
         {/* One Label */}
         <div className="flex flex-col  pl-[10px] w-1/2 border-l-[4px] border-[#00ACD1] ">
            <div className="text-[24px] font-medium text-dark-blue  ">{arrivalData[2]}</div>
            <div className="text-[14px] font-medium text-grey-color  ">Learning</div>
        </div>
        
        {/* Label Two */}
        <div className="flex flex-col  pl-[10px] w-1/2 border-l-[4px] border-[#C6C6F6] ">
            <div className="text-[24px] font-medium text-dark-blue  ">{arrivalData[1]}</div>
            <div className="text-[14px] font-medium text-grey-color  ">Productive hours</div>
        </div>
        
    </div>
    <div className="w-[50%]">
    <div className="w-[180px] h-[180px]">
      <Doughnut data={data} options={options} plugins={[textCenter]} />

      </div>
    </div>
</div>
<div className="flex flex-row w-full">
 {/* Label Third */}
 <div className="flex flex-col  pl-[10px] w-1/2 border-l-[4px] border-[#CFEBFF] ">
            <div className="text-[24px] font-medium text-dark-blue  ">{arrivalData[0]}</div>
            <div className="text-[14px] font-medium text-grey-color  ">Meeting</div>
        </div>


        <div className="flex flex-col  pl-[10px] w-1/2 border-l-[4px] border-[#121f47] ">
            <div className="text-[24px] font-medium text-dark-blue  ">{arrivalData[3]}</div>
            <div className="text-[14px] font-medium text-grey-color  ">General</div>
        </div>
        
</div>


    </div>
    
    </>
  );
};

export default ArrivalReportChart;