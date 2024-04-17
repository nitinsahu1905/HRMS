"use client"
import React, { useEffect, useState } from 'react';
// import { ResourceForecastData } from '@/app/Constants/ResourceForecastData';

const ResourceForecast = ({ isOpen ,forecast}) => {
  // const [resourceForecast, setResourceForecast] = useState([]);

 

  const calculateWidth = (hours) => {
    const maxWidth = 100; // Total width
    const widthPerHour = 100 / 8; // Assuming 8 hours is the maximum
    return hours * widthPerHour; // Calculate width based on the number of hours
  };

  const getColorForHours = (hours) => {
    switch (hours) {
      case "1":
        return '#F7454A';
      case "2":
        return '#0683c6';
      case "3":
        return '#7FC2E7';
      case "4":
        return '#02A6FF';
      case "5":
        return '#a52a2a';
      case "6":
        return '#f7f7f7';
      case "7":
        return '#8b0000';
      case "8":
        return '#008000';
      default:
        return '#FF0000';
    }
  };

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} w-full bg-white`}>
      {/* outer div */}
    
            {forecast.map((dayforecast) => (

              <React.Fragment key={dayforecast.id}>
          <div className='flex flex-col'>
             {/* full Row for a day */}
            <div className='w-full flex flex-row'>
                  <div className='w-[10%] flex items-center justify-center'>{dayforecast.day}</div>
                  <div className='w-[80%] flex flex-row items-center justify-center'>
                        {dayforecast.hours.map((hourObj, index)=> (
                  <React.Fragment key={index}>
                        <div
                           style={{
                            width: `${calculateWidth(hourObj[Object.keys(hourObj)[0]])}%`,
                            backgroundColor: getColorForHours(hourObj[Object.keys(hourObj)[0]]),
                          }}
                          
                        >
                          {hourObj[Object.keys(hourObj)[0]]}
                        </div>
                      </React.Fragment>
                    ))}
               
                 </div>
                  <div className='w-[10%] flex items-center justify-center'>89%</div>
                </div>
                </div>
                   
                 
              </React.Fragment>
            ))}
          
         
          </div>
      
  );
};

export default ResourceForecast;
