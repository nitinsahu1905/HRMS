"use client";
import React from "react";
import EmployeeDetail from "../Components/EmployeeFeedback/EmployeeDetail";
import EmployeeDetailImportant from "../Components/EmployeeFeedback/EmployeeDetailImportant";
import EmployeeFeedbackSection from "../Components/EmployeeFeedback/EmployeeFeedbackSection";
import { EmployeeFeedbackSectionData } from "../Constants/EmployeeFeedbackSectionData";
import Image from "next/image";

const EmployeeQuartelyFeedback = () => {
  return (
    <div className="px-6 py-4 flex flex-col gap-10 bg-[#f7f7f7]">
      {/* heading */}
      <div className="flex flex-col gap-1">
        <div className="text-2xl text-[#121f47] font-medium">
          Employee Feedbacks
        </div>
        <div className="font-medium text-xs text-[#0683c6]">
          Dec-March 2024-Divyanshi
        </div>
      </div>

      {/* details of employee */}
      <div className="flex flex-col gap-4  w-[75%] px-4 py-4">
        <div className="flex flex-row gap-2">
          <div className="h-10 w-10">
            <Image
              src="https://t4.ftcdn.net/jpg/02/82/72/09/360_F_282720917_7ZtAfEqEfA6CRT66imV9avGWXEg9w6Jt.jpg"
              alt="employee-pic"
              width={40}
              height={40}
              className="rounded-full object-cover w-full h-full"
            />{" "}
            {/* Add alt prop and specify width and height */}
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[#67b2da] text-xl">Divyanshi Paliwal</div>
            <div className="w-full h-[1px] bg-[#808080]"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-20 gap-y-5">
          {/* {employeeMonthlyFeedbackData.map((data)=>
            <> */}
          <EmployeeDetail
            heading="Designation"
            headingValue="Frontend Developer"
          />
          <EmployeeDetail
            heading="Feedback Type"
            headingValue="Quartely Feedback"
          />
          <EmployeeDetail heading="Feedback Date" headingValue="01/03/2024" />
          <EmployeeDetailImportant
            heading="Last modified By"
            headingValue="Ishita Saini"
          />
          <EmployeeDetail heading="Status" headingValue="Draft" />
          <EmployeeDetailImportant
            heading="Created By"
            headingValue="User12232382478728"
          />
          {/* </>
        )}
         */}
        </div>
      </div>

      {/* feedback section */}
      <div className="w-full  bg-white  flex flex-col rounded-lg">
        <div className="text-[#025F92] bg-[#DAF2FF] p-2 font-medium rounded-tl-lg rounded-tr-lg">
          Feedbacks
        </div>
        <div className="w-full flex flex-row flex-wrap  gap-y-8">
          {EmployeeFeedbackSectionData.map((data) => (
            <>
              <EmployeeFeedbackSection
                heading="Organization Feedback"
                value={data.OrganizationFeedback}
                img={"./Organization.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Asset Feedback"
                value={data.AssetFeedback}
                img={"./assests.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Colleague and Cultural Feedback"
                value={data.ColleaguesAndCulturalFeedback}
                img={"./colleague.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Manager Feedback"
                value={data.ManagerFeedback}
                img={"./Manager.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Effective and Effecient Timelines"
                value={data.ManagerFeedback}
                img={"./Timeline.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Leadership and Mentorship"
                value={data.ManagerFeedback}
                img={"./Leader.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Work Ethics(Behavioural Attitude )"
                value={data.ManagerFeedback}
                img={"./workEthics.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Communication Skills"
                value={data.ManagerFeedback}
                img={"./CommunicationSkill.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Initiative"
                value={data.ManagerFeedback}
                img={"./Initiative.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Key Compentencies"
                value={data.ManagerFeedback}
                img={"./KeyCompentencies.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Problem solver/decision making"
                value={data.ManagerFeedback}
                img={"./problemSolver.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Technical knowledge"
                value={data.ManagerFeedback}
                img={"./technicalKnowledge.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Work under pressure"
                value={data.ManagerFeedback}
                img={"./workUnderPressure.jpg"}
              />
              <EmployeeFeedbackSection
                heading="flexibility and Adaptability"
                value={data.ManagerFeedback}
                img={"./Manager.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Goal For Next Quarter"
                value={data.ManagerFeedback}
                img={"./flexibility.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Self Reflection on Last Quarter"
                value={data.ManagerFeedback}
                img={"./Self_Reflection.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Challenges Faced"
                value={data.ChallengesFaced}
                img={"./challenge.jpg"}
              />
              <EmployeeFeedbackSection
                heading="Remarks"
                value={data.Remarks}
                img={"./rewards.jpg"}
              />
            </>
          ))}
        </div>
      </div>

      {/* factors for assesment */}
      <div>factors</div>
    </div>
  );
};

export default EmployeeQuartelyFeedback;
