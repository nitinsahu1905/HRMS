"use client";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { leavesHistory, upcomingHolidays } from "../Constants/MyLeavesData";
import { useEffect, useState } from "react";
import ConsumedLeavesChart from "../Components/LeaveTrackerCharts/consumed-leaves-chart";
import YearlyStatsChart from "../Components/LeaveTrackerCharts/yearly-stats-chart";

export default function LeaveTracker() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [updatedConsumedLeaves, setUpdatedConsumedLeves] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the indexes for slicing the array:
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = leavesHistory.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalItems = leavesHistory.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // function to handle page changes:
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // raw data for the consumed leaves
  const consumedLeaves = [
    { type: "PL", count: 2 },
    { type: "CL", count: 4 },
    { type: "SL", count: 1 },
    { type: "PL", count: 0 },
    { type: "BL", count: 7 },
  ];

  // function on all counts
  useEffect(() => {
    const updatedConsumedLeaves = consumedLeaves.map((leave) => ({
      ...leave,
      width: (leave.count * 100) / 12,
    }));
    setUpdatedConsumedLeves(updatedConsumedLeaves);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format current time
  const formatTime = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  // function to sort the month
  const monthHandler = (event) => {
    setMonth(event.target.value);
  };

  // function to get the current month
  const getCurrentMonth = () => {
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];
    const currentMonthIndex = new Date().getMonth();
    console.log("m0onth indee", currentMonthIndex);
    return monthNames[currentMonthIndex];
  };

  const [month, setMonth] = useState(getCurrentMonth());

  // filetering the months
  const filteredHolidays = upcomingHolidays.filter(
    (items) => items.month === `${month}`
  );

  // extracting holidays months from the upcomingHoldays array
  const holidayMonths = [
    ...new Set(upcomingHolidays.map((holiday) => holiday.month)),
  ];

  return (
    <div className="flex flex-col gap-[10px] p-[20px] ml-[4vw]">
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
            <span className="font-semibold">{formatTime(currentTime)}</span>
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
        <div className="h-full w-[60%] shadow-sm rounded-[15px] bg-[#FEFEFF] flex flex-col justify-between">
          {/* title : My leaves */}
          <div className="w-full h-[55px] flex items-center justify-between p-7">
            <span className="text-[#12225F] font-medium">My Leaves</span>
            <button className="text-[12px] font-bold text-white bg-[#0683C6] py-1 px-9 rounded-lg">
              Apply leave
            </button>
          </div>

          {/* list of requests */}
          {currentItems.map((value) => (
            <div
              className="w-full h-[55px] flex justify-between px-[34px] pr-[74px]"
              key={value.startDate + value.reason}
            >
              <div className="flex gap-14">
                <div className="flex flex-col gap-[1px] items-center mt-[1px]">
                  <div
                    className={`h-[10px] w-[10px] rounded-[50px] ${
                      value.status === "Pending"
                        ? "bg-orange-500"
                        : value.status === "Approved"
                        ? "bg-green-500"
                        : value.status === "Rejected"
                        ? "bg-red-500"
                        : ""
                    }`}
                  ></div>
                  <div className="flex-1 w-[1px] bg-[#8B95A5]"></div>
                </div>

                {/* content of the leave */}
                <div className="h-full flex flex-col">
                  <span className="text-[13px] leading-none">{`${
                    value.startDate
                  } ${value.endDate ? `- ${value.endDate}` : ""}`}</span>
                  <span className="text-[11px] text-[#8B95A5]">{`${
                    value.reason
                  } • ${value.count} Day${value.count > 1 ? "s" : ""}`}</span>
                </div>
              </div>

              {/* status */}
              <span
                className={`text-[11px] ${
                  value.status === "Pending"
                    ? "text-orange-500"
                    : value.status === "Approved"
                    ? "text-green-500"
                    : value.status === "Rejected"
                    ? "text-red-500"
                    : ""
                }`}
              >
                {value.status}
              </span>
            </div>
          ))}

          {/* pagination section */}
          <div className="w-full h-[55px] flex items-center justify-end gap-6 pr-4">
            <span
              className="h-full flex items-center w-[20px]"
              onClick={() =>
                handleClick(currentPage > 1 ? currentPage - 1 : totalPages)
              }
            >
              <FaAngleLeft />
            </span>

            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index + 1}
                className={`h-[20px] w-[20px] flex items-center justify-center rounded-full ${
                  currentPage === index + 1 ? "bg-[#0683C6] text-white" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(index + 1)}
              >
                {index + 1}
              </span>
            ))}

            <span
              className="h-full flex items-center w-[20px]"
              onClick={() =>
                handleClick(currentPage < totalPages ? currentPage + 1 : 1)
              }
            >
              <FaAngleRight />
            </span>
          </div>
        </div>

        {/* consumed leaves section */}
        <div className="h-full w-[40%] shadow-sm rounded-[15px] bg-[#FEFEFF]">
          {/* top-box */}
          <div className="w-full h-[38%] flex">
            {/* title */}
            <div className="h-full w-[70%] flex flex-col gap-2 p-4">
              <span className="text-[#12225F] font-medium ">
                Consumed Leave Types
              </span>

              {/* types of leaves */}
              <div className="grid grid-cols-2 gap-2">
                <p className="text-[11px] text-[#8B95A5]">
                  <span className="text-[13px] text-black font-medium leading-none p-2">
                    PL
                  </span>
                  Planned leaves
                </p>
                <p className="text-[11px] text-[#8B95A5]">
                  <span className="text-[13px] text-black font-medium leading-none p-2">
                    SL
                  </span>
                  Sick leaves
                </p>
                <p className="text-[11px] text-[#8B95A5]">
                  <span className="text-[13px] text-black font-medium leading-none p-2">
                    CL
                  </span>
                  Casual leaves
                </p>
                <p className="text-[11px] text-[#8B95A5]">
                  <span className="text-[13px] text-black font-medium leading-none p-2">
                    PL
                  </span>
                  Paternity leaves
                </p>
                <p className="text-[11px] text-[#8B95A5] w-max">
                  <span className="text-[13px] text-black font-medium leading-none p-2">
                    BL
                  </span>
                  Bereavement leaves
                </p>
              </div>
            </div>

            {/* donut chart for consumed lives*/}
            <div className="h-full w-[30%]">
              <div className="flex flex-col gap-[10px] items-center justify-center ">
                <ConsumedLeavesChart usedLeaves={[9, 5]} totalHolidays={52} />
              </div>
            </div>
          </div>

          <div className="w-full h-[62%]">
            {/* pipes for the consumed leaves */}
            {updatedConsumedLeaves.length > 0
              ? updatedConsumedLeaves.map(
                  (
                    item,
                    index // Add index as a second argument
                  ) => (
                    <div
                      className="flex items-center gap-[32px] px-6 p-2"
                      key={index}
                    >
                      {" "}
                      {/* Add key prop */}
                      {/* type of the leave */}
                      <span>{item.type}</span>{" "}
                      <div className="w-full rounded-[30px] h-[10px] bg-[#F1F2F4]">
                        <div
                          className="rounded-[30px] h-full bg-[#66CFFF]"
                          style={{ width: `${item.width}%` }}
                        ></div>
                      </div>
                      <span>
                        {item.count}
                        <span className="text-[#808080]">/12</span>
                      </span>
                    </div>
                  )
                )
              : null}
          </div>
        </div>
      </div>

      {/* lower boxes which includes upcoming holidays section & yearly statics */}
      <div className="w-full h-[325px] flex items-center  gap-[10px]">
        {/* upcoming holidays section */}
        <div className="w-[40%] h-full rounded-[15px] bg-[#FEFEFF] shadow-sm">
          {/* title : Upcoming holidays */}
          <div className="w-full h-[55px] flex items-center justify-between p-7">
            <span className="text-[#12225F]  font-medium ">
              Upcoming Holidays
            </span>

            {/* sorting the months */}
            <select
              className="text-[14px] border-[2px] outline-none rounded-[6px]"
              value={month}
              onChange={monthHandler}
            >
              <option value="">{month}</option>
              {holidayMonths.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          {/* list of holidays */}
          {filteredHolidays.length > 0 ? (
            <>
              {filteredHolidays.map(
                (
                  holiday,
                  index // Add index as a second argument
                ) => (
                  <div
                    className="w-full h-[55px] flex justify-between px-[34px] pr-[54px]"
                    key={index}
                  >
                    {" "}
                    {/* Add key prop */}
                    {/* includes bullet points with data */}
                    <div className="flex gap-8">
                      {/* bullet points section */}
                      <div className="flex flex-col gap-[1px]  items-center mt-[1px] ">
                        <div className="h-[10px] w-[10px] bg-[#FF7B02] rounded-[50px]"></div>
                      </div>

                      {/* content of the leave */}
                      <div className="h-full flex flex-col ">
                        {" "}
                        <span className="text-[13px] leading-none">
                          {holiday.occasion}
                        </span>
                        <span className="text-[11px] text-[#8B95A5]">
                          {holiday.date}
                        </span>
                      </div>
                    </div>
                    {/* days */}
                    <span className="text-[11px] text-[#52B693]">{`${holiday.count} Day`}</span>
                  </div>
                )
              )}
            </>
          ) : (
            <p className="mt-5 w-full flex items-center justify-center">
              No holidays this month
            </p>
          )}
        </div>

        {/* yearly statics section */}
        <div className="w-[60%] h-full rounded-[15px] bg-[#FEFEFF] shadow-sm">
          <YearlyStatsChart />
        </div>
      </div>
    </div>
  );
}
