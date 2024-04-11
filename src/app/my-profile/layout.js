"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPowerOff } from "react-icons/fa";

export default function ProfileLayout({ children }) {
  // getting pathname from the current url
  const routes = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* box for the bg image */}
      <div className="relative">
        <img src="https://metadologie-operations-dev-ed.my.site.com/empcommunity/s/sfsites/c/img/community/cpt/cpt-profile-banner.png" />
      </div>

      {/* box for the content */}
      <div className="">
        {/* box for the navigaiton & image */}
        <div className="bg-secondary-blue flex justify-evenly h-12 relative ">
          {/* profile image */}
          <div className="rounded-full object-cover absolute top-[-40px] left-[60px]  bg-white p-1 h-32 w-32">
            <img className="rounded-full " src="/profileImg.jpeg" />
          </div>

          {/* navigation tabs */}
          <div className="flex ">
            {/* link to profile section */}
            <span
              className={`${
                routes === "/my-profile/profile"
                  ? "bg-white text-secondary-blue"
                  : ""
              } text-[14px] cursor-pointer flex items-center justify-center p-3`}
            >
              <Link href="/my-profile/profile">PROFILE</Link>
            </span>

            {/* link to personal section */}
            <span
              className={`${
                routes === "/my-profile/personal"
                  ? "bg-white text-secondary-blue"
                  : ""
              } text-[14px] cursor-pointer flex items-center justify-center p-3`}
            >
              <Link href="/my-profile/personal">PERSONAL</Link>
            </span>

            {/* link to work section */}
            <span
              className={`${
                routes === "/my-profile/work"
                  ? "bg-white text-secondary-blue"
                  : ""
              } text-[14px] cursor-pointer flex items-center justify-center p-3 `}
            >
              <Link href="/my-profile/work">WORK</Link>
            </span>
          </div>

          {/* log-off icon */}
          <span className="flex items-center justify-center text-white">
            <Link href="/">
              <FaPowerOff />
            </Link>
          </span>
        </div>

        {/* passing childer component here */}
        <div className="">{children}</div>
      </div>
    </div>
  );
}
