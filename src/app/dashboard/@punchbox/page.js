"use client";
import Card from "@/app/Components/Card";
// import Card from "@/components/Card";
import { useEffect, useState } from "react";

function getDate() {
    const today = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    return today.toLocaleString("en-US", options);
  }

const Punchbox = () => {
    const [time, setTime] = useState(new Date());
    const [punchIn, setPunchIn] = useState(false);
    const [punchInTime, setPunchInTime] = useState("00:00:00");
    const [punchOutTime, setPunchOutTime] = useState("00:00:00");
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date());
          if (punchIn) {
            setDuration((prevDuration) => prevDuration + 1);
          }
        }, 1000);
        return () => clearInterval(intervalId);
      }, [punchIn]);

      const formattedTime = time.toLocaleTimeString('en-US', { hour12: false });

    function changePunch(){
      if (!punchIn) {
        setPunchIn(true);
        setPunchInTime(formattedTime);
      } else {
        setPunchIn(false);
        setPunchOutTime(formattedTime);
        // // Calculate duration
        // const timeDiff = Math.abs(new Date(punchOutTime) - new Date(punchInTime));
        // const hours = Math.floor(timeDiff / 3600000) % 24;
        // const minutes = Math.floor(timeDiff / 60000) % 60;
        // const seconds = Math.floor(timeDiff / 1000) % 60;
        // setDuration(`${hours}:${minutes}:${seconds}`);
      }
    }
    function formatDuration(duration) {
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      const seconds = duration % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

  return (
    <>
      <Card>
        <div className="w-full flex justify-between items-center font-poppins text-[16px] ">
          <div className="flex gap-[10px] justify-center items-center ">
            <div className="flex gap-[10px]">
              <div>Date:</div>
              <span className="text-grey-color">{getDate()}</span>
            </div>
            <div className="flex gap-[10px]">
              <div>Time:</div>
              <span className="text-grey-color">
              <time  suppressHydrationWarning>{formattedTime}</time>

                </span>
            </div>
          </div>
          <div className="flex gap-[10px] ">
            <div className="flex gap-[10px] bg-sky-color rounded-[50px] px-5 py-[5px] justify-center items-center ">
              <div>Duration:</div>
              <span className="text-grey-color">{formatDuration(duration)}</span>
            </div>
            <div className="flex bg-primary-blue rounded-[50px] p-[4px] justify-center items-center gap-1   " id="puchButton">
              {!punchIn?
                
                <>
                <div className="bg-white rounded-[50px] text-primary-blue w-full h-full flex justify-center items-center px-[10px] font-semibold text-[15px] cursor-pointer transition-all duration-100 ease-in-out  " onClick={changePunch}>PUNCH IN</div>
                <div className="text-white px-[10px] text-[15px] " >{punchOutTime}</div>
                </>
                :
                <>
                <div className="text-white px-[10px] text-[15px] " >{punchInTime}</div>
                <div className="bg-white rounded-[50px] text-primary-blue w-full h-full flex justify-center items-center px-[10px] font-semibold text-[15px] cursor-pointer transition-all duration-100 ease-in-out  " onClick={changePunch}>PUNCH OUT</div>
                </>
              }
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Punchbox;
