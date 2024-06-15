import Punchbox from "./@punchbox/page";
import Dashboard from "./page";

export default function DashboardLayout({ children, punchbox }) {
  return (
    <div className=" ml-[4vw] bg-sky-color w-full h-auto flex flex-col gap-5 p-[20px] ">
      <div>
        <h1 className="text-dark-blue text-[24px] font-bold">Welcome Admin!</h1>
        {/* <p className="text-primary-blue">Dashboard</p> */}
      </div>
      <div>
        {/* <Punchbox /> */}
      </div>
      {/* <div> {punchbox}</div> */}
      <div>
        <Dashboard />
      </div>
      <div>{children}</div>
    </div>
  );
}
