"use client"
import React from 'react';
import { useState,useEffect } from 'react';


import { StatisticsEmployeeData } from '../Constants/StatisticsEmployeeData';
import Statistics from '../Components/Statistics';

import StatesDropDown from '../Components/StatesDropDown';


const EmployeeDashboard = () => {
  const [punchInTime, setPunchInTime] = useState('00:00:00');
  const [punchedIn, setPunchedIn] = useState(false);
  const [punchOutTime, setPunchOutTime] = useState('00:00:00');
  const [duration, setDuration] = useState(0);
  const[selectedListValue,setSelectedListValue]=useState("This week")
  const [filterStatisticsEmployeeData,setFiterStatisticsEmployeeData]=useState(StatisticsEmployeeData);

  const listData=["This week","This month","This Year"]


    //function for updating the selectedListValue By dropdown
    const handleListDropdownChange = (selectedOption) => {
      setSelectedListValue(selectedOption);
      console.log(selectedListValue,"inside handlechange")
    };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (punchedIn) {
        setDuration((prevDuration) => prevDuration + 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [punchedIn]);


  function formatDuration(duration) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }




  const handlePunchIn = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const newTime = `${hours}:${minutes}:${seconds}`;

   if (punchedIn) {
      setPunchOutTime(newTime);
    } else {
      setPunchInTime(newTime);
    }
    setPunchedIn(!punchedIn);
  
  };

  useEffect(()=>{
  console.log(selectedListValue,"useEffect")
  const filterData=StatisticsEmployeeData.filter((data)=>{
    return data.data.toLowerCase()===selectedListValue.toLowerCase()
  })
  console.log(filterData);
  setFiterStatisticsEmployeeData(filterData);
  },[selectedListValue])
  const filledWidth = (duration / 43200) * 360;// Percentage of border filled with #0683c6
  

 
  return (
    <div className='p-4 w-full flex flex-col gap-[25px]'>

  
      <div className='flex flex-row gap-[25px] w-full'>

        {/* greeting card and announcement*/}
        <div className=' flex flex-col w-[80%] gap-4 '>
          <div className='w-full flex flex-row bg-white rounded-[15px]'>
             <div className='w-[20%] h-32'>
             <img src='./work.png' alt='work-pic' className='rounded-tl-[15px] rounded-bl-[15px]'></img>
             </div>

            <div className=' flex flex-col gap-[1px] px-5 py-5'>
              <div className='text-[#808080] font-semibold text-[10px]'>Hi,Divyansh</div>
              <div className='text-dark-blue text-[15px] font-medium'>Good Morning</div>
              <div className='text-[#808080] font-semibold text-[10px]'>Let’s start a day with positive mindset</div>
            </div>

          </div>

          <div className='flex flex-col gap-0'>
            <div className='bg-[#BFE9FF] p-2 flex flex-row gap-4  rounded-tr-[10px] rounded-tl-[10px]'>
                <div className='h-6'><img src='./Commercial.png' className='h-5 w-5'></img></div>
                <div className='text-[#0683C6] font-medium text-[15px]'>What's Happening in Metadologie</div>
            </div>
            <div className='bg-white flex flex-col px-2 rounded-br-[10px] rounded-bl-[10px]'>
               <div className=' py-4 flex flex-row justify-between w-full'>
                <div className='flex flex-row gap-4 w-[85%]'>
                  <div className='h-6'><img src='./Partnership.jpg'></img></div>
                  <div className='flex flex-col gap-[2px]'>
                    <div className='font-normal text-dark-blue text-[12px]'>Partnership</div>
                    <div className='font-medium text-[#808080] text-[10px]'>Metadologie get Partnership  with Docsign to Drive Innovation</div>
                  </div>
                </div>
                <div className='text-[#0683c6] text-[10px] font-medium w-[15%] px-4'>May 04,2024</div>
               </div>


               <div className=' py-4 flex flex-row justify-between w-full'>
                <div className='flex flex-row gap-4 w-[85%]'>
                  <div className='h-6'><img src='./Party.jpg'></img></div>
                  <div className='flex flex-col gap-[2px] '>
                    <div className='font-normal text-dark-blue text-[12px]'>Event Announcement</div>
                    <div className='font-medium text-[#808080] text-[10px]'>Save the Date for the occasion of “Foundation Day of Metadologie” </div>
                  </div>
                </div>
                <div className='text-[#0683c6] text-[10px] font-medium w-[15%] px-4'>May 18,2024</div>
               </div>
               
            </div>
          </div>


          
        </div>

        <div className='bg-white rounded-[15px] w-[20%] flex flex-col px-1 relative  '>

          {/* time circle */}
  


<div className="w-32 h-32 relative rounded-full m-auto text-center pt-8 " style={{  background: `conic-gradient(#0683c6 ${filledWidth}deg , #f9f9f9 0deg)` }}>
<div className='absolute w-28 h-28 top-2 left-2  rounded-full bg-white m-auto text-center pt-8 '>
<div className='text-dark-blue'>{formatDuration(duration)}</div>
  <div className='font-medium text-[#808080] text-xs'>Total Time</div>
</div>
 
</div>
     

          <div className=' flex flex-row gap-10 px-4 py-4 m-auto bg-[#f9f9f9] rounded-[15px] '>
            <div className='flex flex-col gap-1'>
            <div className='text-[#0683c6] font-medium text-xs'>Punch In</div>
            <div className='text-[#7d7d7d] font-normal text-xs'>{punchInTime}</div>
            </div>
            <div className='flex flex-col gap-1'>
            <div className='text-[#0683c6] font-medium text-xs'>Punch Out</div>
            <div className='text-[#7d7d7d] font-normal text-xs'>{punchOutTime}</div>
            </div>
          </div>
          <div className='m-auto'><button className='rounded-lg bg-[#0683c6] text-center text-white font-semibold text-xs px-4 py-2 ' onClick={handlePunchIn}>{punchedIn ? 'Punch Out' : 'Punch In'}</button></div>
        </div>  
       </div>


       
 <div className='bg-white w-[40%] rounded-[15px] px-4 py-2 flex flex-col gap-2'>
<div className='flex flex-row justify-between'>
   <div className='text-dark-blue font-medium text-[15px]'>Statistics</div>
   <StatesDropDown mainText="select list" Data={listData} onSelect={handleListDropdownChange}/>
   </div>
 
 {filterStatisticsEmployeeData.map((list)=>
 <>
  <div className='flex flex-col  gap-2'>
  <Statistics heading="Leaves Taken" value={list.LeavesTaken} color="#ffa500"/>
  <Statistics heading="Task Completed" value={list.CompletedTask} color="#2b82b1"/>
  <Statistics heading="Task Pending" value={list.PendingTask} color="#d92626"/>
  <Statistics heading="Efficiency" value={list.Efficiency} color="#00ACD1"/>
  </div>
  </>
  
 )}


  
 

 </div>
       

</div>
  )
}

export default EmployeeDashboard