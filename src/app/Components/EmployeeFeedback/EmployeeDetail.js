import React from 'react'

const EmployeeDetail = ({heading,headingValue}) => {
  return (
    <div className='flex flex-col gap-[1px] w-[25%]'>
      <div className='text-[#121f47] text-[15px] font-medium'>{heading}</div>
      <div className='font-semibold text-[13px] text-[#808080]'>{headingValue}</div>
    </div>
  )
}

export default EmployeeDetail
