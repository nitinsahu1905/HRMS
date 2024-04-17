import "../../../app/globals.css";

export default function Profile() {
  return (
    <div className="flex font-poppins">
      {/* box for the left side */}
      <div className="w-1/4  mt-16 ml-8 flex flex-col ">
        <span className="font-semibold">Gourav Goyal</span>
        <span className="text-xs pl-1">CEO at Metadologie</span>
      </div>

      {/* box for the right side */}
      <div className="w-3/4 gap-28">
        {/* first row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 py-6 h-14 border-b border-dashed border-gray-400">
          <span className="w-14">NAME:</span>
          <span>Gourav Goyal</span>
        </div>

        {/* second row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">TITLE:</span>
          <span>CEO</span>
        </div>

        {/* 3rd row for the data */}
          {/* <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
            <span className="w-14">EMPLOYEE NUMBER:</span>
            <span>MTK870J</span>
          </div> */}

        {/* 4th row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">EFFICIENCY:</span>
          <span className="">
            97%
          </span>
        </div>
      </div>
    </div>
  );
}
