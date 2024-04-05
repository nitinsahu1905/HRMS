import React from 'react';
import { TeamData } from '../Constants/TeamData';

const page = () => {
  return (
    <div className='p-[20px]'>
    <div>
        <h1 className="text-dark-blue text-[24px] font-bold">My Teams</h1>
        <p className="text-primary-blue">Dashboard / Teams</p>
      </div>
    <div className=''>
      <div className=" w-[100%] mt-8 grid grid-cols-4  gap-4  ">
        {TeamData.map((emp, index) => (
          <div
            className=" h-[213px] bg-gray-100 flex flex-col items-center gap-1 p-5 rounded-lg shadow-lg "
            key={index}
          >
            <img className="rounded-full" src={emp.image} alt={emp.name} />
            <h2 className="font-bold">{emp.name}</h2>
            <span>{emp.designation}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
 
 
 


export default page;
