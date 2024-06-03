import React from 'react'
import Image from 'next/image';
const Data =[
    {
        id:1,
        name:"Divyanshi Paliwal",
        designation : "Frontend Developer",
        email:"divyanshi.palliwal@gmail.com",
        img:'https://t4.ftcdn.net/jpg/01/98/68/53/360_F_198685380_UiiR2lCHgg7raR054Dv9v5cuOYdLCEdX.jpg'
    },
    {
        id:2,
        name:"Mohommad Farhan Sheikh",
        designation : "Frontend Developer",
        email:"SheikhFarhan11@gmail.com",
        img:"https://designimages.appypie.com/displaypicture/displaypicture-14-person-human.jpg"
      },
      {
        id:2,
        name:"Priyanshu Mishra",
        designation : "Frontend Developer",
        email:"SheikhFarhan11@gmail.com",
        img:"https://designimages.appypie.com/displaypicture/displaypicture-14-person-human.jpg"
      },
 
]
 
const Leaves = () => {
  return (
    <div className="lg:w-full  bg-white rounded-[15px] h-full  flex flex-col gap-[10px] pb-2 " >
    <div className=" my-[12px] text-dark-blue font-medium text-[22px] px-3 ml-3">
     Employee On Leave
    </div>
    <div className="flex flex-col h-full overflow-y-scroll scrollbar-hide ml-2 gap-3 ">
      {Data.map((data) => (
        <div key={data.id} className="w-full">
         
          <div className="flex flex-row justify-between items-center rounded-lg w-auto h-auto mx-2 p-2">
            
              {/* Image section */}
              <div className="overflow-hidden lg:h-16 lg:w-16 h-9 w-9  rounded-full border-none">
                <Image
                  src={data.img}
                  width={24}
                  height={24}
                  alt="Emp-img"
                 
                  className=" object-cover w-full h-full"
                />
              </div>
 
              <div className="flex flex-col lg:mx-2 mx-1 lg:gap-2 gap-1 lg:w-[calc(100%-64px)] w-[calc(100%-36px)] ">
                <div className="text-dark-blue font-medium lg:text-xl text-sm ">
                  {data.name}
                </div>
                <div className="text-dark-blue font-normal  lg:text-sm text-xs">
                  {data.designation}
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  </div>
 
    );
}
export default Leaves