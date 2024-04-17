// import dashboard from "./dashboard/page";
// "use client"
import Link from "next/link";
import Button from "./Components/button";
import DashboardLayout from "./dashboard/layout";
// import DashboardLayout from "./dashboard/page";
// import DashboardLayout from "./dashboard/layout";

export default function Home() {
  return (
    <>
      <DashboardLayout />
    </>
  );
}

{
  /*<div className="bg-black/60 flex justify-center items-center w-full h-screen ">
   <Link href="/dashboard">
  <Button>
    Get Started
  </Button>
  </Link> 

<div>Welcome to home</div>
<button className="bg-cyan text-[#0683c6] px-4 font-serif "><Link href="/dashboard">Login</Link></button> 
</div>
*/
}
