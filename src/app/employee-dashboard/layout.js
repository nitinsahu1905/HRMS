import React from "react";

export default function EmployeeLayout({ children }) {
  return (
    <>
      <div className="bg-sky-color w-full h-auto flex flex-col gap-[25px] p-[25px] ">
        
       
        {children}
      </div>
      
    </>
  );
}
