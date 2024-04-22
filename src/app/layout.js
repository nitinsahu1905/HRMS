"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./sidebar/page";
import { useEffect, useState } from "react";
import Login from "./login/page";
import { ProfileContextProvider } from "./Context/profileContext";
import { UserProvider } from "./Context/UserContext";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    // Boolean(sessionStorage.getItem("admin"))
    false
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("admin")) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  return (
    <html lang="en">
    <UserProvider>
      <body className="font-poppins">
            {/* <ProfileContextProvider> */}
        {!isLoggedIn ? (
          <Login set={setIsLoggedIn} />
        ) : (
          <div className="flex flex-row gap-0 relative w-full ">
            {!sidebarCollapse ? (
              <div className=" w-[262px] relative ">
                <Sidebar
                  collapse={sidebarCollapse}
                  setCollapse={setSidebarCollapse}
                />
              </div>
            ) : (
              <div className=" w-[62px] relative ">
                <Sidebar
                  collapse={sidebarCollapse}
                  setCollapse={setSidebarCollapse}
                />
              </div>
            )}

            {/* section for the children pages which come through different routes */}
            <div className="flex-[1_0] w-[calc(100%-262px)] relative ">
              {children}{" "}
            </div>
          </div>
        )}
        {/* </ProfileContextProvider> */}
      </body>
      </UserProvider>
    </html>
  );
}
