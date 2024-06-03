import React from "react";
import EmployeeDashboard from "./page";

const EmployeeDashboardLayout =({ children })=> {
  return (
    <>
      <div className="bg-sky-color w-full h-auto flex flex-col gap-[25px] p-[25px] ">     
        {/* {children} */}
        <EmployeeDashboard />
      </div>
      
    </>
  );
}

export default EmployeeDashboardLayout
