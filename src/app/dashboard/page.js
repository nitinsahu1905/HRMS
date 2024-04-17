"use client";
import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { CelebrationData } from "../Constants/CelebrationData";
import Celebration from "../Components/Celebration/Celebration";
import { ResourceForecastData } from "../Constants/ResourceForecastData";
import ChartComponent from "../Components/timesheet-graph/TimesheetGraph";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import ResourceForecast from "../Components/ResourceForecast/ResourceForecast";
// import ResourceForecast from "../Components/ResourceForecast/ResourceForecast";
// import Card from "../Components/Card";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



export default function Dashboard(){
    const [announcement, setAnnouncement] = useState('');
    const [showFieldStates, setShowFieldStates] = useState(Array(ResourceForecastData.length).fill(false)); // Initialize an array of false values for each row

    const toggleShowField = (index) => {
        setShowFieldStates(prevStates => {
            const newState = [...prevStates];
            newState[index] = !newState[index];
            return newState;
        });
    }
    return(
        <div className="flex flex-col gap-[10px]">

        {/* <div className="flex flex-row">
            <Card>
                
            </Card>
        </div> */}

      <div className="flex flex-row gap-[10px]">
        <div className="w-3/5 bg-white rounded-lg h-auto flex flex-col">
          <div className="top-2 left-1 mt-3 text-dark-blue font-medium text-2xl px-3">
            Timesheet Status
          </div>
          <div>
            <ChartComponent />
          </div>
        </div>
        <div className="w-2/5 bg-white rounded-lg h-auto  flex flex-col pb-2">
          <div className="top-2 left-1 mt-3 text-dark-blue font-medium text-2xl px-3">
            Celebrations
          </div>
          <div className="flex flex-col mt-2 gap-1">
            {CelebrationData.map((data) => (
              <Celebration
                key={data.id}
                name={data.name}
                occasion={data.occasion}
                date={data.date}
                img={data.img}
              />
            ))}
          </div>
        </div>
      </div>

        {/* <div className="flex flex-row gap-[10px]"> */}
            <div className="w-full bg-white rounded-lg h-auto flex flex-col">
                <div className="top-2 left-1 mt-3 text-dark-blue font-medium text-2xl px-3">Resource Forecast</div>
                <div className="pl-2">
                    <table className="w-full border-collapse mt-4">
                        <tbody>
                            <tr className="text-center p-10">
                                <th>Id</th>
                                <th>Name</th>
                                <th>hours</th>
                                <th>Status</th>
                            </tr>
                            {ResourceForecastData.map((data, index) => (
                            <React.Fragment key={index}>
                                <tr className="text-center p-10">
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.hours}</td>
                                    <td>{data.status}</td>
                                    <td>
                                        <button onClick={() => toggleShowField(index)}>
                                            {showFieldStates[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </button>
                                    </td>
                                </tr>
                                {showFieldStates[index] && (
                                    <tr>
                                        <td colSpan="5" className="">
                                            <ResourceForecast className="" isOpen={showFieldStates[index]} forecast={data.forecast}/>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="w-2/5 bg-white rounded-lg h-auto flex flex-col">
                <div className="top-2 mt-3 left-1 text-dark-blue font-medium text-2xl px-3">Announcement</div>
               
                <div className="flex justify-between bg-white border-[#0684C7] border-[1px] rounded-lg w-auto h-auto mx-4 p-2 mb-2 mt-2">
                    <div className="p-2 w-full ">
                    <textarea type="text" id="announcement" placeholder="Enter  Here" className="outline-none w-full h-full overflow-hidden resize-none " wrap="soft" maxLength={300} onChange={(e)=>setAnnouncement(e.target.value)} ></textarea></div>
                    <span className="end-0 right-0 pt-40"><RiSendPlaneFill onClick={()=>{
                        document.querySelector('#announcement').value="";
                        setAnnouncement('')
                        }} className="transform rotate-45 h-6 w-6 text-primary-blue cursor-pointer"/></span>
                </div>
                
        

            </div> */}
        </div>
 
        
    )
}
