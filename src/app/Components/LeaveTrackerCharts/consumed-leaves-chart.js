"use client";
import React from "react";
import Chart from "chart.js/auto";
import {ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend, Title);

const ConsumedLeavesChart = ({usedLeaves, totalHolidays}) => {
    const data = {
        datasets: [
          {
            data: usedLeaves,
            backgroundColor:[
                '#0683C6', 
                '#E9EAEC'               
            ],
            borderWidth: 1.5,
            radius: 55,
            cutout: 40,
          },
        ],
      };

      const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart){
            const {ctx, data} = chart;
            ctx.save();
            ctx.font = " 32px sans-serif ";
            ctx.fillStyle = "#808080";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${data.datasets[0].data.reduce((acc,cur)=>{
                return acc+cur;
            },0
            )}`,chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
        }

      };


  return (
      <div className="w-[125px] h-[125px] flex items-center justify-center ">
      <Doughnut data={data} plugins={[textCenter]} />
      </div>
  );
};

export default ConsumedLeavesChart;
