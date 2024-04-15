"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { checkValidData } from "@/app/utils/validate";
import { authTable, firestoreDB } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Login(props) {
  // states
  const [error, setError] = useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // reference for the admin table
  const adminTable = collection(firestoreDB, "admin");

  const loginHandler = async (event) => {
    event.preventDefault();
    // checking for null fields
    if (!email || !password) {
      setError("Kindly fill the required details");
      return;
    }

    // checking validations for entries
    const validity = checkValidData(email, password);
    if (validity) {
      setError(validity);
      return;
    }

    // checking for admin proof
    try {
      const data = await signInWithEmailAndPassword(authTable, email, password);
      console.log(data);
      const adminDocs = await getDocs(adminTable)
      let adminList = [];
      adminDocs.forEach(doc=>{
        const adminData = doc.data();
        adminList.push(adminData)
      })
     
    } catch (error) {}
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* heading of the page */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary-blue md:text-2xl">
              Sign in to your account
            </h1>

            {/* form for the login */}
            <form className="space-y-4 md:space-y-6">
              {/* email section */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              {/* section for the password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>

              {/* forgot & error */}
              <div className="flex items-center justify-between">
                {/* conditionally rendering error section */}
                {error && (
                  <div className="flex items-start">
                    <div className="ml-3 text-sm text-red-700">{`*${error}`}</div>
                  </div>
                )}

                {/* forgot-password section  */}
                <Link
                  href="#"
                  className="text-sm font-medium text-secondary-blue hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* sign in button */}
              <button
                onClick={loginHandler}
                className="w-full text-white bg-secondary-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
