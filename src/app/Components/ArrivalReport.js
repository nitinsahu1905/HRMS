"use client";
import React from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

// Register required Chart.js components
Chart.register(ArcElement, Tooltip, Legend, Title);

// Custom plugin to handle overlapping border radii
Chart.pluginService.register({
    afterUpdate: function (chart) {
        let a = chart.config.data.datasets.length - 1;
        for (let i in chart.config.data.datasets) {
            for (let j = chart.config.data.datasets[i].data.length - 1; j >= 0; --j) {
                if (Number(j) === chart.config.data.datasets[i].data.length - 1)
                    continue;
                let arc = chart.getDatasetMeta(i).data[j];
                arc.round = {
                    x: (chart.chartArea.left + chart.chartArea.right) / 2,
                    y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                    radius: chart.innerRadius + chart.radiusLength / 2 + (a * chart.radiusLength),
                    thickness: chart.radiusLength / 2 - 1,
                    backgroundColor: arc._model.backgroundColor
                }
            }
            a--;
        }
    },
    afterDraw: function (chart) {
        let ctx = chart.chart.ctx;
        for (let i in chart.config.data.datasets) {
            for (let j = chart.config.data.datasets[i].data.length - 1; j >= 0; --j) {
                if (Number(j) === chart.config.data.datasets[i].data.length - 1)
                    continue;
                let arc = chart.getDatasetMeta(i).data[j];
                let startAngle = Math.PI / 2 - arc._view.startAngle;
                let endAngle = Math.PI / 2 - arc._view.endAngle;

                ctx.save();
                ctx.translate(arc.round.x, arc.round.y);
                ctx.fillStyle = arc.round.backgroundColor;
                ctx.beginPath();
                ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }
    }
});

// Main component
const ArrivalReportChart = () => {
    const arrivalData = [10, 20, 5, 5];
    const data = {
        labels: ["Meeting", "Project", "Learning", "General"],
        datasets: [
            {
                data: arrivalData,
                backgroundColor: [
                    '#CFEBFF',
                    '#C6C6F6',
                    '#00ACD1',
                    '#121F47'
                ],
                radius: '100%',
                cutout: 58,
                borderWidth: 0,
                borderJoinStyle: 'round'
            },
        ],
    };

    const options = {
        cutout: '58%',
    };

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, plugins) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = "bolder 32px sans-serif";
            ctx.fillStyle = "#808080";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                `${data.datasets[0].data.reduce((acc, cur) => acc + cur, 0)}`,
                chart.getDatasetMeta(0).data[0].x,
                chart.getDatasetMeta(0).data[0].y
            );
        }
    };

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row w-full ">
                <div className="flex flex-col gap-[30px] w-[50%]">
                    <div className="flex flex-col pl-[10px] w-1/2 border-l-[4px] border-[#00ACD1]">
                        <div className="text-[24px] font-medium text-dark-blue">{arrivalData[2]}</div>
                        <div className="text-[14px] font-medium text-grey-color">Learning</div>
                    </div>
                    <div className="flex flex-col pl-[10px] w-1/2 border-l-[4px] border-[#C6C6F6]">
                        <div className="text-[24px] font-medium text-dark-blue">{arrivalData[1]}</div>
                        <div className="text-[14px] font-medium text-grey-color">Productive hours</div>
                    </div>
                </div>
                <div className="w-[70%]">
                    <div className="w-[200px] h-[200px]">
                        <Doughnut data={data} options={options} plugins={[textCenter]} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col pl-[10px] w-1/2 border-l-[4px] border-[#CFEBFF]">
                    <div className="text-[24px] font-medium text-dark-blue">{arrivalData[0]}</div>
                    <div className="text-[14px] font-medium text-grey-color">Meeting</div>
                </div>
                <div className="flex flex-col pl-[10px] w-1/2 border-l-[4px] border-[#121F47]">
                    <div className="text-[24px] font-medium text-dark-blue">{arrivalData[3]}</div>
                    <div className="text-[14px] font-medium text-grey-color">General</div>
                </div>
            </div>
        </div>
    );
};

export default ArrivalReportChart;
