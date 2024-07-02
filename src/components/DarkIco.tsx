import { LightIcoProps } from "../types";

const DarkIco: React.FC<LightIcoProps> = ({ lightTheme, setLightTheme }) => {
  return (
    <div
      className="z-10 cursor-pointer p-[7px] transition"
      onClick={() => (setLightTheme ? setLightTheme(false) : null)}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.69501 1.63527C7.81781 1.47315 7.83016 1.2528 7.72626 1.07796C7.62237 0.903126 7.42292 0.808642 7.22182 0.83899C3.97514 1.32896 1.5 4.1921 1.5 7.63265C1.5 11.4134 4.49133 14.5001 8.20787 14.5001C11.0684 14.5001 13.5011 12.6692 14.4679 10.1048C14.54 9.9135 14.4884 9.69758 14.3376 9.55956C14.1868 9.42155 13.9671 9.38923 13.783 9.47796C13.1377 9.78887 12.4175 9.96261 11.6567 9.96261C8.89715 9.96261 6.63858 7.66447 6.63858 4.8027C6.63858 3.60706 7.03345 2.50876 7.69501 1.63527Z"
          fill={lightTheme ? "rgba(16, 15, 27, 0.25)" : "white"}
        />
      </svg>
    </div>
  );
};
export default DarkIco;
