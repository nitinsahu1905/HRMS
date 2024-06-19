"use client";
import React, { useState } from "react";
import { ImAngry } from "react-icons/im";
import { TbMoodUnamused } from "react-icons/tb";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { IoMdHappy } from "react-icons/io";
import { BiHappyBeaming } from "react-icons/bi";
import {
  selectiveFeedbackQuestions,
  inputFeedbackQuestions,
} from "../Constants/QuarterlyEmpFeedback";

const EmployeeQuarterlyFeedback = () => {
  const [selectiveFeedback, setSelectiveFeedback] = useState({});
  const [inputFeedback, setInputFeedback] = useState({});

  const handleRatingChange = (id, rating) => {
    setSelectiveFeedback((prevFeedback) => ({
      ...prevFeedback,
      [id]: rating,
    }));
  };

  const handleInputChange = (id, value) => {
    setInputFeedback((prevFeedback) => ({
      ...prevFeedback,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      selectiveFeedback,
      inputFeedback,
    };
    console.log("Feedback submitted:", feedbackData);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto w-[90%] bg-[#F7F7F7] flex flex-col gap-8 ml-[4.5vw] py-6 md:py-[1.6vw]"
    >
      {/* Heading for the page */}
      <header className="w-full flex flex-col items-center text-center">
        <h1 className="text-lg md:text-[1.25vw] font-semibold">
          Welcome to the Organization Quarterly Feedback Section!
        </h1>
        <p className="text-sm md:text-[0.829vw] text-[#808080]">
          Your insights and suggestions are invaluable to us.
        </p>
      </header>

      {/* Feedback questions rating on scale */}
      {selectiveFeedbackQuestions.map((query, index) => (
        <section
          key={index}
          className="text-base md:text-[1.133vw] w-full flex flex-col gap-4 md:gap-[0.9vw] justify-center px-4 md:px-[4.2vw]"
        >
          <span>{query.question}</span>
          <div className="flex flex-col gap-4 md:flex-row md:gap-[2.083vw]">
            {/* Rating icons */}
            <div className="flex gap-4 md:gap-[2.083vw]">
              <span
                className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-red-500"
                aria-label="Very Dissatisfied"
                onClick={() => handleRatingChange(index, "Very Dissatisfied")}
              >
                <ImAngry className="h-full w-4/5 transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
              </span>
              <span
                className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-red-300"
                aria-label="Dissatisfied"
                onClick={() => handleRatingChange(index, "Dissatisfied")}
              >
                <TbMoodUnamused className="h-full w-full transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
              </span>
              <span
                className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-orange-300"
                aria-label="Neutral"
                onClick={() => handleRatingChange(index, "Neutral")}
              >
                <HiOutlineEmojiSad className="h-full w-full transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
              </span>
              <span
                className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-yellow-200"
                aria-label="Satisfied"
                onClick={() => handleRatingChange(index, "Satisfied")}
              >
                <IoMdHappy className="h-full w-full transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
              </span>
              <span
                className="group h-8 md:h-[1.823vw] w-8 md:w-[1.823vw] flex items-center justify-center overflow-hidden rounded-full hover:bg-green-600"
                aria-label="Very Satisfied"
                onClick={() => handleRatingChange(index, "Very Satisfied")}
              >
                <BiHappyBeaming className="h-full w-full transform transition-transform duration-50 group-hover:scale-125 cursor-pointer" />
              </span>
            </div>

            {/* Input for any feedback */}
            <span className="text-sm md:text-[0.833vw] w-full md:w-[20vw] bg-[#F2F0F0] flex items-center justify-center p-[2vw] md:p-0">
              <input
                placeholder="Any feedback?"
                className="outline-none bg-[#F2F0F0] w-full px-2 md:px-[1vw]"
                aria-label="Additional feedback input"
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </span>
          </div>
        </section>
      ))}

      {/* Feedback questions for text inputs */}
      {inputFeedbackQuestions.map((query, index) => (
        <section
          key={index}
          className="w-full flex flex-col gap-4 md:gap-[0.9vw] justify-center px-4 md:px-[4.2vw]"
        >
          <span>{query.question}</span>
          <input
            placeholder="Enter your response"
            className="border-b border-[#808080] p-2 md:p-[.5vw] outline-none"
            aria-label="Feedback text input"
            onChange={(e) =>
              handleInputChange(
                selectiveFeedbackQuestions.length + index,
                e.target.value
              )
            }
          />
        </section>
      ))}

      {/* Submit button */}
      <footer className="flex justify-center h-auto w-full">
        <button
          type="submit"
          className="bg-[#0683C6] md:w-[10vw] flex justify-center items-center rounded-md text-white text-base md:text-[1vw] py-2 md:py-[0.4vw] px-4 md:px-[1vw]"
        >
          Submit
        </button>
      </footer>
    </form>
  );
};

export default EmployeeQuarterlyFeedback;
