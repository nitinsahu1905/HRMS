import React from 'react'
 
const Statistics = ({heading,value,color}) => {
   
  return (
    <div className='flex flex-col '>
      <div className='font-normal text-[16px] text-black'>{heading}</div>
      <div className='flex flex-row justify-between '>
        <div className='w-[90%] bg-[#d9d9d9] h-2 mt-2 rounded-lg relative'>
            <div className='absolute z-0  h-2 rounded-lg'  style={{ width: `${value}%`,background:`${color}` }}></div>
        </div>
        {heading === "Efficiency"
        ?
        <div className='text-dark-blue font-medium text-[15px] text-center'>{value}%</div>
        :
        <div className='text-dark-blue font-medium text-[15px] text-center'>{value}</div>
        
        }
      </div>
    </div>
  )
}
 
export default Statistics;