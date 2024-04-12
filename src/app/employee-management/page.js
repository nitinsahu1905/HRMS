import React from "react";
import { Link } from "next/link";
import Card from "../Components/Card";

export default function employee() {
  return (
    <div className=" p-[20px] flex flex-col gap-[20px] ">
      <div className="">
          <h1 className="text-dark-blue text-[24px] font-bold">Add Employees</h1>
          {/* <p className="text-primary-blue">Dashboard</p> */}
        </div>
      <Card>

      <div
        className="flex flex-row  "
        // style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="flex flex-col p-6 mb-6 mr-56 ml-20">
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1 ">
              First Name
            </label>

            <input
              type="text"
              placeholder="Enter First Name"
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1">
              Middle Name
            </label>

            <input
              type="text"
              placeholder="Enter Middle Name"
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1">
              Last Name
            </label>

            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1">
              Personal Email ID
            </label>

            <input
              type="text"
              placeholder="Enter Personal Email ID"
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1">
              Official Email ID
            </label>

            <input
              type="text"
              placeholder="Enter Official Email ID"
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>
        </div>
        <div className="flex flex-col p-6 mb-6  ">
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1">
              Designation
            </label>

            <input
              type="text"
              placeholder="Enter Designation"
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1">
              Department
            </label>

            <input
              type="text"
              placeholder="Enter Department"
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1">
              Employee ID
            </label>

            <input
              type="text"
              placeholder="Enter Employee ID"
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1">
              Reporting Manager
            </label>

            <input
              type="text"
              placeholder="Enter Reporting Manager"
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label for="fname" className="mb-1">
              Contact No.
            </label>

            <input
              type="text"
              placeholder="Enter Contact No."
              className="w-64 h-11 px-4 rounded-md border border-gray-400 mb-5"
              name="fname"
            ></input>
          </div>{" "}
        </div>
      </div>
      </Card>
      <button
        type="submit"
        className="h-10 bg-button-blue-color text-white rounded-md mt-4 mx-auto ml-96 text-sm p-2"
      >
        Add Employee
      </button>
    </div>
  );
}
