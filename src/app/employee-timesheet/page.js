import React from "react";
import ArrivalReportChart from "../Components/ArrivalReport";
import BarChart from "../Components/BarChart";
import JourneyChart from "../Components/JuorneyChart";

const EmployeeTimesheet = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* heading and two buttons */}
      <div className="flex flex-row justify-between ">
        {/* heading */}
        <div className="flex flex-col gap-[2px]">
          <div className="text-dark-blue text-[20px] font-semibold">
            Timesheet Id
          </div>
          <div className="text-secondary-blue text-[15px] font-semibold">
            TS-00897
          </div>
        </div>

        {/* two buttons */}
        <div className="flex flex-row gap-2">
          <div>
            <button className="text-secondary-blue bg-white rounded-tl-xl rounded-bl-xl px-4 py-2 border-secondary-blue border-[1px] text-xs">
              Request Modification
            </button>
          </div>
          <div>
            <button className="text-white bg-secondary-blue rounded-tr-xl rounded-br-xl px-4 py-2 text-xs">
              Submit For Approval
            </button>
          </div>
        </div>
      </div>

      {/* Information and timesheet entries */}
      <div className="flex flex-row gap-4 w-full">
        {/* Information */}
        <div className="bg-white rounded-[15px] p-4 flex flex-col w-[40%] gap-6">
          <div className="flex flex-row justify-between w-full">
            <div className="w-[50%] flex flex-col gap-[2px]">
              <div className="text-dark-blue text-xs font-medium">Name</div>
              <div className="text-[#0683c6] text-xs font-normal">
                Divyanshi Paliwal
              </div>
            </div>

            <div className="w-[50%] flex flex-col gap-[2px]">
              <div className="text-dark-blue text-xs font-medium">
                Reporting Manager
              </div>
              <div className="text-grey-color text-xs font-normal">
                Bheem Singh
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full">
            <div className="w-[50%] flex flex-col gap-[2px]">
              <div className="text-dark-blue text-xs font-medium">
                Start Date
              </div>
              <div className="text-grey-color text-xs font-normal">
                May 05,2024
              </div>
            </div>

            <div className="w-[50%] flex flex-col gap-[2px]">
              <div className="text-dark-blue text-xs font-medium">End Date</div>
              <div className="text-grey-color text-xs font-normal">
                May 12,2024
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full">
            <div className="w-[50%] flex flex-col gap-[2px]">
              <div className="text-dark-blue text-xs font-medium">
                Total Hours
              </div>
              <div className="text-grey-color text-xs font-normal">40.00</div>
            </div>

            <div className="w-[50%] flex flex-col gap-[2px]">
              <div className="text-dark-blue text-xs font-medium">Status</div>
              <div className="text-[#009300] text-xs font-normal">Approved</div>
            </div>
          </div>
        </div>

        {/* Timesheet Entries */}
        <div className="flex flex-col gap-0 bg-white rounded-[15px]  w-[60%]">
          {/* heading */}
          <div className=" bg-[#daf2ff] flex flex-row justify-between rounded-tl-xl rounded-tr-xl px-4 py-2">
            <div className="text-[#025F92] font-medium text-[15px]">
              Timesheet Entry
            </div>
            <div>
              <button className="text-[#025f92] bg-white rounded-lg px-2 py-1 text-[12px]">
                New
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="px-4 py-2">
            <table className="w-full">
              <tbody>
                <tr>
                  <th className="text-[#121f47] text-xs font-semibold">
                    Timesheet Id
                  </th>
                  <th className="text-[#121f47] text-xs font-semibold">
                    Project Name
                  </th>
                  <th className="text-[#121f47] text-xs font-semibold">
                    Hours
                  </th>
                  <th className="text-[#121f47] text-xs font-semibold">Date</th>
                </tr>
                <tr>
                  <td className="text-grey-color text-xs font-normal">
                    SL-001
                  </td>
                  <td className="text-black text-xs font-normal">HRMS</td>
                  <td className="text-black text-xs font-normal">4.0</td>
                  <td className="text-black text-xs font-normal">
                    May 12,2024
                  </td>
                </tr>

                <tr>
                  <td className="text-grey-color text-xs font-normal">
                    SL-001
                  </td>
                  <td className="text-black text-xs font-normal">HRMS</td>
                  <td className="text-black text-xs font-normal">4.0</td>
                  <td className="text-black text-xs font-normal">
                    May 12,2024
                  </td>
                </tr>

                <tr>
                  <td className="text-grey-color text-xs font-normal">
                    SL-001
                  </td>
                  <td className="text-black text-xs font-normal">HRMS</td>
                  <td className="text-black text-xs font-normal">4.0</td>
                  <td className="text-black text-xs font-normal">
                    May 12,2024
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* hours reports and timesheet history */}
      <div className="flex flex-row gap-4 w-full">
        <div className="w-[40%]  bg-white rounded-[15px] p-4 gap-3 flex flex-col">
            <div className="text-dark-blue text-[20px] font-medium">Hours Report</div>
      <BarChart/>
      </div>

      <div className="w-[60%] bg-white rounded-[15px] flex flex-col gap-0  ">
      <div className=" bg-[#daf2ff]  rounded-tl-xl rounded-tr-xl px-4 py-2">
            <div className="text-[#025F92] font-medium text-[15px]">
              Timesheet History
            </div>
      </div>
        <div className="p-4">
        <JourneyChart status="Approved" date="May 06,2024" time="17:00:00" name="Bheem Singh"/>
        <JourneyChart status="Submitted" date="May 06,2024" time="16:00:00" name="Divyanshi Paliwal"/>
        <JourneyChart status="Rejected" date="May 06,2024" time="11:00:00" name="Bheem Singh"/>
        <JourneyChart status="Submitted" date="May 06,2024" time="10:00:00" name="Divyanshi Paliwal"/>
        </div>
        
      
      
        
        
       
        </div>
      </div>

      {/* Task type and projects undertaken report */}
      <div className="flex flex-row gap-4 w-full">
        {/* Task Types */}
        <div className="w-[40%] flex flex-col bg-white rounded-[15px] p-4 gap-3">
          <div className="text-dark-blue text-[20px] font-medium">
            Task Type
          </div>
          <ArrivalReportChart />
        </div>

        {/* projects underTaken */}
        <div className="flex flex-col gap-4 p-4 bg-white rounded-[15px] w-[60%]">
          <div className="text-dark-blue font-medium text-[20px]">Projects Undertaken with Hourly Details</div>
          <div className="relative h-2 bg-grey-color rounded-lg w-full mb-4 flex">
            <div className="h-2 flex-[4] bg-[#42BDFF] rounded-l-lg"></div>
            <div className="h-2 flex-[3] bg-[#EC8383]"></div>
            <div className="h-2 flex-[2] bg-[#C6C6F6]"></div>
            <div className="h-2 flex-[1] bg-[#ba7070] rounded-r-lg"></div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 ">
              <div className="h-3 w-3 rounded-full bg-[#42BDFF] mt-1"></div>
              <div className="text-[15px] font-normal">HRMS</div>
            </div>
            <div className="text-grey-color font-normal">7.00 hr</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 ">
              <div className="h-3 w-3 rounded-full bg-[#EC8383] mt-1"></div>
              <div className="text-[15px] font-normal">KYC</div>
            </div>
            <div className="text-grey-color font-normal">2.00 hr</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 ">
              <div className="h-3 w-3 rounded-full bg-[#C6C6F6] mt-1"></div>
              <div className="text-[15px] font-normal">Aircraft Distribution Parts</div>
            </div>
            <div className="text-grey-color font-normal">3.00 hr</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 ">
              <div className="h-3 w-3 rounded-full bg-[#ba7070] mt-1"></div>
              <div className="text-[15px] font-normal">Ticket Booking Sytem</div>
            </div>
            <div className="text-grey-color font-normal">8.00 hr</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTimesheet;
