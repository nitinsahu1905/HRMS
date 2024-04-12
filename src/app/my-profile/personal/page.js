export default function Personal() {
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
        <div className="w-full text-sm flex items-center gap-32 p-8 py-6 h-14 border-b border-dashed border-gray-400">
          <span className="w-14">DOB:</span>
          <span>1990-01-01</span>
        </div>

        {/* second row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">EMAIL:</span>
          <span>gourav.goyal@gmail.com</span>
        </div>

        {/* 3rd row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">GENDER:</span>
          <span>Male</span>
        </div>

        {/* 4th row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">PHONE:</span>
          <span className="">912345678</span>
        </div>

        {/* 5th row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">ADDRESS:</span>
          <span className="">
            94/5, 1st & 2nd floor, Vijay Path, Madhyam Marg, Sector 9,
            Mansarovar, Jaipur, Rajasthan 302020
          </span>
        </div>
      </div>
    </div>
  );
}
