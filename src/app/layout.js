"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./sidebar/page";
import { useEffect, useState } from "react";
import Login from "./login/page";
import { UserProvider } from "./Context/UserContext";
import { RxHamburgerMenu } from "react-icons/rx";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
  const [sidebarMobileCollapse, setSidebarMobileCollapse] = useState(true);

  // fucntion to handle setSidebarMobileCollapse
  const handleMobileSidebarCollapse = () => {
    setSidebarMobileCollapse(!sidebarMobileCollapse);
  };

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <UserProvider>
        <body className="font-poppins">
          {!isLoggedIn ? (
            <Login set={setIsLoggedIn} />
          ) : (
            <div className="flex md:flex-row flex-col gap-0 relative w-full ">
              {!sidebarCollapse ? (
                <div className=" w-[262px] relative md:block hidden ">
                  <Sidebar
                    collapse={sidebarCollapse}
                    setCollapse={setSidebarCollapse}
                  />
                </div>
              ) : (
                <div className=" w-[62px] relative md:block hidden ">
                  <Sidebar
                    collapse={sidebarCollapse}
                    setCollapse={setSidebarCollapse}
                  />
                </div>
              )}

              {/* Hamburger for Opening Sidebar in Moble View */}
              <div className="md:hidden block absolute z-10 py-[10px] px-[10px] text-[30px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.1)] text-dark-blue ">
                <RxHamburgerMenu
                  onClick={() => handleMobileSidebarCollapse()}
                />
              </div>

              {/* Side for Mobile View */}
              {!sidebarMobileCollapse ? (
                <Sidebar
                  mobileCollapse={sidebarMobileCollapse}
                  setMobileSidebarCollapse={setSidebarMobileCollapse}
                />
              ) : null}

              {/* section for the children pages which come through different routes */}
              <div className="flex-[1_0] lg:w-[calc(100%-262px)] md:w-[calc(100%-262px)] w-full md:pt-0 pt-[50px] relative ">
                {children}{" "}
              </div>
            </div>
          )}
        </body>
      </UserProvider>
    </html>
  );
}
