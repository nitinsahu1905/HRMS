"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./sidebar/page";
import { useState } from "react";
import Login from "./login/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins">
        {!isLoggedIn ? (
          <Login set={setIsLoggedIn} />
        ) : (
          <div className="flex flex-row gap-0 relative w-full ">
            <div className=" w-[262px] relative overflow-hidden">
              <Sidebar />
            </div>
            <div className="flex-[1_0] w-[calc(100%-262px)] relative ">
              {children}{" "}
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
