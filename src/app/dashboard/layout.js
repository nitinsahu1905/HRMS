import Punchbox from "./@punchbox/page";

export default function Layout({ children, punchbox }) {
  return (
    <div className="bg-sky-color w-full h-[100vh] p-5 flex flex-col gap-5">
        <div>
          <h1 className="text-dark-blue text-[24px] font-bold">Welcome Admin!</h1>
          <p className="text-primary-blue">Dashboard</p>
        </div>
      <div> {punchbox}</div>
      <div>{children}</div>
    </div>
  );
}
