"use client";
import React, { useEffect, useState } from "react";
import { ResourceForecastData } from "@/app/Constants/ResourceForecastData";

const ResourceForecast = ({ isOpen }) => {
  const [resourceForecast, setResourceForecast] = useState([]);

  useEffect(() => {
    setResourceForecast(ResourceForecastData);
  }, []);

  const calculateWidth = (hours) => {
    const maxWidth = 100; // Total width
    const widthPerHour = 100 / 8; // Assuming 8 hours is the maximum
    return hours * widthPerHour; // Calculate width based on the number of hours
  };

  const getColorForHours = (hours) => {
    switch (hours) {
      case 1:
        return "#121f47";
      case 2:
        return "#0683c6";
      case 3:
        return "#000000";
      case 4:
        return "#008000";
      case 5:
        return "#a52a2a";
      case 6:
        return "#f7f7f7";
      case 7:
        return "#8b0000";
      case 8:
        return "#006400";
      default:
        return "#0000ff";
    }
  };

  return (
    <div className={`${isOpen ? "block" : "hidden"} w-full bg-white`}>
      {/* outer div */}

      {resourceForecast.map((data) => (
        <React.Fragment key={data.id}>
          <div className="flex flex-col">
            {data.forecast.map((dayForecast, dayIndex)=>(
                <div key={dayIndex}>
                    {dayForecast.day}
                </div>
            ))}
            {/* full Row for a day */}
            <div className="w-full flex flex-row">
              <div className="w-[10%] flex items-center justify-center">
                {data.name}
              </div>
              <div className="w-[80%] flex flex-row items-center justify-center bg-red-300">
                
                
              </div>
              <div className="w-[10%] flex items-center justify-center">
                89%
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ResourceForecast;




// {data.forecast.map((dayForecast) => (
//     <React.Fragment key={dayForecast.day}>

//       {Object.values(dayForecast.hours).map((hourObj) => (
//         <React.Fragment key={Object.keys(hourObj)[0]}>
          
//           <div
//             style={{
//               width: `${calculateWidth(
//                 hourObj[Object.keys(hourObj)[0]]
//               )}%`,
//               backgroundColor: getColorForHours(
//                 hourObj[Object.keys(hourObj)[0]]
//               ),
//             }}
//             className="project"
//           >
//             {hourObj[Object.keys(hourObj)[0]]}
//           </div>
//         </React.Fragment>
//       ))}
//     </React.Fragment>
//   ))}