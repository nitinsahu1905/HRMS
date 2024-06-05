"use client";
import React, { useEffect } from "react";
// import {Doughnut} from 'chart.js'
import Chart from "chart.js/auto";
import {ArcElement, Tooltip, Legend, Title, plugins } from "chart.js";
import { Pie } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';


Chart.register(ArcElement, Tooltip, Legend, Title);

Chart.defaults.plugins.legend.display = false;
Chart.defaults.plugins.legend.title.display = true;

const TimesheetReportChart = ({ ProjectwiseTimesheetData }) => {
  // console.log("Proj: ",ProjectwiseTimesheetData.map((d)=>d.hours))
  const data = {
    labels: ProjectwiseTimesheetData.map((d) => d.projectName),
    datasets: [
      {
        // labels: true,
        data: ProjectwiseTimesheetData.map((d) => d.hours),
        backgroundColor: ["#00ACD1", "#CFEBFF", "#0683C6", "#C6C6F6"],
        radius: "80%",
      },
    ],
  };

  const options = {
    plugins: {
      datalabels:{
        color: 'white'
      }
    }
  };


  return (
    <>
    <div className="w-full flex flex-col gap-[10px] justify-center items-center ">
      {/* <canvas id="myChart" ></canvas> */}
      <div className="w-[200px] h-[200px] ">
        <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
      <div className="flex flex-wrap gap-y-[20px] px-[35px] w-full ">
        {ProjectwiseTimesheetData.map((proj, index) => (
          //  One Label
          <div key={index} className={`flex flex-col  pl-[10px] w-1/3 border-l-[4px] `}
            style={{borderColor:data.datasets[0].backgroundColor[index]}}
          >
            <div className="text-[20px] font-medium text-dark-blue  ">
              {proj.hours} 
            </div>
            <div className="text-[12px] font-medium text-grey-color  ">
              {proj.projectName}
            </div>
          </div>
        ))}

      </div>
      <div className="flex flex-row gap-[25px] w-full justify-start px-[35px] py-[10px]  ">
        <div className="text-[15px] text-dark-blue font-medium ">Sum of Hours:</div>
        <div className="text-[15px] text-primary-blue font-medium ">{data.datasets[0].data.reduce((acc,cur)=>acc+cur,0)}</div>
      </div>
    </div>
      
    </>
  );
};

export default TimesheetReportChart;
