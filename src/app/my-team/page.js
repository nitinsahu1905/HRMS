"use client";
import React, { useState } from "react";
import { TeamData } from "../Constants/TeamData";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { useUser } from "../Context/UserContext";

const MyTeam = () => {
  const router = useRouter();
  // const user = useUser();
  // console.log("myTeam",user)

  const [team, setTeam] = useState(TeamData)
  const deleteHandler = (id) => {
    console.log("delete");

    const newTeam = team.filter((emp) => emp.id !== id);
    setTeam(newTeam);
  };
  return (
    <div className="p-[20px]">
      <div>
        <h1 className="text-dark-blue text-[24px] font-bold">My Teams</h1>
        <p className="text-primary-blue"><Link href={'/'} >Dashboard</Link> / Teams</p>
      </div>
      <div className="">
        <div className=" w-[100%] mt-8 grid grid-cols-6 md:grid-cols-6  gap-y-3 items-center justify-center  ">
          {team.map((emp) => (
            <div
              className=" relative h-[200px] w-[170px] bg-white flex hover:scale-105 hover:shadow-xl transition-all ease-in delay-120  flex-col items-center gap-1 p-5 rounded-lg shadow-lg gap-y-6 "
              key={emp.id}
            >
              {/* <div><BsThreeDotsVertical /></div> */}
              <span
                className="absolute top-4 right-2 cursor-pointer "
                onClick={() => deleteHandler(emp.id)}
              >
                <BsThreeDotsVertical />
              </span>

              {/* <img
                className="w-[80px] h-[80px] p-1 bg-primary-blue/35 rounded-full "
                src={emp.image}
                alt={emp.name}
              /> */}
              <Image
                className="w-[80px] h-[80px] p-1 bg-primary-blue/35 rounded-full "
                src={emp.image}
                alt={emp.name}
                width={80}
                height={80}
              />
              <div className="flex flex-col gap-y-1 items-center ">
                <h2 className="font-bold text-sm text-center ">{emp.name}</h2>
                <span className="text-[10.5px]">{emp.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
