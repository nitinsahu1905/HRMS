import { forecastingData } from "../Constants/ForecastingData"
import { FaAngleDown } from "react-icons/fa6";
 
 
export default function  Forecasting() {
 
  console.log(forecastingData)
return <div className="flex items-center justify-center h-screen">
   <div className="w-[971px] h-[445px] flex flex-col gap-2 bg-white ">
 
     {/* heading of the component & also date filter */}
     <div className="h-[63.5px] bg-white w-full flex justify-between items-center p-6">
       <span className="text-[22px] font-medium">My Weekly Plan</span>
       <div className="border-[1px] border-[#808080] rounded-[10px] p-1 pl-2 pr-2 flex items-center gap-4">
         <span className="text-[15px] text-[#808080]">May 13, 2024</span>
         {/* <FaAngleDown className="text-[#808080]" /> */}
         <FaAngleDown />
 
       </div>
     </div>
 
     {forecastingData.map((data) => <div className="h-[63.5px] bg-white flex items-center gap-4 p-6        ">
         <span className="text-[16px] w-[110px]">{Object.keys(data)}</span>
 
       {/* entry-1 */}
       <div className="bg-[#E6F3F9] w-[324px] h-[49px] border-t-[2px] border-[#0683C6] rounded-[10px]">
         <span className="text-[#0683C6] flex items-center pl-6 h-full w-full font-medium">
           {Object.values(data)[0][0]}
         </span>
       </div>
 
       {/* entry-2 */}
       <div className="bg-[#E6F3F9] w-[324px] h-[49px] border-t-[2px] border-[#0683C6] rounded-[10px]">
         <span className="text-[#0683C6] flex items-center pl-6 h-full w-full font-medium">
           {Object.values(data)[0][1]}
         </span>
       </div>
 
       {/* entry-3 */}
       <div className="bg-[#E6F3F9] w-[158px] h-[49px] border-t-[2px] border-[#0683C6] rounded-[10px]">
         <span className="text-[#0683C6] flex items-center pl-6 h-full w-full font-medium">
           {Object.values(data)[0][2]}
         </span>
       </div>
     </div>)
}
     <div className="h-[63.5px] bg-white"></div>
   </div>
</div>
}