/**
@type
{import('tailwindcss').Config}
*/
module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#2F2EA6",
        "sky-color": "#f7f7f7",
        "primary-blue": "#0b91cf",
        "secondary-blue": "#0684C7",
        "button-blue-color": "#0684C7",
        "dark-blue": "#121F48",
        "grey-color": "#808080",

        // Colors for All Timesheet Page Filter Buttons
        allBorderClr: "#bfe9ff",
        allBgClr: "#bfe9ff",
        allTxtClr: "#121F47",
        myTimesheetsBorderClr: "#DAF2FF",
        myTimesheetsBgClr: "#fff",
        myTimesheetsTxtClr: "#025F92",
        reviewRequestBorderClr: "#FFC0BC",
        reviewRequestBgClr: "#fff",
        reviewRequestTxtClr: "#DA7950",
        draftBorderClr: "#DAF2FF",
        submittedBorderClr: "#ADE2FF",
        submittedBgClr: "#fff",
        submittedTxtClr: "rgba(0, 114, 176, 1)",
        rejectedBorderClr: "#FCABAB",
        rejectedBgClr: "#fff",
        rejectedTxtClr: "#A90303",
        approvedBorderClr: "#CDF6CD",
        approvedBgClr: "#fff",
        approvedTxtClr: "#009300",
      },
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
