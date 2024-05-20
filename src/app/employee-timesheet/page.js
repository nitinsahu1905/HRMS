import React from 'react'
import ArrivalReportChart from '../Components/ArrivalReport';

const EmployeeTimesheet = () => {
  return (
    <div className='p-4 flex flex-col gap-4'>
         {/* heading and two buttons */}
        <div className='flex flex-row justify-between '>

            {/* heading */}
            <div className='flex flex-col gap-[2px]'>
                <div className='text-dark-blue text-[20px] font-semibold'>Timesheet Id</div>
                <div className='text-secondary-blue text-[15px] font-semibold'>TS-00897</div>
            </div>

            {/* two buttons */}
            <div className='flex flex-row gap-2'>
                <div><button className='text-secondary-blue bg-white rounded-tl-xl rounded-bl-xl px-4 py-2 border-secondary-blue border-[1px] text-xs'>Request Modification</button></div>
                <div><button className='text-white bg-secondary-blue rounded-tr-xl rounded-br-xl px-4 py-2 text-xs'>Submit For Approval</button></div>
            </div>

        </div>

        {/* Information and timesheet entries */}
        <div className='flex flex-row gap-2 w-full'>

            {/* Information */}
            <div className='bg-white rounded-[15px] p-4 flex flex-col w-[40%] gap-6'>
                <div className='flex flex-row justify-between w-full'>
                    <div className='w-[50%] flex flex-col gap-[2px]'>
                        <div className='text-dark-blue text-xs font-medium'>Name</div>
                        <div className='text-[#0683c6] text-xs font-normal'>Divyanshi Paliwal</div>
                    </div>

                    <div className='w-[50%] flex flex-col gap-[2px]'>
                        <div className='text-dark-blue text-xs font-medium'>Reporting Manager</div>
                        <div className='text-grey-color text-xs font-normal'>Bheem Singh</div>
                    </div>
                </div>


              
                    
                <div className='flex flex-row justify-between w-full'>
                    <div className='w-[50%] flex flex-col gap-[2px]'>
                        <div className='text-dark-blue text-xs font-medium'>Start Date</div>
                        <div className='text-grey-color text-xs font-normal'>May 05,2024</div>
                    </div>

                    <div className='w-[50%] flex flex-col gap-[2px]'>
                       <div className='text-dark-blue text-xs font-medium'>End Date</div>
                        <div className='text-grey-color text-xs font-normal'>May 12,2024</div>
                    </div>
                </div>


                <div className='flex flex-row justify-between w-full'>
                    <div className='w-[50%] flex flex-col gap-[2px]'>
                        <div className='text-dark-blue text-xs font-medium'>Total Hours</div>
                        <div className='text-grey-color text-xs font-normal'>40.00</div>
                    </div>

                    <div className='w-[50%] flex flex-col gap-[2px]'>
                        <div className='text-dark-blue text-xs font-medium'>Status</div>
                        <div className='text-[#009300] text-xs font-normal'>Approved</div>
                    </div>
                </div>

            </div>

            {/* Timesheet Entries */}
            <div className='flex flex-col gap-0 bg-white rounded-[15px]  w-[60%]' >
                 {/* heading */}
                <div className=' bg-[#daf2ff] flex flex-row justify-between rounded-tl-xl rounded-tr-xl px-4 py-2'>
                    <div className='text-[#025F92] font-medium text-[15px]'>Timesheet Entry</div>
                    <div><button className='text-[#025f92] bg-white rounded-lg px-2 py-1 text-[12px]'>New</button></div>
                </div>

                {/* Table */}
                <div className='px-4 py-2'>
                  <table className='w-full'>
                    <tbody>
                        <tr  >
                            <th className='text-[#121f47] text-xs font-semibold'>Timesheet Id</th>
                            <th className='text-[#121f47] text-xs font-semibold'>Project Name</th>
                            <th className='text-[#121f47] text-xs font-semibold'>Hours</th>
                            <th className='text-[#121f47] text-xs font-semibold'>Date</th>
                        </tr>
                        <tr>
                            <td className='text-grey-color text-xs font-normal'>SL-001</td>
                            <td className='text-black text-xs font-normal'>HRMS</td>
                            <td className='text-black text-xs font-normal'>4.0</td>
                            <td className='text-black text-xs font-normal'>May 12,2024</td>
                        </tr>

                        <tr>
                            <td className='text-grey-color text-xs font-normal'>SL-001</td>
                            <td className='text-black text-xs font-normal'>HRMS</td>
                            <td className='text-black text-xs font-normal'>4.0</td>
                            <td className='text-black text-xs font-normal'>May 12,2024</td>
                        </tr>

                        <tr>
                            <td className='text-grey-color text-xs font-normal'>SL-001</td>
                            <td className='text-black text-xs font-normal'>HRMS</td>
                            <td className='text-black text-xs font-normal'>4.0</td>
                            <td className='text-black text-xs font-normal'>May 12,2024</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>

        {/* hours reports and timesheet history */}
        <div></div>

        {/* Task type and projects undertaken report */}
        <div className='flex flex-row gap-4'>

            {/* Task Types */}
            <div>
               
            </div>

            {/* projects underTaken */}
            <div></div>
        </div>
      
    </div>
  )
}

export default EmployeeTimesheet;
