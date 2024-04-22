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
        return '#0683c6';
      case "2":
        return '#7FC2E7';
      case "3":
        return '#0683c6';
      case "4":
        return '#7FC2E7';
      case "5":
        return '#0683c6';
      case "6":
        return '#7FC2E7';
      case "7":
        return '#0683c6';
      case "8":
        return '#7FC2E7';
      default:
        return '#FF0000';
    }
  };

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} w-full bg-white p-2 transition-all ease-in-out duration-500 `}>
      {/* outer div */}
      {forecast.map((dayforecast) => (
        <React.Fragment key={dayforecast.id}>
          <div className='flex flex-col w-full gap-4  p-1 shadow-lg shadow-white bg-opacity-50'>
            {/* full Row for a day */}
            <div className='w-full flex md:flex-row flex-col '>
              <div className='md:w-[10%] w-full flex items-center text-left'>{dayforecast.day}</div>
              <div className='md:w-[80%] w-full flex flex-row items-center justify-center gap-1'>
                {dayforecast.hours.map((hourObj, index) => (
                  <React.Fragment key={index}>
                    <div
                      title={`${hourObj[Object.keys(hourObj)[0]]} hours - ${Object.keys(hourObj)[0]}`}
                      className='truncate cursor-pointer transition-all ease-in-out duration-500 '
                      style={{
                        width: `${calculateWidth(hourObj[Object.keys(hourObj)[0]]).usedWidth}%`,
                        backgroundColor: getColorForHours(hourObj[Object.keys(hourObj)[0]]),
                        marginBottom: 6,
                        color: "#000000",
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
                  <div
                    className='flex items-center justify-center transition-all ease-in-out duration-500 '
                    style={{
                      width: `${calculateWidth(dayforecast.hours).remainingWidth}%`,
                      backgroundColor: '#F76868',
                      marginBottom: 6,
                      
                    }}
                  >
                   Free
                  </div>
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
