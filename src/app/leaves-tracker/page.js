import { MdOutlineMoreTime } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { leavesHistory } from "../Constants/MyLeavesData";

export default function LeaveTracker() {
  return (
    <div className="flex flex-col gap-[10px] p-[20px]">
      {/*heading section*/}
      <div className="flex justify-between items-center w-full">
        {/* wecome line section */}
        <div className="flex flex-col gap-[13px]">
          <h2 className="text-[32px] font-medium text-dark-blue">
            Good afternoon, Nitin!
          </h2>
          <p className="text-grey-color font-semibold">
            You have <span className="text-dark-blue">2 request</span> pending.
          </p>
        </div>

        {/* time section */}
        <div className="flex items-center bg-[#FEFFFE] gap-x-14 rounded-[15px] p-[15px]">
          <div className="flex flex-col">
            <span className="text-grey-color font-semibold">Current time</span>
            <span className="font-semibold">29 April 2024, 1:00 PM</span>
          </div>

          {/* timer icon */}
          <span className="w-8 h-8">
            <MdOutlineMoreTime className="w-full h-full" />
          </span>
        </div>
      </div>

      {/* upper boxes includes my-leaves & consumed leaves section */}
      <div className="w-full h-[330px] flex items-center  gap-[10px]">
        {/* my leaves section */}
        <div className="h-full w-[65%] shadow-sm rounded-[15px] bg-[#FEFEFF]">
          {/* title : My leaves */}
          <div className="w-full h-[55px] flex items-center justify-between p-7">
            <span className="text-[#12225F]  font-medium ">My Leaves</span>
            <button className=" text-[12px] font-bold text-white bg-[#0683C6] py-1 px-9 rounded-lg">
              Apply leave
            </button>
          </div>

          {/* list of requests */}
          {leavesHistory.map((value) => (
            <div className="w-full h-[55px] flex justify-between px-[34px] pr-[74px]">
              {/* includes bullet points with data */}
              <div className="flex gap-14">
                {/* bullet points section */}
                <div className="flex flex-col gap-[1px]  items-center mt-[1px] ">
                  <div className="h-[10px] w-[10px] bg-[#FF7B02] rounded-[50px]"></div>
                  <div className="flex-1 w-[1px] bg-[#8B95A5]  "> </div>
                </div>
                {/* content of the leave */}
                <div className="h-full flex flex-col ">
                  {" "}
                  <span className="text-[13px] leading-none">{`${value.startDate} - ${
                    value.endDate ? value.endDate : ""
                  } `}</span>
                  <span className="text-[11px] text-[#8B95A5]">{`${value.reason} • ${value.count} Days`}</span>
                </div>
              </div>

              {/* status */}
              <span className="text-[11px] text-[#FF7B02]">{value.status}</span>
            </div>
          ))}

          {/* pagination section */}
          <div className="w-full h-[55px]  flex items-center justify-end gap-6 pr-4">
            <span className="h-full flex items-center w-[20px]">
              <FaAngleLeft />
            </span>
            <span className="h-full flex items-center w-[20px]">1</span>
            <span className="h-[30px] flex items-center justify-center w-[30px] bg-[#0683C6] rounded-[50px]">
              2
            </span>
            <span className="h-full flex items-center w-[20px]">3</span>
            <span className="h-full flex items-center w-[20px]">
              <FaAngleRight />
            </span>
          </div>
        </div>

        {/* consumed leaves section */}
        <div className="h-full w-[35%] shadow-sm rounded-[15px] bg-[#FEFEFF]"></div>
      </div>

      {/* leave stats */}
      <div className="w-full h-[472px] flex items-center  gap-[10px]">
        <div className="w-full h-full rounded-[15px] bg-[#FEFEFF] shadow-sm"></div>
        <div className="w-full h-full rounded-[15px] bg-[#FEFEFF] shadow-sm"></div>
      </div>
    </div>
  );
}
