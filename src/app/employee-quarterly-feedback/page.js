import { ImAngry } from "react-icons/im";
import { TbMoodUnamused } from "react-icons/tb";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { IoMdHappy } from "react-icons/io";
import { BiHappyBeaming } from "react-icons/bi";
import { FaAsterisk } from "react-icons/fa";
import { selectiveFeedbackQuestions } from "../Constants/QuarterlyEmpFeedback";
import { inputFeedbackQuestions } from "../Constants/QuarterlyEmpFeedback";

const EmployeeQuarterlyFeedback = () => {
  return (
    <div className="h-auto w-full bg-[#F7F7F7] flex flex-col gap-8 ml-[4.5vw] py-6 md:py-[1.6vw]">
      {/* heading for the page */}
      <div className="w-full flex flex-col items-center text-center">
        <span className="text-lg md:text-[1.25vw] font-semibold">
          Welcome to the Organization Quarterly Feedback Section!
        </span>
        <span className="text-sm md:text-[0.829vw] text-[#808080]">
          Your insights and suggestions are invaluable to us.
        </span>
      </div>

      {/* feedback-questions rating on scale */}
      {selectiveFeedbackQuestions.map((query) => (
        <div
          key={query.id}
          className="text-base md:text-[1.133vw] w-full flex flex-col gap-4 md:gap-[0.9vw] justify-center px-4 md:px-[4.2vw]"
        >
          <span>{query.question}</span>
          <div className="flex gap-4 md:gap-[2.083vw]">
            <span className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-red-500">
              <ImAngry className="h-full w-4/5 transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
            </span>
            <span className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-red-300">
              <TbMoodUnamused className="h-full w-full transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
            </span>
            <span className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-orange-300">
              <HiOutlineEmojiSad className="h-full w-full transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
            </span>
            <span className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-yellow-200">
              <IoMdHappy className="h-full w-full transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
            </span>
            <span className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-green-600">
              <BiHappyBeaming className="h-full w-full transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
            </span>
            <span className="text-sm md:text-[0.833vw] w-full md:w-[20vw] bg-[#F2F0F0] flex items-center justify-center">
              <input
                placeholder="Any feedback?"
                className="outline-none bg-[#F2F0F0] w-full px-2 md:px-[1vw]"
              />
            </span>
          </div>
        </div>
      ))}

      {/* feedback-question for inputs */}
      {inputFeedbackQuestions.map((query) => (
        <div
          key={query.id}
          className="w-full flex flex-col gap-4 md:gap-[0.9vw] justify-center px-4 md:px-[4.2vw]"
        >
          <span>{query.question}</span>
          <input
            placeholder="Enter your response"
            className="border-b border-[#808080] p-2 md:p-[.5vw] outline-none"
          />
        </div>
      ))}

      {/* button to submit */}
      <div className="flex justify-center h-auto w-full">
        <button className="bg-[#0683C6] w-[10vw] flex justify-center items-center rounded-md text-white text-base md:text-[1vw] py-2 md:py-[0.4vw] px-4 md:px-[1vw]">
          Submit
        </button>
      </div>
    </div>
  );
};
export default EmployeeQuarterlyFeedback;
