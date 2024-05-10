import { MdOutlineMoreTime } from "react-icons/md";

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

      {/* upper boxes includes weekly/monthly stats & leaves section */}
      <div className="w-full h-[330px] flex items-center  gap-[10px]">
        <div className="h-full w-full shadow-sm rounded-[15px] bg-[#FEFEFF]"></div>
        <div className="h-full w-full shadow-sm rounded-[15px] bg-[#FEFEFF]"></div>
        <div className="h-full w-full shadow-sm rounded-[15px] bg-[#FEFEFF]"></div>
      </div>

      {/* leave stats */}
      <div className="w-full h-[472px] flex items-center  gap-[10px]">
        <div className="w-full h-full rounded-[15px] bg-[#FEFEFF] shadow-sm"></div>
        <div className="w-full h-full rounded-[15px] bg-[#FEFEFF] shadow-sm"></div>
      </div>
    </div>
  );
}
