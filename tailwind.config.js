/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SFProRegular: ["SFProRegular", "sans"],
        SFProMedium: ["SFProMedium", "sans"],
        SFProSemiBold: ["SFProSemiBold", "sans"],
        TTFirsNeueDemiBold: ["TTFirsNeueDemiBold", "sans"],
      },
      colors: {
        darkBg: "#131316",
        lightBg: "#fff",
        darkGray: "rgba(16, 15, 27, 0.75)",
        lightGray: "rgba(236, 234, 255, 0.75)",
        lightActiveBtn: "rgba(16, 15, 27, 0.45)",
        darkActiveBtn: "#fff",
        buttonDarkGray: "#1d1b20",
        buttonGray: "rgba(239, 239, 245, 1)",
        circleDarkTheme: "rgba(114, 96, 230, 1)",
        circleLightTheme: "rgba(16, 15, 27, 0.05)",
        borderCircle: "rgba(226, 226, 233, 1)",
        blockGray: "rgba(247, 247, 251, 1)",
        blockDark: "rgba(26, 26, 31, 1)",
        darkGray: "rgba(16, 15, 27, 0.6)",
        textGray: "rgba(16, 15, 27, 0.25)",
        itemCoinHov: "rgba(247, 247, 251, 0.75)",
        red: "rgba(226, 78, 78, 1)",
        purple: "rgba(114, 96, 230, 1)",
      },
      boxShadow: {
        lightShadowBlock: "0px 16px 24px 0px rgba(16, 15, 27, 0.07)",
        darkSHadowBlock: "0px 16px 24px 0px rgba(32, 32, 36, 0.2)",
      },
    },
  },
  plugins: [],
};
