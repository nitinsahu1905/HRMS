"use client"
import React from "react";
const ResourceForecast = ({ isOpen, forecast }) => {
  const calculateWidth = (hours) => {
    const totalHours = Array.isArray(hours) ? hours.reduce((acc, cur) => acc + parseInt(cur[Object.keys(cur)[0]], 10), 0) : parseInt(hours[Object.keys(hours)[0]], 10);
    const maxWidth = 100; // Total width
    const widthPerHour = 100 / 8; // Assuming 8 hours is the maximum
    const usedWidth = totalHours * widthPerHour;
    const remainingWidth = Math.max(maxWidth - usedWidth, 0); // Ensure the remaining width is not negative
    const exceedsMax = totalHours > 8;
    return { usedWidth, remainingWidth, exceedsMax };
  };

  const getColorForHours = (hours) => {
    switch (hours) {
      case "1":
        return '#DAF2FF';
      case "2":
        return '#ADE2FF';
      case "3":
        return '#DAF2FF';
      case "4":
        return '#ADE2FF';
      case "5":
        return '#DAF2FF';
      case "6":
        return '#ADE2FF';
      case "7":
        return '#DAF2FF';
      case "8":
        return '#ADE2FF';
      default:
        return '#A4D2EB';
    }
  };

  const getTextColorForHours = (hours) => {
    switch (hours) {
      case "1":
        return '#025F92';
      case "2":
        return '#0181C7';
      case "3":
        return '#025F92';
      case "4":
        return '#0181C7';
      case "5":
        return '#025F92';
      case "6":
        return '#0181C7';
      case "7":
        return '#025F92';
      case "8":
        return '#0181C7';
      default:
        return '#121f47';
    }
  };

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} w-full bg-white p-2 transition-all ease-in-out duration-500 `}>
      {/* outer div */}
      {forecast.map((dayforecast) => (
        <React.Fragment key={dayforecast.id}>
          <div className='flex flex-col w-full gap-4  p-1 shadow-lg shadow-white bg-opacity-50'>
            {/* full Row for a day */}
            <div className='w-full flex lg:flex-row flex-col '>
              <div className='md:w-[10%] w-full flex items-center text-left'>{dayforecast.day}</div>
              <div className='md:w-[80%] w-full flex md:flex-row flex-col md:items-center items-start justify-center gap-1 text-xs font-semibold'>
                {dayforecast.hours.map((hourObj, index) => (
                  <React.Fragment key={index}>
                    <div
                      title={`${hourObj[Object.keys(hourObj)[0]]} hours - ${Object.keys(hourObj)[0]}`}
                      className={`md:block hidden  truncate py-[8px]   cursor-pointer transition-all ease-in-out duration-500 `}
                      style={{
                        width: `${calculateWidth(hourObj[Object.keys(hourObj)[0]]).usedWidth}%`,
                        backgroundColor: getColorForHours(hourObj[Object.keys(hourObj)[0]]),
                        marginBottom: 6,
                        color: getTextColorForHours(hourObj[Object.keys(hourObj)[0]]),
                        paddingLeft: 8,
                        transition: "0px 0.5s ease",
                        // animation: "chartjs-render-animation 1s",
                        animation: "move 1s linear infinite",
                      }}
                    >
                      {hourObj[Object.keys(hourObj)[0]]} hours - {Object.keys(hourObj)[0]}
                    </div>

                    {/* For mobile responsiveness */}
                    <div
                      title={`${hourObj[Object.keys(hourObj)[0]]} hours - ${Object.keys(hourObj)[0]}`}
                      className={`md:hidden block  truncate py-[8px]   cursor-pointer transition-all ease-in-out duration-500 `}
                      style={{
                        width: `100%`,
                        backgroundColor: getColorForHours(hourObj[Object.keys(hourObj)[0]]),
                        marginBottom: 6,
                        color: getTextColorForHours(hourObj[Object.keys(hourObj)[0]]),
                        paddingLeft: 8,
                        transition: "0px 0.5s ease",
                        // animation: "chartjs-render-animation 1s",
                        animation: "move 1s linear infinite",
                      }}
                    >
                      {hourObj[Object.keys(hourObj)[0]]} hours - {Object.keys(hourObj)[0]}
                    </div>
                  </React.Fragment>
                ))}
                {calculateWidth(dayforecast.hours).remainingWidth > 0 && (
                  <>
                  <div
                    className={`md:block hidden  items-center text-left pl-2 py-[8px] transition-all ease-in-out duration-500 `}
                    style={{
                      width: `${calculateWidth(dayforecast.hours).remainingWidth}%`,
                      backgroundColor: '#FCABAB',
                      color:'#A90303',
                      marginBottom: 6,
                    }}
                  >
                   Free
                  </div>
                  {/* for mobile view */}
                  <div
                    className={`md:hidden flex items-center text-left pl-2 py-[8px] transition-all ease-in-out duration-500 `}
                    style={{
                      width: `100%`,
                      backgroundColor: '#FCABAB',
                      color:'#A90303',
                      marginBottom: 6,
                    }}
                  >
                   Free
                  </div>


                  </>
                  
                )}
              </div>
              <div className='md:w-[10%] w-full flex items-center md:justify-center text-green-400 md:px-2 px-0 py-1 mx-2'>
                {((dayforecast.hours.reduce((acc, cur) => acc + parseInt(cur[Object.keys(cur)[0]], 10), 0) / 8) * 100).toFixed(0)}%
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ResourceForecast;
