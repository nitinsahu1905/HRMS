export default function Work() {
  return (
    <div className="flex font-poppins">
      

      {/* box for the right side */}
      <div className="w-full gap-28">
        {/* first row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 py-6 h-14 border-b border-dashed border-gray-400">
          <span className="w-14">MANAGER:</span>
          <span>Gourav Goyal</span>
        </div>

        {/* second row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">EMPLOYEE CODE:</span>
          <span>MCL001</span>
        </div>

        {/* 3rd row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">EMAIL:</span>
          <span>gourav.goyal@metadologie.com</span>
        </div>

        {/* 4th row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">EARNED LEAVES:</span>
          <span className="">5.5</span>
        </div>
      </div>
    </div>
  );
}
