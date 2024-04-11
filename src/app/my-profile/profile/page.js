import "../../../app/globals.css";

export default function Profile() {
  return (
    <div className="flex font-poppins">
      {/* box for the left side */}
      <div className="w-1/4  mt-16 ml-8 flex flex-col">
        <span className="font-semibold">Gourav Goyal</span>
        <span className="text-xs pl-1">CEO at Metadologie</span>
      </div>

      {/* box for the right side */}
      <div className="w-2/ gap-28">
        {/* first row for the data */}
        <div className="flex items-center gap-32 px-8 h-14">
          <span className="w-14">NAME:</span>
          <span>Gourav Goyal</span>
        </div>

        {/* second row for the data */}
        <div className="flex items-center gap-32 px-8 h-11">
          <span className="w-14">TITLE:</span>
          <span>CEO</span>
        </div>

        {/* 3rd row for the data */}
        <div className="flex items-center gap-32 px-8 h-11">
          <span className="w-14">EMPLOYEE NUMBER:</span>
          <span>MTK870J</span>
        </div>

        {/* 4th row for the data */}
        <div className="flex items-center gap-32 px-8 h-11">
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
