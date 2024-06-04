import React from 'react'

const EmployeeDetailImportant = ({heading,headingValue}) => {
  return (
    <div className='flex flex-col gap-[1px] w-[25%]'>
      <div className='text-[#121f47] text-[15px] font-medium'>{heading}</div>
      <div className='flex flex-col gap-1'>
      <div className='font-semibold text-[13px] text-[#7cbcde]'>{headingValue}</div>
      <div className='w-full h-[1px] bg-[#808080]'></div>
      </div>
    </div>
  )
}

export default EmployeeDetailImportant
