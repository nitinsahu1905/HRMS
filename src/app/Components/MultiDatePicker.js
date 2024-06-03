"use client";
import React, { useState } from "react";
import dayjs from "dayjs";

const weekDaysAbbrivation = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek) ? null : weekDays[dayOfWeek];
}

function monthDayMaker(year, month) {
  let days = getDaysInMonth(year, month + 1);
  let daysArr = [];
  let i = 0;
  while (i < days) {
    daysArr.push(i + 1);
    i = i + 7;
  }
  let x = getDayOfWeek(`${month + 1}-${1}-${year}`);
  if (getDaysInMonth(year, month + 1) > i - weekDays.indexOf(x)) {
    daysArr.push(getDaysInMonth(year, month + 1));
  }
  return daysArr;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

const dateHighlighter = (
  monthDateAtIndex,
  month,
  year,
  customStyles,
  datesToHighlight
) => {
  switch (true) {
    case datesToHighlight.approvedDates.includes(
      `${monthDateAtIndex}/${month + 1}/${year}`
    ):
      return customStyles.approvedDates;
    case datesToHighlight.rejectedDates.includes(
      `${monthDateAtIndex}/${month + 1}/${year}`
    ):
      return customStyles.rejectedDates;
    case datesToHighlight.pendingDates.includes(
      `${monthDateAtIndex}/${month + 1}/${year}`
    ):
      return customStyles.pendingDates;
    default:
      return "#FFFFFF";
  }
};

const MonthViewer = ({
  datesToHighlight,
  customStyles,
  year = 2024,
  month = 4,
}) => {
  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonth, setCurrentMonth] = useState(month);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11); // December
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0); // January
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center gap-[30px] mt-4 mb-4">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <div>
          {dayjs(`${currentYear}-${currentMonth + 1}-1`).format("MMMM YYYY")}
        </div>
        <button onClick={handleNextMonth}>{">"}</button>
      </div>

      {/* Calender Data */}
      <div className="w-full h-auto flex items-center justify-center ">
        <table>
          <thead>
            <tr>
              {weekDaysAbbrivation.map((dayAbbr, index) => (
                <td
                  key={index}
                  className={`p-1 text-center text-[${customStyles.headingColor}] text-[0.75rem] pb-4`}
                >
                  {dayAbbr}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthDayMaker(currentYear, currentMonth).map((day, dayIndex) => (
              <tr key={dayIndex}>
                {weekDays.map((weekDay, weekIndex) => {
                  let x = getDayOfWeek(
                    `${currentMonth + 1}-${day}-${currentYear}`
                  );
                  let monthDateAtIndex =
                    weekDays.indexOf(x) !== -1
                      ? weekDays.indexOf(weekDay) + day - weekDays.indexOf(x)
                      : getDaysInMonth(currentYear, currentMonth + 1) >
                        day - 6 + weekDays.indexOf(weekDay)
                      ? day - 6 + weekDays.indexOf(weekDay)
                      : "";
                  return weekDays.indexOf(x) + 1 >
                    day + weekDays.indexOf(weekDay) ||
                    getDaysInMonth(currentYear, currentMonth + 1) <
                      weekDays.indexOf(weekDay) + day - weekDays.indexOf(x) ? (
                    day < 7 ? (
                      <td
                        key={weekIndex}
                        className={`text-[10px] text-[${customStyles.headingColor}] text-center cursor-default`}
                      >
                        <div className="text-[10px] w-[20px] h-[20px] justify-center items-center flex">
                          {getDaysInMonth(currentYear, currentMonth) -
                            weekDays.indexOf(x) +
                            1 +
                            weekIndex}
                        </div>
                      </td>
                    ) : (
                      <td
                        key={weekIndex}
                        className={`text-[10px] text-[${customStyles.headingColor}] text-center cursor-default`}
                      >
                        <div className="text-[10px] w-[20px] h-[20px] justify-center items-center flex">
                          {day +
                            weekDays.indexOf(weekDay) -
                            getDaysInMonth(currentYear, currentMonth + 1) -
                            weekDays.indexOf(x)}
                        </div>
                      </td>
                    )
                  ) : (
                    <td key={weekIndex} className={`h-[20px] w-[20px]  `}>
                      <div
                        style={{
                          backgroundColor: dateHighlighter(
                            monthDateAtIndex,
                            currentMonth,
                            currentYear,
                            customStyles,
                            datesToHighlight
                          ),
                        }}
                        className="hover:bg-[#0000000E] text-[10px] w-[20px] h-[20px] justify-center items-center flex rounded-full"
                      >
                        {monthDateAtIndex}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Labels of Calender */}
      <div className=" grid grid-cols-2 items-center justify-center w-full gap-y-[20px] px-[20px] mt-[20px] pb-3     ">
        {/* Pending */}
        <div
          className={`flex text-[#0683C6] w-fit `}
          style={{
            fontFamily: "Poppins,sans-serif",
            gap: "0.5rem",
            fontSize: "14px",
          }}
        >
          <div className="rounded-[50%] bg-[#bfe9ff] w-[20px] h-[20px]"></div>{" "}
          Pending
        </div>
        {/* Approved */}
        <div
          className="w-fit text-[#008000] "
          style={{
            fontFamily: "Poppins,sans-serif",
            font: "bold",
            display: "flex",
            gap: "0.5rem",
            fontSize: "14px",
          }}
        >
          <div className="rounded-[50%] bg-[#9deb9d] w-[20px] h-[20px]"></div>{" "}
          Approved
        </div>
      {/* Rejected */}
      <div
        className={`flex w-fit text-[#8E0101] `}
        style={{
          fontFamily: "Poppins,sans-serif",
          font: "bold",
          gap: "0.5rem",
          fontSize: "14px",
        }}
      >
        <div className="rounded-[50%] bg-[#fa8282] w-[20px] h-[20px]"></div>{" "}
        Rejected
      </div>
      </div>
    </div>
  );
};

const MultiDatePicker = () => {
  const customStyles = {
    pendingDates: "#bfe9ff",
    approvedDates: "#9deb9d",
    rejectedDates: "#fa8282",
  };

  const datesToHighlight = {
    approvedDates: ["9/5/2024", "11/5/2024"],
    rejectedDates: ["7/5/2024"],
    pendingDates: ["12/5/2024"],
  };

  return (
    <div>
      <MonthViewer
        datesToHighlight={datesToHighlight}
        customStyles={customStyles}
      />
    </div>
  );
};

export default MultiDatePicker;
